document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    const addProductForm = document.getElementById('addProductForm');
    const vendorProductsList = document.getElementById('vendorProductsList');
    const categorySelect = document.getElementById('categorySelect');
    const editProductId = document.getElementById('editProductId');
    const submitBtn = addProductForm.querySelector('.cta-btn');
    const cancelBtn = document.getElementById('cancelEditBtn');
    
    let vendorProducts = [];

    async function fetchProfileInfo() {
        try {
            const res = await fetch('http://localhost:3001/api/users/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Could not fetch profile');
            const profile = await res.json();
            document.getElementById('vendorName').textContent = profile.name;
            document.getElementById('vendorEmail').textContent = profile.email;
        } catch (error) {
            console.error(error);
            document.getElementById('vendorName').textContent = 'Error';
        }
    }

    async function loadCategories() {
       
    }

    async function fetchVendorProducts() {
       
    }

  
    fetchProfileInfo();
    // ... (load other data)
});


document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('userToken');
    if (!token) { window.location.href = 'login.html'; return; }

    const addProductForm = document.getElementById('addProductForm');
    const vendorProductsList = document.getElementById('vendorProductsList');
    const categorySelect = document.getElementById('categorySelect');
    const editProductId = document.getElementById('editProductId');
    const submitBtn = addProductForm.querySelector('.cta-btn');
    const cancelBtn = document.getElementById('cancelEditBtn');
    let vendorProducts = [];

    function resetForm() {
        addProductForm.reset();
        editProductId.value = '';
        submitBtn.textContent = 'Add Product';
        cancelBtn.classList.add('hidden');
    }

    async function fetchProfileInfo() {
        try {
            const res = await fetch('http://localhost:3001/api/users/profile', { headers: { 'Authorization': `Bearer ${token}` } });
            if (!res.ok) throw new Error('Could not fetch profile');
            const profile = await res.json();
            document.getElementById('vendorName').textContent = profile.name;
            document.getElementById('vendorEmail').textContent = profile.email;
        } catch (error) { console.error('Could not load profile:', error); document.getElementById('vendorName').textContent = 'Error'; }
    }

    async function loadCategories() {
        try {
            const res = await fetch('http://localhost:3001/api/products/categories');
            const categories = await res.json();
            categorySelect.innerHTML = '<option value="">Select a Category</option>';
            categories.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat;
                option.textContent = cat;
                categorySelect.appendChild(option);
            });
        } catch (error) { console.error('Failed to load categories', error); }
    }

    async function fetchVendorProducts() {
        try {
            const res = await fetch('http://localhost:3001/api/vendor/products', { headers: { 'Authorization': `Bearer ${token}` } });
            vendorProducts = await res.json();
            vendorProductsList.innerHTML = '';
            if (vendorProducts.length === 0) { vendorProductsList.innerHTML = '<p>You have not added any products yet.</p>'; } else {
                vendorProducts.forEach(p => {
                    const productEl = document.createElement('div');
                    productEl.className = 'vendor-product-item';
                    productEl.innerHTML = `<div class="vendor-product-info"><img src="${p.img}" alt="${p.name}"><div><strong>${p.name}</strong><br>₹${p.price}</div></div><div class="vendor-product-actions"><button class="edit-btn" data-id="${p._id}">Edit</button><button class="delete-btn" data-id="${p._id}">Delete</button></div>`;
                    vendorProductsList.appendChild(productEl);
                });
            }
        } catch (error) { console.error(error); vendorProductsList.innerHTML = '<p>Error loading products.</p>'; }
    }

    addProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(addProductForm);
        const productData = Object.fromEntries(formData.entries());
        const productId = editProductId.value;
        const method = productId ? 'PUT' : 'POST';
        const url = productId ? `http://localhost:3001/api/vendor/products/${productId}` : 'http://localhost:3001/api/vendor/products';
        try {
            await fetch(url, { method: method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(productData) });
            resetForm();
            await fetchVendorProducts();
        } catch (error) { alert('Operation failed.'); }
    });

    vendorProductsList.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        if (!productId) return;
        if (e.target.classList.contains('edit-btn')) {
            const productToEdit = vendorProducts.find(p => p._id === productId);
            if (productToEdit) {
                addProductForm.name.value = productToEdit.name;
                addProductForm.price.value = productToEdit.price;
                addProductForm.unit.value = productToEdit.unit || '';
                addProductForm.img.value = productToEdit.img;
                addProductForm.category.value = productToEdit.category;
                addProductForm.description.value = productToEdit.description || '';
                editProductId.value = productToEdit._id;
                submitBtn.textContent = 'Update Product';
                cancelBtn.classList.remove('hidden');
                addProductForm.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this product?')) {
                fetch(`http://localhost:3001/api/vendor/products/${productId}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
                .then(res => { if (res.ok) fetchVendorProducts(); else alert('Failed to delete product.'); });
            }
        }
    });

    cancelBtn.addEventListener('click', resetForm);

    fetchProfileInfo();
    loadCategories();
    fetchVendorProducts();
});