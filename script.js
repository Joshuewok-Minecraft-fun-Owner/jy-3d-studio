// ==================== MOBILE NAVIGATION ==================== //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== CUSTOM FORM HANDLING ==================== //
const customForm = document.getElementById('customForm');
if (customForm) {
    customForm.addEventListener('submit', handleCustomForm);
}

function handleCustomForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(customForm);
    const data = Object.fromEntries(formData);
    
    // Create email body
    const emailBody = `
Custom Design Request
========================

Customer Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}

Project Details:
- Project Name: ${data['project-name']}
- Description: ${data.description}
- Complexity: ${data.complexity}

Budget & Timeline:
- Budget: ${data.budget}
- Timeline: ${data.timeline}

Additional Notes:
${data.additional || 'None'}

---
Submitted via JY 3D Studio Website
`;
    
    // Open email client
    window.location.href = `mailto:joshueowk674@outlook.com?subject=Custom%203D%20Design%20Request%20from%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    customForm.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}

// ==================== ACTIVE NAVIGATION LINK ==================== //
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('load', setActiveNavLink);

// ==================== SMOOTH SCROLLING ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navMenu?.classList.remove('active');
        }
    });
});

// ==================== PRODUCT DATA & STRIPE INTEGRATION ==================== //
// This is where you'll add your Stripe payment links
// Example structure:
const products = [
    {
        id: 1,
        name: 'Minecraft Block Series - 20mm',
        description: 'Interlocking modular blocks',
        price: '$24.99',
        image: 'images/product-1.jpg',
        stripeLink: 'https://stripe.com/pay/cs_YOUR_LINK_HERE' // Add your Stripe link
    },
    {
        id: 2,
        name: 'Custom Collectible Set',
        description: 'Premium 3D printed collectible',
        price: '$49.99',
        image: 'images/product-2.jpg',
        stripeLink: 'https://stripe.com/pay/cs_YOUR_LINK_HERE' // Add your Stripe link
    }
    // Add more products as needed
];

// Function to render products (when you're ready to add products)
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid || products.length === 0) return;
    
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">${product.price}</p>
            <a href="${product.stripeLink}" class="btn-primary" target="_blank">Buy Now</a>
        </div>
    `).join('');
}

// Render products on page load
window.addEventListener('load', renderProducts);

// ==================== FORM VALIDATION ==================== //
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==================== CONSOLE WELCOME MESSAGE ==================== //
console.log('%cJY 3D Studio', 'font-size: 24px; font-weight: bold; color: #00a8ff;');
console.log('%cOriginal Geometry. Digital Craft.', 'font-size: 14px; color: #b0b0b0; margin-bottom: 10px;');
console.log('%cTo add products, update the products array in script.js with your Stripe payment links.', 'color: #00ff88; font-weight: bold;');