// in products/checkout.js (REPLACE EVERYTHING)
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert("You must log in to access the checkout page.");
        window.location.href = 'login.html';
        return;
    }

    const summaryItemsListEl = document.getElementById('summaryItemsList');
    const summaryTotalEl = document.getElementById('summaryTotal');
    const checkoutForm = document.getElementById('checkoutForm');

    loadCart();

    function displaySummary() {
        summaryItemsListEl.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            summaryItemsListEl.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'summary-item';
                itemEl.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="summary-item-info">
                        <div class="product-name">${item.name} (x${item.quantity})</div>
                    </div>
                    <div class="summary-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>`;
                summaryItemsListEl.appendChild(itemEl);
                total += item.price * item.quantity;
            });
        }
        summaryTotalEl.textContent = `₹${total.toFixed(2)}`;
    }

    checkoutForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty. Cannot place order.");
            return;
        }

        const formData = new FormData(checkoutForm);
        const shippingAddress = {
            fullName: formData.get('fullName'),
            address: formData.get('address'),
            pincode: formData.get('pincode'),
            phone: formData.get('phone'),
        };

        const orderData = {
            orderItems: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
            shippingAddress: shippingAddress,
            totalPrice: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        };

        try {
            // THIS IS THE CORRECTED FULL URL
            const res = await fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderData)
            });
            if (!res.ok) throw new Error('Failed to place order.');

             // --- THE FIX IS HERE ---
        // 1. Get the full order details from the response
        const createdOrder = await res.json(); 
        
        // 2. Get the short, user-friendly part of the Order ID (just like in orders.js)
        const shortOrderId = createdOrder._id.substring(0, 8);

        // 3. Use the Order ID in the alert message
        alert(`Order Confirmed! Thank you, ${shippingAddress.fullName}.\n\nYour Order ID is #${shortOrderId}.\nYour items will be delivered soon. Please pay on delivery.`);
        // --- END OF FIX ---

            cart = [];
            saveCart();
            window.location.href = 'shop.html';
        } catch (error) {
            alert('Error placing order: ' + error.message);
        }
    });

    displaySummary();
});