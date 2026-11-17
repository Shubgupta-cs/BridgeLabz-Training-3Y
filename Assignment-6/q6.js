const API_URL = "https://fakestoreapi.com/products";

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: Status ${response.status}`);
        }

        const products = await response.json();

        const dashboardContainer = typeof document !== "undefined" 
            ? document.getElementById("product-dashboard") 
            : null;

        products.forEach((product) => {

            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("--------------------------------------------------");

            if (dashboardContainer) {
                const card = document.createElement("div");
                card.className = "product-card";

                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.title;

                const title = document.createElement("h4");
                title.textContent = product.title;

                const price = document.createElement("p");
                price.className = "price";
                price.textContent = `$${product.price}`;

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);
                dashboardContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.");
        
        if (typeof document !== "undefined") {
            const dashboardContainer = document.getElementById("product-dashboard");
            if (dashboardContainer) {
                dashboardContainer.textContent = "Failed to load products. Please try again.";
            }
        }
    }
}

fetchAndDisplayProducts();