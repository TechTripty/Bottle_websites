
let cart = [];

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    alert(name + " added to cart!");
}

function updateCart() {
    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    document.getElementById("cart-count").innerText = totalItems;
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "YOUR SHOPPING CART\n\n";
    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;

        message += item.name +
            " x " + item.quantity +
            " = ₹" + itemTotal + "\n";

        total += itemTotal;
    });

    message += "\nTotal Amount: ₹" + total;

    alert(message);
}
