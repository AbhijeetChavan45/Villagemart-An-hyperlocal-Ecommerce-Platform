
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('userToken');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    // --- NEW: Function to fetch and display profile info ---
    const fetchProfileInfo = async () => {
        const userNameEl = document.getElementById('userName');
        const userEmailEl = document.getElementById('userEmail');
        
        try {
            const res = await fetch('https://villagemart-an-hyperlocal-ecommerce.onrender.com/api/auth/login', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Could not fetch profile');
            const profile = await res.json();
            
            userNameEl.textContent = `Hello, ${profile.name}`;
            userEmailEl.textContent = profile.email;

        } catch (error) {
            console.error(error);
            userNameEl.textContent = 'Could not load profile';
        }
    };

    // --- Function to fetch and display order history ---
    const fetchOrderHistory = async () => {
        const ordersContainer = document.getElementById('ordersContainer');
        try {
            const res = await fetch('http://localhost:3001/api/orders/myorders', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to fetch orders');
            const orders = await res.json();
            
            if (orders.length === 0) {
                ordersContainer.innerHTML = '<h2>You have not placed any orders yet.</h2>';
                return;
            }

            ordersContainer.innerHTML = ''; 
            orders.forEach(order => {
                const orderCard = document.createElement('div');
                orderCard.className = 'order-card';
                const orderDate = new Date(order.createdAt).toLocaleDateString();
                orderCard.innerHTML = `
                    <div class="order-header">
                        <div>Order ID: <span>#${order._id.substring(0, 8)}</span></div>
                        <div>Date: <span>${orderDate}</span></div>
                        <div>Total: <span>₹${order.totalPrice.toFixed(2)}</span></div>
                    </div>
                    <div class="order-item-list">
                        <h4>Items in this order:</h4>
                        ${order.orderItems.map(item => `<div class="order-item"><div>${item.name} (x${item.quantity})</div></div>`).join('')}
                    </div>
                `;
                ordersContainer.appendChild(orderCard);
            });
        } catch (error) {
            console.error(error);
            ordersContainer.innerHTML = '<h2>Could not load your orders.</h2>';
        }
    };

    // --- Run both functions when the page loads ---
    fetchProfileInfo();
    fetchOrderHistory();
});