
const products = [
    {
        id: 1,
        name: "Everyday Runner",
        category: "Sport Shoe",
        price: 10000,
        review: 4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    }
];

const productCards = document.querySelector(".product-cards");
const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
});

productCards.innerHTML = products.map((product) => `
    <article class="card">
        <img
            class="card-image"
            src="${product.image}"
            alt="${product.name}"
        >
        <div class="card-content">
            <p class="card-category">${product.category}</p>
            <h2 class="card-title">${product.name}</h2>
            <div class="card-details">
                <span class="card-price">${currency.format(product.price)}</span>
                <span class="card-rating" aria-label="${product.review} out of 5 stars">
                    &#9733; ${product.review}/5
                </span>
            </div>
            <button class="card-button" type="button">Add to cart</button>
        </div>
    </article>
`).join("");
