
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cart-items");
let grandTotal = 0;

function renderCart() {
    cartItems.innerHTML = "";
    grandTotal = 0;

    cart.forEach((item, index) => {
        let total = item.price * item.quantity;
        grandTotal += total;

        cartItems.innerHTML += `
            <tr>
                <td><img src="${item.image}" width="60"></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, 1)">+</button>
                </td>
                <td>$${total}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("grand-total").innerText =
        "Grand Total: $" + grandTotal;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

renderCart();
