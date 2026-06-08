// ==================== MOBILE NAVIGATION ==================== //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

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
    const formData = new FormData(customForm);
    const data = Object.fromEntries(formData);
    
    const emailBody = `Custom Design Request\n========================\n\nCustomer Information:\n- Name: ${data.name}\n- Email: ${data.email}\n- Phone: ${data.phone || 'Not provided'}\n\nProject Details:\n- Project Name: ${data['project-name']}\n- Description: ${data.description}\n- Complexity: ${data.complexity}\n\nBudget & Timeline:\n- Budget: ${data.budget}\n- Timeline: ${data.timeline}\n\nAdditional Notes:\n${data.additional || 'None'}\n\n---\nSubmitted via JY 3D Studio Website`;
    
    window.location.href = `mailto:joshuewok674@outlook.com?subject=Custom%203D%20Design%20Request%20from%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(emailBody)}`;
    
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
// IMPORTANT: Store Stripe links in GitHub Secrets, not in code!
// See SECRETS_SETUP.md for instructions
const products = [
    // Add your products here:
    // {
    //     id: 1,
    //     name: 'Product Name',
    //     description: 'Description',
    //     price: '$24.99',
    //     image: 'images/product-1.jpg',
    //     stripeLink: 'https://stripe.com/pay/cs_YOUR_LINK_HERE'
    // }
];

// Function to render products
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
console.log('%cOriginal Geometry. Digital Craft.', 'font-size: 14px; color: #b0b0b0;');
console.log('%cIMPORTANT: Store Stripe links in GitHub Secrets. See SECRETS_SETUP.md', 'color: #ff3333; font-weight: bold;');