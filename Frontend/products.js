

const productContainer = document.getElementById("productContainer");
const categoryNav = document.querySelector(".category-nav");

function renderProducts(filterText = "") {
    productContainer.innerHTML = "";
    const categories = {};
    
    // First, filter the main products array based on the search text
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    // If no products match the search, show a message
    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p style="text-align: center;">No products found matching your search.</p>';
        return;
    }

    // Now, group the filtered products by category
    filteredProducts.forEach(p => {
        if (!categories[p.category]) {
            categories[p.category] = [];
        }
        categories[p.category].push(p);
    });

    for (let category in categories) {
        const section = document.createElement("section");
        section.className = "product-category-section";
        section.innerHTML = `
            <div class="category-header">
                <h2>${category}</h2>
                <a href="category.html?name=${encodeURIComponent(category)}" class="see-all-btn">See All</a>
            </div>
            <div class="product-scroll-container">
                ${categories[category].map(p => `
                    <div class="product-card">
                        <a href="product-detail.html?name=${encodeURIComponent(p.name)}" class="product-link">
                            <img src="${p.img}" alt="${p.name}">
                            <div class="product-details">
                                <div class="product-name">${p.name}</div>
                            </div>
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
        `;
        productContainer.appendChild(section);
    }
    // We only update the category nav on initial load, not during search
    if (filterText === "") {
        const allCategoryNames = [...new Set(products.map(p => p.category))];
        renderCategoryNav(allCategoryNames);
    }
}

function renderCategoryNav(categoryNames) {
    if(categoryNav) {
        categoryNav.innerHTML = `<ul>${categoryNames.map(cat => `<li><a href="category.html?name=${encodeURIComponent(cat)}">${cat}</a></li>`).join('')}</ul>`;
    }
}

// This is the part that connects the search bar to the function
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        renderProducts(e.target.value);
    });
}


// When the page loads, fetch all products and then render them
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('https://villagemart-an-hyperlocal-ecommerce.onrender.com/api/auth/login');
        products = await response.json(); // Fill the global products array
        renderProducts(); // Render all products initially
    } catch (error) {
        console.error('Failed to fetch products:', error);
        if(productContainer) {
            productContainer.innerHTML = '<p>Error loading products.</p>';
        }
    }
});