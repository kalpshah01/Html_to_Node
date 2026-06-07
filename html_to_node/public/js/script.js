
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart!");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = `(${total})`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});




const products = [
    { id: 1, name: "Kashmiri Shawls", price: 100 },
    { id: 2, name: "Jaipur Blue Pottery", price: 150 },
    { id: 3, name: "Handcrafted Painting", price: 200 },
    { id: 4, name: "Handcrafted Woven Basket", price: 80 },
    { id: 5, name: "Handcrafted Leather Wallet", price: 120 },
    { id: 6, name: "Handcrafted Glass Sculpture", price: 250 }
];


if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}


function searchProducts(keyword) {
    let productCards = document.getElementsByClassName("product-item");
    if (productCards.length === 0) return; 

    keyword = keyword.toLowerCase();

  
    for (let card of productCards) {
        let productName = card.querySelector('.card-title').textContent.toLowerCase();

        if (productName.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

