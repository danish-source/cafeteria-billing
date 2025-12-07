const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve frontend files (index.html, styles.css, script.js, images) from this folder
const publicDir = path.join(__dirname);
app.use(express.static(publicDir));

// --- SQLite database setup ---
const dbPath = path.join(__dirname, 'cafeteria.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Menu items table (for admin-added items)
  db.run(`
    CREATE TABLE IF NOT EXISTS menu_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT,
      category TEXT NOT NULL,
      image TEXT
    )
  `);

  // Orders table
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_name TEXT,
      total_amount REAL NOT NULL,
      created_at TEXT NOT NULL
    )
  `);

  // Order items table
  db.run(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      menu_item_id INTEGER,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL,
      FOREIGN KEY(order_id) REFERENCES orders(id)
    )
  `);
});

// --- API routes ---

// GET /menu-items - return admin-added menu items from DB
app.get('/menu-items', (req, res) => {
  db.all('SELECT * FROM menu_items', (err, rows) => {
    if (err) {
      console.error('Error fetching menu items from DB:', err);
      return res.status(500).json({ message: 'Failed to fetch menu items' });
    }
    res.json(rows);
  });
});

// POST /menu-items - save a new admin-added menu item
app.post('/menu-items', (req, res) => {
  const { name, price, description, category, image } = req.body || {};

  if (!name || typeof price !== 'number' || !category) {
    return res.status(400).json({ message: 'Invalid menu item data' });
  }

  const stmt = db.prepare(`
    INSERT INTO menu_items (name, price, description, category, image)
    VALUES (?, ?, ?, ?, ?)
  `);

  stmt.run(name, price, description || '', category, image || null, function (err) {
    if (err) {
      console.error('Error inserting menu item into DB:', err);
      return res.status(500).json({ message: 'Failed to save menu item' });
    }

    res.status(201).json({
      id: this.lastID,
      name,
      price,
      description: description || '',
      category,
      image: image || null
    });
  });
});

// DELETE /menu-items/:id - delete an admin-added menu item
app.delete('/menu-items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid menu item id' });
  }

  db.run('DELETE FROM menu_items WHERE id = ?', [id], function (err) {
    if (err) {
      console.error('Error deleting menu item from DB:', err);
      return res.status(500).json({ message: 'Failed to delete menu item' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.json({ message: 'Menu item deleted successfully' });
  });
});

// POST /save-order (API)
// Expects: { customerName: string, items: array, totalAmount: number }
app.post('/save-order', (req, res) => {
  const { customerName, items, totalAmount } = req.body || {};

  if (!items || !Array.isArray(items) || typeof totalAmount !== 'number') {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  const createdAt = new Date().toISOString();

  db.serialize(() => {
    db.run(
      `
      INSERT INTO orders (customer_name, total_amount, created_at)
      VALUES (?, ?, ?)
    `,
      [customerName || 'Walk-in Customer', totalAmount, createdAt],
      function (err) {
        if (err) {
          console.error('Error inserting order into DB:', err);
          return res.status(500).json({ message: 'Failed to save order' });
        }

        const orderId = this.lastID;
        const stmt = db.prepare(`
          INSERT INTO order_items (order_id, menu_item_id, name, price, quantity)
          VALUES (?, ?, ?, ?, ?)
        `);

        items.forEach(item => {
          stmt.run(
            orderId,
            item.id || null,
            item.name,
            item.price,
            item.quantity
          );
        });

        stmt.finalize(err2 => {
          if (err2) {
            console.error('Error inserting order items into DB:', err2);
            return res.status(500).json({ message: 'Failed to save order items' });
          }

          return res.status(201).json({
            message: 'Order saved successfully',
            order: {
              id: orderId,
              customerName: customerName || 'Walk-in Customer',
              items,
              totalAmount,
              createdAt
            }
          });
        });
      }
    );
  });
});

// Fallback route to serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`RKDF Cafeteria backend running on http://localhost:${PORT}`);
});


