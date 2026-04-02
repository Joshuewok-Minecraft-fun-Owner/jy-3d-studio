// main.js - The Shop Engine
window.addToCart = function(name, price, image_url) {
    // 1. Get existing cart or start new one
    let cart = JSON.parse(localStorage.getItem('jy_cart')) || [];
    
    // 2. Create the item
    const item = {
        name: name,
        price: price,
        image_url: image_url,
        id: Date.now()
    };

    // 3. Save to browser memory
    cart.push(item);
    localStorage.setItem('jy_cart', JSON.stringify(cart));
    
    // 4. Update UI and Redirect
    alert(name + " added to your slip!");
    window.location.href = 'checkout.html';
};

// Update cart count on the header if it exists
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('jy_cart')) || [];
    const countEl = document.getElementById('cart-count');
    if(countEl) countEl.innerText = cart.length;
});