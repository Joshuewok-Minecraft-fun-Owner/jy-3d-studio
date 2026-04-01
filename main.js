// Function to add items to the cart
window.addToCart = function(name, price) {
    let cart = JSON.parse(localStorage.getItem('jy_cart')) || [];
    
    const item = {
        name: name,
        price: price,
        size: "Standard (approx 100mm)", // Default
        color: "Pending Selection",      // Default
        id: Date.now()
    };

    cart.push(item);
    localStorage.setItem('jy_cart', JSON.stringify(cart));
    
    // Update the UI
    updateCartCount();
    alert(`${name} added to your slip!`);
};

// Update the number on the cart icon
window.updateCartCount = function() {
    const cart = JSON.parse(localStorage.getItem('jy_cart')) || [];
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.innerText = cart.length;
    }
};

// Redirect to checkout
window.goToCheckout = function() {
    window.location.href = 'checkout.html';
};

// Run on load
document.addEventListener('DOMContentLoaded', updateCartCount);