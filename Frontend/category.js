document.addEventListener("DOMContentLoaded", async () => {
  const categoryTitleEl = document.getElementById("categoryTitle");
  const productGridEl = document.getElementById("productGrid");

  try {
    const response = await fetch('https://villagemart-an-hyperlocal-ecommerce.onrender.com/api/products');
    if (!response.ok) throw new Error("Failed to load products");

    products = await response.json();

    const params = new URLSearchParams(window.location.search);
    const categoryName = params.get("name");

    if (!categoryName) {
      categoryTitleEl.textContent = "Category Not Found";
      return;
    }

    categoryTitleEl.textContent = categoryName;
    document.title = `VillageMart - ${categoryName}`;

    const categoryProducts = products.filter(
      (product) => product.category === categoryName
    );

    if (categoryProducts.length === 0) {
      productGridEl.innerHTML = "<p>No products found in this category.</p>";
    } else {
      productGridEl.innerHTML = categoryProducts
        .map(
          (p) => `
                <div class="product-card">
                    <a href="product-detail.html?name=${encodeURIComponent(
                      p.name
                    )}" class="product-link">
                        <img src="${p.img}" alt="${p.name}">
                        <div class="product-details">
                            <div class="product-name">${p.name}</div>
                        </div>
                    </a>
                    <div class="product-price-action">
                        <div class="product-price">₹${
                          p.price
                        } <span class="unit">${p.unit || ""}</span></div>
                        <div class="card-buttons">
                            <button class="btn add-btn" onclick="addToCart('${
                              p.name
                            }')">Add</button>
                            <button class="btn remove-btn" onclick="removeFromCart('${
                              p.name
                            }')">Remove</button>
                        </div>
                    </div>
                </div>
            `
        )
        .join("");
    }
  } catch (error) {
    console.error("Error loading category page:", error);
    productGridEl.innerHTML =
      "<p>Could not load products. Please ensure the backend server is running.</p>";
  }
});
