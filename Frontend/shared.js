

let products = [];
let cart = [];

function saveCart() { localStorage.setItem('villageMartCart', JSON.stringify(cart)); }
function loadCart() {
    const savedCart = localStorage.getItem('villageMartCart');
    if (savedCart) { cart = JSON.parse(savedCart); }
}

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) return;
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) { cartItem.quantity++; } else { cart.push({ ...product, quantity: 1 }); }
    updateCartUI();
    if (document.getElementById('cartModal')?.style.display === 'flex') { viewCart(); }
}

function removeFromCart(productName) {
    const cartItem = cart.find(item => item.name === productName);
    if (!cartItem) return;
    cartItem.quantity--;
    if (cartItem.quantity <= 0) { cart = cart.filter(item => item.name !== productName); }
    updateCartUI();
    if (document.getElementById('cartModal')?.style.display === 'flex') { viewCart(); }
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartTotalEl = document.getElementById('cartTotal');
    if (cartCountEl && cartTotalEl) {
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartTotalEl.textContent = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    }
    saveCart();
}

function parseJwt(token) {
    try { return JSON.parse(atob(token.split('.')[1])); } catch (e) { return null; }
}

function logout() {
    localStorage.removeItem('userToken');
    window.location.href = 'shop.html';
}

function updateHeaderUI() {
    const headerRight = document.getElementById('headerRight');
    if (!headerRight) return;

    const token = localStorage.getItem('userToken');
    
    let cartLink = `<a href="#" class="action-link" onclick="viewCart()"><span class="material-symbols-outlined">shopping_cart</span><span>Cart (<span id="cartCount">0</span>) - ₹<span id="cartTotal">0.00</span></span></a>`;
    let checkoutLink = `<a href="checkout.html" class="action-link"><span class="material-symbols-outlined">payment</span><span>Checkout</span></a>`;

    if (token) {
        const user = parseJwt(token).user;
        const profileLink = `<a href="orders.html" class="action-link"><span class="material-symbols-outlined">person</span><span>${user.name}</span></a>`;
        const logoutLink = `<a href="#" class="action-link" onclick="logout()"><span class="material-symbols-outlined">logout</span><span>Logout</span></a>`;
        headerRight.innerHTML = cartLink + checkoutLink + profileLink + logoutLink;
    } else {
        const loginLink = `<a href="login.html" class="action-link"><span class="material-symbols-outlined">login</span><span>Login</span></a>`;
        headerRight.innerHTML = cartLink + checkoutLink + loginLink;
    }
    updateCartUI();
}

// THIS IS THE COMPLETE CART POP-UP FUNCTION
function viewCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeCartModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>Your Cart</h2>
                <button class="close-btn" onclick="closeCartModal()">×</button>
            </div>
            <div id="cartItemsList" class="cart-items-list"></div>
            <div class="modal-footer">
                <div class="cart-total">
                    <strong>Total (<span id="modalCartQuantity">0</span> items):</strong>
                    <span id="modalCartTotal">₹0.00</span>
                </div>
                <a href="checkout.html" class="checkout-btn">Proceed to Checkout</a>
            </div>
        </div>
    `;
    const cartItemsListEl = document.getElementById('cartItemsList');
    const modalCartTotalEl = document.getElementById('modalCartTotal');
    const modalCartQuantityEl = document.getElementById('modalCartQuantity');
    if (cart.length === 0) {
        cartItemsListEl.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `<img src="${item.img}" alt="${item.name}"><div class="cart-item-details"><div class="product-name">${item.name}</div><div class="product-price">₹${item.price.toFixed(2)}</div></div><div class="cart-item-quantity"><button onclick="removeFromCart('${item.name}')">−</button><span>${item.quantity}</span><button onclick="addToCart('${item.name}')">+</button></div>`;
            cartItemsListEl.appendChild(itemEl);
        });
    }
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    modalCartQuantityEl.textContent = totalItems;
    modalCartTotalEl.textContent = `₹${totalPrice.toFixed(2)}`;
    modal.style.display = 'flex';
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) modal.style.display = 'none';
}

loadCart();
document.addEventListener('DOMContentLoaded', updateHeaderUI);