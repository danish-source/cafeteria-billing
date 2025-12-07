const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve frontend files (index.html, styles.css, script.js, images) from this folder
const publicDir = path.join(__dirname);
app.use(express.static(publicDir, {
  // Ensure images are served with correct MIME types
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
  }
}));

// --- PostgreSQL database setup ---
// Render automatically provides DATABASE_URL environment variable for PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost/cafeteria',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// Initialize database tables
async function initializeDatabase() {
  try {
    // Menu items table (for admin-added items)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT,
        category TEXT NOT NULL,
        image TEXT
      )
    `);

    // Orders table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_name TEXT,
        total_amount REAL NOT NULL,
        created_at TEXT NOT NULL
      )
    `);

    // Order items table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER NOT NULL,
        menu_item_id INTEGER,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE
      )
    `);

    console.log('Database tables initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

// Initialize database on startup
initializeDatabase();

// --- API routes ---

// GET /menu-items - return admin-added menu items from DB
app.get('/menu-items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu_items ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching menu items from DB:', err);
    res.status(500).json({ message: 'Failed to fetch menu items' });
  }
});

// POST /menu-items - save a new admin-added menu item
app.post('/menu-items', async (req, res) => {
  const { name, price, description, category, image } = req.body || {};

  if (!name || typeof price !== 'number' || !category) {
    return res.status(400).json({ message: 'Invalid menu item data' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO menu_items (name, price, description, category, image)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, price, description || '', category, image || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting menu item into DB:', err);
    res.status(500).json({ message: 'Failed to save menu item' });
  }
});

// DELETE /menu-items/:id - delete an admin-added menu item
app.delete('/menu-items/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid menu item id' });
  }

  try {
    const result = await pool.query('DELETE FROM menu_items WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.json({ message: 'Menu item deleted successfully' });
  } catch (err) {
    console.error('Error deleting menu item from DB:', err);
    res.status(500).json({ message: 'Failed to delete menu item' });
  }
});

// POST /save-order (API)
// Expects: { customerName: string, items: array, totalAmount: number }
app.post('/save-order', async (req, res) => {
  const { customerName, items, totalAmount } = req.body || {};

  if (!items || !Array.isArray(items) || typeof totalAmount !== 'number') {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  const createdAt = new Date().toISOString();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Insert order
    const orderResult = await client.query(
      `INSERT INTO orders (customer_name, total_amount, created_at)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [customerName || 'Walk-in Customer', totalAmount, createdAt]
    );

    const orderId = orderResult.rows[0].id;

    // Insert order items
    for (const item of items) {
      await client.query(
        `INSERT INTO order_items (order_id, menu_item_id, name, price, quantity)
         VALUES ($1, $2, $3, $4, $5)`,
        [orderId, item.id || null, item.name, item.price, item.quantity]
      );
    }

    await client.query('COMMIT');

    res.status(201).json({
      message: 'Order saved successfully',
      order: {
        id: orderId,
        customerName: customerName || 'Walk-in Customer',
        items,
        totalAmount,
        createdAt
      }
    });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error saving order:', err);
    res.status(500).json({ message: 'Failed to save order' });
  } finally {
    client.release();
  }
});

// Fallback route to serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`RKDF Cafeteria backend running on http://localhost:${PORT}`);
});
