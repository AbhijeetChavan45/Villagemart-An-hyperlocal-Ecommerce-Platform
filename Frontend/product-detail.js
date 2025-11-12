

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("productDetailContainer");

    try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) throw new Error('Failed to load products');
        
        products = await response.json();

        const params = new URLSearchParams(window.location.search);
        const productName = params.get('name');

        if (!productName) {
            container.innerHTML = "<h1>Product not found!</h1>";
            return;
        }

        const product = products.find(p => p.name === productName);

        if (!product) {
            container.innerHTML = "<h1>Product not found!</h1>";
            return;
        }

        document.title = product.name;

        const relatedProducts = products.filter(p => p.category === product.category && p.name !== product.name);

        const pageHTML = `
            <div class="product-detail-layout">
                <div class="product-image-section"><img src="${product.img}" alt="${product.name}"></div>
                <div class="product-info-section">
                    <div class="breadcrumbs">
                        <a href="/">Home</a> / 
                        <a href="category.html?name=${encodeURIComponent(product.category)}">${product.category}</a> /
                        <span>${product.name}</span>
                    </div>
                    <h1>${product.name}</h1>
                    <div class="product-price">₹${product.price} <span class="unit">${product.unit || ""}</span></div>
                   <p class="product-description">${product.description || `This is a  description of ${product.name}.`}</p>
                    <div class="card-buttons">
                        <button class="btn add-btn" onclick="addToCart('${product.name}')">Add</button>
                        <button class="btn remove-btn" onclick="removeFromCart('${product.name}')">Remove</button>
                    </div>
                </div>
            </div>
            <div class="related-products-section">
                <h2>Related Products</h2>
                <div class="product-scroll-container">
                    ${relatedProducts.map(p => `
                        <div class="product-card">
                            <a href="product-detail.html?name=${encodeURIComponent(p.name)}" class="product-link">
                                <img src="${p.img}" alt="${p.name}">
                                <div class="product-details"><div class="product-name">${p.name}</div></div>
                            </a>
                            <div class="product-price-action">
                                <div class="product-price">₹${p.price} <span class="unit">${p.unit || ""}</span></div>
                                <div class="card-buttons">
                                    <button class="btn add-btn" onclick="addToCart('${p.name}')">Add</button>
                                    <button class="btn remove-btn" onclick="removeFromCart('${p.name}')">Remove</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML = pageHTML;

    } catch (error) {
        console.error("Error loading page:", error);
        container.innerHTML = "<p>Could not load product details. Please ensure the backend server is running.</p>";
    }
});