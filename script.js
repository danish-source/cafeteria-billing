// Menu data with categories
const menuItems = [
    // Lunch Items (6 items)
    {
        id: 1,
        name: "Chicken Biryani",
        price: 180,
        description: "Fragrant basmati rice with tender chicken",
        category: "lunch",
        image: "chicken-biryani.jpg"
    },
    {
        id: 2,
        name: "Veg Biryani",
        price: 120,
        description: "Aromatic rice with mixed vegetables",
        category: "lunch",
        image: "veg-biryani.jpg"
    },
    {
        id: 3,
        name: "Butter Chicken",
        price: 200,
        description: "Creamy tomato curry with tender chicken",
        category: "lunch",
        image: "butter-chicken.jpg"
    },
    {
        id: 4,
        name: "Dal Makhani",
        price: 80,
        description: "Rich black lentils in creamy sauce",
        category: "lunch",
        image: "dal-makhani.jpg"
    },
    {
        id: 5,
        name: "Paneer Butter Masala",
        price: 140,
        description: "Cottage cheese in creamy tomato sauce",
        category: "lunch",
        image: "paneer-butter-masala.jpg"
    },
    {
        id: 6,
        name: "Chicken Curry",
        price: 150,
        description: "Spicy chicken in onion-tomato gravy",
        category: "lunch",
        image: "chicken-curry.jpg"
    },
    
    // Drinks (6 items)
    {
        id: 7,
        name: "Lassi",
        price: 40,
        description: "Refreshing yogurt drink",
        category: "drinks",
        image: "lassi.jpg"
    },
    {
        id: 8,
        name: "Nimbu Pani",
        price: 25,
        description: "Fresh lemon water with salt and sugar",
        category: "drinks",
        image: "nimbu-pani.jpg"
    },
    {
        id: 9,
        name: "Sprite",
        price: 30,
        description: "Refreshing lemon-lime soda",
        category: "drinks",
        image: "sprite.jpg"
    },
    {
        id: 10,
        name: "Mango Juice",
        price: 45,
        description: "Fresh mango juice",
        category: "drinks",
        image: "mango-juice.jpg"
    },
    {
        id: 11,
        name: "Mineral Water",
        price: 15,
        description: "Pure mineral water bottle",
        category: "drinks",
        image: "mineral-water.jpg"
    },
    {
        id: 12,
        name: "Coca Cola",
        price: 30,
        description: "Classic cola drink",
        category: "drinks",
        image: "coca-cola.jpg"
    },
    
    // Snacks (6 items)
    {
        id: 13,
        name: "Samosa",
        price: 20,
        description: "Crispy fried pastry with spiced filling",
        category: "snacks",
        image: "samosa.jpg"
    },
    {
        id: 14,
        name: "Pakora",
        price: 35,
        description: "Deep-fried vegetable fritters",
        category: "snacks",
        image: "pakora.jpg"
    },
    {
        id: 15,
        name: "Vada Pav",
        price: 25,
        description: "Spicy potato fritter in bread",
        category: "snacks",
        image: "vada-pav.jpg"
    },
    {
        id: 16,
        name: "Bhel Puri",
        price: 30,
        description: "Tangy puffed rice snack",
        category: "snacks",
        image: "bhel-puri.jpg"
    },
    {
        id: 17,
        name: "French Fries",
        price: 40,
        description: "Golden crispy potato fries",
        category: "snacks",
        image: "french-fries.jpg"
    },
    {
        id: 18,
        name: "Pav Bhaji",
        price: 80,
        description: "Spiced vegetable curry with bread",
        category: "snacks",
        image: "pav-bhaji.jpg"
    },
    
    // Chinese (6 items)
    {
        id: 19,
        name: "Chicken Fried Rice",
        price: 120,
        description: "Stir-fried rice with chicken and vegetables",
        category: "chinese",
        image: "chicken-fried-rice.jpg"
    },
    {
        id: 20,
        name: "Veg Noodles",
        price: 90,
        description: "Stir-fried noodles with mixed vegetables",
        category: "chinese",
        image: "veg-noodles.jpg"
    },
    {
        id: 21,
        name: "Chicken Manchurian",
        price: 150,
        description: "Spicy chicken balls in tangy sauce",
        category: "chinese",
        image: "chicken-manchurian.jpg"
    },
    {
        id: 22,
        name: "Spring Roll",
        price: 40,
        description: "Crispy vegetable spring rolls",
        category: "chinese",
        image: "spring-roll.jpg"
    },
    {
        id: 23,
        name: "Chicken Momos",
        price: 80,
        description: "Steamed chicken dumplings",
        category: "chinese",
        image: "chicken-momos.jpg"
    },
    {
        id: 24,
        name: "Veg Manchurian",
        price: 120,
        description: "Spicy vegetable balls in tangy sauce",
        category: "chinese",
        image: "veg-manchurian.jpg"
    },
    
    // Beverages (6 items)
    {
        id: 25,
        name: "Tea",
        price: 15,
        description: "Traditional Indian spiced tea",
        category: "beverages",
        image: "chai.jpg"
    },
    {
        id: 26,
        name: "Coffee",
        price: 25,
        description: "Freshly brewed coffee",
        category: "beverages",
        image: "coffee.jpg"
    },
    {
        id: 27,
        name: "Green Tea",
        price: 20,
        description: "Healthy green tea",
        category: "beverages",
        image: "green-tea.jpg"
    },
    {
        id: 28,
        name: "Hot Chocolate",
        price: 35,
        description: "Rich hot chocolate drink",
        category: "beverages",
        image: "hot-chocolate.jpg"
    },
    {
        id: 29,
        name: "Masala Chai",
        price: 20,
        description: "Spiced tea with ginger and cardamom",
        category: "beverages",
        image: "masala-chai.jpg"
    },
    {
        id: 30,
        name: "Iced Tea",
        price: 35,
        description: "Refreshing iced tea with lemon",
        category: "beverages",
        image: "iced-tea.jpg"
    },
    
];

// Cart state
let cart = [];
let cartItemQuantities = {};
let currentCategory = 'all';

// Analytics state
let orderHistory = [];
let totalRevenue = 0;
let totalOrders = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadAdditionalMenuItemsFromDb();
    renderMenu();
    updateCartDisplay();
    loadAnalyticsData();
    setupAdminAddItemForm();
});

// Load admin-added menu items from backend (database) and merge into menuItems
async function loadAdditionalMenuItemsFromDb() {
    try {
        const response = await fetch('/menu-items');
        if (!response.ok) return;
        const itemsFromDb = await response.json();
        if (Array.isArray(itemsFromDb) && itemsFromDb.length > 0) {
            const maxExistingId = menuItems.length > 0 ? Math.max(...menuItems.map(i => i.id)) : 0;
            // Shift DB IDs to avoid conflicts with hardcoded ones
            itemsFromDb.forEach((item, index) => {
                const newId = maxExistingId + index + 1;
                menuItems.push({
                    id: newId,
                    dbId: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description || 'Custom menu item',
                    category: item.category,
                    image: item.image || ''
                });
            });
        }
        renderAdminItemsList();
    } catch (err) {
        console.error('Failed to load menu items from backend:', err);
    }
}

// Admin: Add new menu item with optional photo (also saved in backend DB)
function setupAdminAddItemForm() {
    const form = document.getElementById('adminAddItemForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('adminItemName');
        const priceInput = document.getElementById('adminItemPrice');
        const categorySelect = document.getElementById('adminItemCategory');
        const descInput = document.getElementById('adminItemDescription');
        const imageInput = document.getElementById('adminItemImage');

        const name = nameInput.value.trim();
        const price = parseFloat(priceInput.value);
        const category = categorySelect.value;
        const description = descInput.value.trim() || 'Custom menu item';

        if (!name || !price || !category) {
            alert('Please fill in item name, price, and category.');
            return;
        }

        const nextId = menuItems.length > 0
            ? Math.max(...menuItems.map(i => i.id)) + 1
            : 1;

        const addItemToMenu = (imageSrc) => {
            // Save to backend DB first
            fetch('/menu-items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    price,
                    description,
                    category,
                    image: imageSrc || ''
                })
            })
            .then(res => res.json())
            .then(saved => {
                const newItem = {
                    id: nextId,
                    dbId: saved && saved.id ? saved.id : null,
                    name,
                    price,
                    description,
                    category,
                    image: imageSrc || ''
                };
                menuItems.push(newItem);
                renderMenu();
                renderAdminItemsList();
                form.reset();
                alert('New menu item added successfully!');
            })
            .catch(err => {
                console.error('Failed to save menu item to backend:', err);
                // Fallback: still add locally so admin sees it
                const newItem = {
                    id: nextId,
                    dbId: null,
                    name,
                    price,
                    description,
                    category,
                    image: imageSrc || ''
                };
                menuItems.push(newItem);
                renderMenu();
                renderAdminItemsList();
                form.reset();
                alert('Item added locally, but failed to save to server.');
            });
        };

        const file = imageInput.files && imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                addItemToMenu(event.target.result); // data URL
            };
            reader.readAsDataURL(file);
        } else {
            addItemToMenu('');
        }
    });
}

// Render list of items (info only in admin panel; delete handled on cards)
function renderAdminItemsList() {
    const container = document.getElementById('adminItemsContainer');
    if (!container) return;

    const adminItems = menuItems; // include all items

    if (adminItems.length === 0) {
        container.innerHTML = '<p class="no-admin-items">No items yet.</p>';
        return;
    }

    container.innerHTML = adminItems.map(item => `
        <div class="admin-item-row">
            <span>${item.name} (₹${item.price}) - ${item.category}</span>
        </div>
    `).join('');
}

// Delete admin-added item from DB and from in-memory menuItems
function deleteAdminItem(dbId, frontendId) {
    if (!confirm('Are you sure you want to delete this menu item?')) return;

    if (dbId) {
        fetch(`/menu-items/${dbId}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete from server');
            }
            removeAdminItemLocally(frontendId);
        })
        .catch(err => {
            console.error('Error deleting menu item from backend:', err);
            alert('Failed to delete item from server.');
        });
    } else {
        // Only local copy (not saved in DB)
        removeAdminItemLocally(frontendId);
    }
}

function removeAdminItemLocally(frontendId) {
    // Remove from menuItems array
    const index = menuItems.findIndex(i => i.id === frontendId);
    if (index !== -1) {
        menuItems.splice(index, 1);
    }
    // Also remove from cart and quantity tracking
    cart = cart.filter(item => item.id !== frontendId);
    delete cartItemQuantities[frontendId];
    updateCartDisplay();
    renderMenu();
    renderAdminItemsList();
}

// Render menu items
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    // Filter items based on current category
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-style: italic; grid-column: 1 / -1; padding: 40px;">No items found in this category</p>';
        return;
    }

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <button class="menu-item-delete-btn" title="Delete item" onclick="deleteAdminItem(${item.dbId !== undefined ? item.dbId : 'null'}, ${item.id}); event.stopPropagation();">
                ×
            </button>
            <div class="menu-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.classList.add('no-image')">` : ''}
            </div>
            <h3>${item.name}</h3>
            <div class="price">₹${item.price}</div>
            <div class="description">${item.description}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="decreaseQuantity(${item.id})" id="dec-${item.id}">-</button>
                <span class="quantity-display" id="qty-${item.id}">0</span>
                <button class="quantity-btn" onclick="increaseQuantity(${item.id})" id="inc-${item.id}">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart(${item.id})" id="add-${item.id}">Add to Cart</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filter menu by category
function filterMenu(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Re-render menu
    renderMenu();
}

// Update quantity in menu
function updateQuantityDisplay(itemId) {
    const quantity = cartItemQuantities[itemId] || 0;
    document.getElementById(`qty-${itemId}`).textContent = quantity;
    
    const decBtn = document.getElementById(`dec-${itemId}`);
    const addBtn = document.getElementById(`add-${itemId}`);
    
    decBtn.disabled = quantity === 0;
    addBtn.textContent = quantity > 0 ? 'Update Cart' : 'Add to Cart';
}

// Increase quantity
function increaseQuantity(itemId) {
    cartItemQuantities[itemId] = (cartItemQuantities[itemId] || 0) + 1;
    updateQuantityDisplay(itemId);
}

// Decrease quantity
function decreaseQuantity(itemId) {
    if (cartItemQuantities[itemId] > 0) {
        cartItemQuantities[itemId]--;
        updateQuantityDisplay(itemId);
    }
}

// Add to cart
function addToCart(itemId) {
    const quantity = cartItemQuantities[itemId] || 0;
    if (quantity === 0) {
        // If quantity is 0, set it to 1 and add to cart
        cartItemQuantities[itemId] = 1;
        updateQuantityDisplay(itemId);
    }

    const finalQuantity = cartItemQuantities[itemId] || 1;
    const menuItem = menuItems.find(item => item.id === itemId);
    const existingCartItem = cart.find(item => item.id === itemId);

    if (existingCartItem) {
        existingCartItem.quantity = finalQuantity;
    } else {
        cart.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: finalQuantity
        });
    }

    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const generateReceiptBtn = document.getElementById('generateReceiptBtn');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartSummary.style.display = 'none';
        generateReceiptBtn.disabled = true;
        return;
    }

    // Render cart items
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
            </div>
            <div class="cart-item-controls">
                <button class="cart-quantity-btn" onclick="decreaseCartQuantity(${item.id})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                <span>${item.quantity}</span>
                <button class="cart-quantity-btn" onclick="increaseCartQuantity(${item.id})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Calculate and display summary
    calculateAndDisplaySummary();
    cartSummary.style.display = 'block';
    generateReceiptBtn.disabled = false;
}

// Calculate and display cart summary
function calculateAndDisplaySummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountThreshold = 499;
    const discountRate = 0.10;
    const gstRate = 0.05;

    let discount = 0;
    if (subtotal > discountThreshold) {
        discount = subtotal * discountRate;
    }

    const gst = (subtotal - discount) * gstRate;
    const total = subtotal - discount + gst;

    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount').textContent = `-₹${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }

    document.getElementById('gst').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

// Increase cart quantity
function increaseCartQuantity(itemId) {
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity++;
        cartItemQuantities[itemId] = cartItem.quantity;
        updateCartDisplay();
        updateQuantityDisplay(itemId);
    }
}

// Decrease cart quantity
function decreaseCartQuantity(itemId) {
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItemQuantities[itemId] = cartItem.quantity;
        updateCartDisplay();
        updateQuantityDisplay(itemId);
    }
}

// Remove from cart
function removeFromCart(itemId) {
    const item = cart.find(item => item.id === itemId);
    cart = cart.filter(item => item.id !== itemId);
    cartItemQuantities[itemId] = 0;
    
    updateCartDisplay();
    updateQuantityDisplay(itemId);
}

// Reset cart
function resetCart() {
    if (confirm('Are you sure you want to clear all items from your cart?')) {
        cart = [];
        cartItemQuantities = {};
        
        updateCartDisplay();
        
        // Reset all quantity displays
        menuItems.forEach(item => {
            updateQuantityDisplay(item.id);
        });
    }
}




// Show order bill when order icon is clicked
function showOrderBill() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items to generate a bill.');
        return;
    }
    generateReceipt();
}


// Generate receipt
function generateReceipt() {
    const modal = document.getElementById('receiptModal');
    const receiptContent = document.getElementById('receiptContent');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountThreshold = 499;
    const discountRate = 0.10;
    const gstRate = 0.05;

    let discount = 0;
    if (subtotal > discountThreshold) {
        discount = subtotal * discountRate;
    }

    const gst = (subtotal - discount) * gstRate;
    const total = subtotal - discount + gst;

    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en-IN');
    const timeString = currentDate.toLocaleTimeString('en-IN');

    receiptContent.innerHTML = `
        <div class="receipt-header">
            <div class="receipt-title">🍽️ RKDF Cafeteria Bill</div>
            <div class="receipt-date">Date: ${dateString} | Time: ${timeString}</div>
        </div>
        
        <div class="receipt-items">
            ${cart.map(item => `
                <div class="receipt-item">
                    <div>
                        <div class="receipt-item-name">${item.name}</div>
                        <div class="receipt-item-details">₹${item.price} × ${item.quantity}</div>
                    </div>
                    <div class="receipt-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="receipt-summary">
            <div class="receipt-summary-row">
                <span>Subtotal:</span>
                <span>₹${subtotal.toFixed(2)}</span>
            </div>
            ${discount > 0 ? `
                <div class="receipt-summary-row">
                    <span>Discount (10%):</span>
                    <span>-₹${discount.toFixed(2)}</span>
                </div>
            ` : ''}
            <div class="receipt-summary-row">
                <span>GST (5%):</span>
                <span>₹${gst.toFixed(2)}</span>
            </div>
            <div class="receipt-summary-row receipt-total">
                <span>Total:</span>
                <span>₹${total.toFixed(2)}</span>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #7f8c8d;">
            <p>Thank you for your order!</p>
            <p>Visit us again soon!</p>
        </div>
    `;

    // Save order to history
    saveOrderToHistory();
    
    modal.style.display = 'block';
}

// Close receipt modal
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
}

// Download PDF receipt
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set up the PDF
    doc.setFontSize(20);
    doc.text('🍽️ RKDF Cafeteria Bill', 20, 30);
    
    doc.setFontSize(12);
    const currentDate = new Date();
    doc.text(`Date: ${currentDate.toLocaleDateString('en-IN')}`, 20, 50);
    doc.text(`Time: ${currentDate.toLocaleTimeString('en-IN')}`, 20, 60);
    
    // Add items
    let yPosition = 80;
    doc.setFontSize(14);
    doc.text('Items Ordered:', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    cart.forEach(item => {
        const itemText = `${item.name} - ₹${item.price} × ${item.quantity}`;
        const itemTotal = `₹${(item.price * item.quantity).toFixed(2)}`;
        
        doc.text(itemText, 20, yPosition);
        doc.text(itemTotal, 150, yPosition);
        yPosition += 8;
    });
    
    // Add summary
    yPosition += 10;
    doc.setFontSize(12);
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountThreshold = 499;
    const discountRate = 0.10;
    const gstRate = 0.05;

    let discount = 0;
    if (subtotal > discountThreshold) {
        discount = subtotal * discountRate;
    }

    const gst = (subtotal - discount) * gstRate;
    const total = subtotal - discount + gst;
    
    doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    
    if (discount > 0) {
        doc.text(`Discount (10%): -₹${discount.toFixed(2)}`, 20, yPosition);
        yPosition += 8;
    }
    
    doc.text(`GST (5%): ₹${gst.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(14);
    doc.text(`Total: ₹${total.toFixed(2)}`, 20, yPosition);
    
    // Add footer
    yPosition += 20;
    doc.setFontSize(10);
    doc.text('Thank you for your order!', 20, yPosition);
    doc.text('Visit us again soon!', 20, yPosition + 8);
    
    // Save the PDF
    doc.save(`receipt_${currentDate.getTime()}.pdf`);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('receiptModal');
    const analyticsModal = document.getElementById('analyticsModal');
    if (event.target === modal) {
        closeReceipt();
    }
    if (event.target === analyticsModal) {
        closeAnalytics();
    }
}

// Analytics Functions
function loadAnalyticsData() {
    const savedOrderHistory = localStorage.getItem('cafeteriaOrderHistory');
    const savedTotalRevenue = localStorage.getItem('cafeteriaTotalRevenue');
    const savedTotalOrders = localStorage.getItem('cafeteriaTotalOrders');
    
    if (savedOrderHistory) {
        orderHistory = JSON.parse(savedOrderHistory);
    }
    if (savedTotalRevenue) {
        totalRevenue = parseFloat(savedTotalRevenue);
    }
    if (savedTotalOrders) {
        totalOrders = parseInt(savedTotalOrders);
    }
}

function saveAnalyticsData() {
    localStorage.setItem('cafeteriaOrderHistory', JSON.stringify(orderHistory));
    localStorage.setItem('cafeteriaTotalRevenue', totalRevenue.toString());
    localStorage.setItem('cafeteriaTotalOrders', totalOrders.toString());
}

function saveOrderToHistory() {
    if (cart.length === 0) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountThreshold = 499;
    const discountRate = 0.10;
    const gstRate = 0.05;

    let discount = 0;
    if (subtotal > discountThreshold) {
        discount = subtotal * discountRate;
    }

    const gst = (subtotal - discount) * gstRate;
    const total = subtotal - discount + gst;
    
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        subtotal: subtotal,
        discount: discount,
        gst: gst,
        total: total
    };
    
    orderHistory.unshift(order);
    totalRevenue += total;
    totalOrders++;

    // Also send order to backend (simple JSON file storage)
    try {
        fetch('/save-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customerName: 'Walk-in Customer', // replace later with real input if needed
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                totalAmount: total
            })
        }).catch(err => {
            console.error('Failed to save order to backend:', err);
        });
    } catch (err) {
        console.error('Error calling backend:', err);
    }
    
    // Keep only last 50 orders to prevent localStorage from getting too large
    if (orderHistory.length > 50) {
        orderHistory = orderHistory.slice(0, 50);
    }
    
    saveAnalyticsData();
}

function showAnalyticsDashboard() {
    const modal = document.getElementById('analyticsModal');
    
    // Calculate today's revenue
    const today = new Date().toDateString();
    const todayRevenue = orderHistory
        .filter(order => new Date(order.date).toDateString() === today)
        .reduce((sum, order) => sum + order.total, 0);
    
    // Update statistics
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toFixed(2)}`;
    document.getElementById('totalOrders').textContent = totalOrders.toString();
    document.getElementById('averageOrder').textContent = totalOrders > 0 ? `₹${(totalRevenue / totalOrders).toFixed(2)}` : '₹0.00';
    document.getElementById('todayRevenue').textContent = `₹${todayRevenue.toFixed(2)}`;
    
    // Update recent orders
    const recentOrdersList = document.getElementById('recentOrdersList');
    if (orderHistory.length === 0) {
        recentOrdersList.innerHTML = '<p class="no-orders">No orders yet</p>';
    } else {
        recentOrdersList.innerHTML = orderHistory.slice(0, 10).map(order => {
            const orderDate = new Date(order.date);
            const itemsText = order.items.length === 1 
                ? order.items[0].name 
                : `${order.items[0].name} + ${order.items.length - 1} more`;
            
            return `
                <div class="order-item">
                    <div class="order-info">
                        <div class="order-date">${orderDate.toLocaleDateString('en-IN')} ${orderDate.toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit'})}</div>
                        <div class="order-items">${itemsText}</div>
                    </div>
                    <div class="order-total">₹${order.total.toFixed(2)}</div>
                </div>
            `;
        }).join('');
    }
    
    modal.style.display = 'block';
}

function closeAnalytics() {
    document.getElementById('analyticsModal').style.display = 'none';
}

function exportAnalytics() {
    const data = {
        totalRevenue: totalRevenue,
        totalOrders: totalOrders,
        averageOrder: totalOrders > 0 ? totalRevenue / totalOrders : 0,
        orderHistory: orderHistory,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cafeteria_analytics_${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function clearAnalytics() {
    if (confirm('Are you sure you want to clear all analytics data? This action cannot be undone.')) {
        orderHistory = [];
        totalRevenue = 0;
        totalOrders = 0;
        saveAnalyticsData();
        showAnalyticsDashboard();
    }
}
