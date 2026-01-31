const products = [
    { name: "💻 Laptop", price: 55000, rating: 5, category: "Electronics" },
    { name: "📱 Mobile Phone", price: 20000, rating: 4, category: "Electronics" },
    { name: "🎧 Headphones", price: 3000, rating: 4, category: "Electronics" },
    { name: "⌚ Smart Watch", price: 8000, rating: 3, category: "Electronics" },
    { name: "⌨ Keyboard", price: 1500, rating: 4, category: "Electronics" },

    { name: "👕 T-Shirt", price: 700, rating: 4, category: "Fashion" },
    { name: "👖 Jeans", price: 1800, rating: 5, category: "Fashion" },
    { name: "👟 Shoes", price: 2500, rating: 4, category: "Fashion" },
    { name: "🧥 Jacket", price: 3200, rating: 4, category: "Fashion" },
    { name: "🧢 Cap", price: 400, rating: 3, category: "Fashion" },

    { name: "📘 Novel", price: 500, rating: 5, category: "Books" },
    { name: "📐 Math Book", price: 600, rating: 4, category: "Books" },
    { name: "🔬 Science Book", price: 650, rating: 4, category: "Books" },
    { name: "📜 History Book", price: 550, rating: 4, category: "Books" },
    { name: "🦸 Comics", price: 300, rating: 5, category: "Books" },

    { name: "🪑 Chair", price: 2200, rating: 4, category: "Home" },
    { name: "🛋 Table", price: 4500, rating: 4, category: "Home" },
    { name: "💡 Lamp", price: 1200, rating: 3, category: "Home" },
    { name: "🪟 Curtains", price: 1600, rating: 4, category: "Home" },
    { name: "🧸 Cushion", price: 800, rating: 5, category: "Home" }
];

let filteredProducts = [...products];

const container = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortSelect");
const categoryFilter = document.getElementById("categoryFilter");

function getStars(rating) {
    return "⭐".repeat(rating);
}

function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price}</p>
                <p>${getStars(p.rating)}</p>
                <span class="category">${p.category}</span>
            </div>
        `;
    });
}

sortSelect.addEventListener("change", () => {
    const v = sortSelect.value;

    if (v === "priceAsc") filteredProducts.sort((a,b)=>a.price-b.price);
    if (v === "priceDesc") filteredProducts.sort((a,b)=>b.price-a.price);
    if (v === "nameAsc") filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));
    if (v === "nameDesc") filteredProducts.sort((a,b)=>b.name.localeCompare(a.name));
    if (v === "ratingAsc") filteredProducts.sort((a,b)=>a.rating-b.rating);
    if (v === "ratingDesc") filteredProducts.sort((a,b)=>b.rating-a.rating);

    displayProducts(filteredProducts);
});

categoryFilter.addEventListener("change", () => {
    const cat = categoryFilter.value;
    filteredProducts = cat === "All"
        ? [...products]
        : products.filter(p => p.category === cat);

    displayProducts(filteredProducts);
});

displayProducts(products);
