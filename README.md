# JY 3D Studio Website

## 🎯 Project Overview

**JY 3D Studio** - A modern, sleek e-commerce website for custom-engineered 3D designs and modular collectibles.

### Core Features
- ✨ Professional responsive design (mobile-first)
- 🛒 Stripe Payment Links integration (no backend required)
- 📝 Custom design request form
- 📦 Product catalog
- ✅ Order confirmation page
- 🎨 Modern gradient UI with animations

## 📂 File Structure

```
jy-3d-studio/
├── index.html          # Main landing & product catalog
├── custom.html         # Custom design request form
├── checkout.html       # Billing information & terms
├── status.html         # Order confirmation landing page
├── styles.css          # Global styles (mobile-first)
├── script.js           # JavaScript functionality
├── images/             # Assets directory
│   └── logo.png       # Your JY 3D Studio logo
└── README.md          # This file
```

## 🚀 Getting Started

### 1. **Add Your Logo**
   - Place your logo in the `images/logo.png` path
   - Recommended size: 200x200px (will scale automatically)

### 2. **Configure Products**
   - Open `script.js`
   - Update the `products` array with your items
   - Add your Stripe Payment Link URLs

### 3. **Update Contact Information**
   - Email is already set to: `joshueowk674@outlook.com`
   - Location: Yorba Linda, CA
   - Customize as needed

## 💳 Stripe Integration Setup

### How to Get Your Stripe Payment Links:

1. **Log into Stripe Dashboard** → https://dashboard.stripe.com
2. Go to **Products** → **Create a new product**
3. Fill in product details (name, price, description)
4. Click **Create product**
5. Under the product, click **Add price** (if not auto-created)
6. Create a **Payment Link**:
   - Click the **Product name**
   - Scroll to "Payment links"
   - Click **Create payment link**
   - Configure settings
   - Copy the link (looks like: `https://stripe.com/pay/cs_...`)

### Adding Links to Your Site:

Update the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Minecraft Block Series - 20mm',
        description: 'Interlocking modular blocks',
        price: '$24.99',
        image: 'images/product-1.jpg',
        stripeLink: 'https://stripe.com/pay/cs_YOUR_ACTUAL_LINK_HERE'
    }
];
```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css` (`:root` section):

```css
:root {
    --primary-color: #00a8ff;      /* Cyan/Blue */
    --accent-color: #00ff88;       /* Neon Green */
    --secondary-color: #1a1a2e;    /* Dark Blue */
    --background: #0f0f1e;         /* Dark Background */
}
```

### Typography
- Font family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headings are bold with gradient colors
- Responsive font sizing using `clamp()`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full 4-column grids)
- **Tablet**: 768px - 1199px (2-column layouts)
- **Mobile**: Below 768px (responsive hamburger menu, single column)
- **Small Mobile**: Below 480px (extra-large touch targets)

## 🔧 Development Notes

### Mobile Navigation
- Hamburger menu appears on screens < 768px
- Click to toggle mobile nav menu
- Closes automatically when a link is clicked

### Form Handling
- Custom design form uses mailto: links (no backend required)
- Automatically opens user's email client with pre-filled data
- All data is sent to: `joshueowk674@outlook.com`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Smooth scroll behavior supported

## 📞 Support & Contact

- **Email**: joshueowk674@outlook.com
- **Location**: Yorba Linda, CA
- **Tagline**: Original Geometry. Digital Craft.

## 🌐 Hosting Options

### GitHub Pages (Free, Recommended)
1. Push this repo to GitHub
2. Go to **Settings** → **Pages**
3. Select branch: `main`
4. Site will be live at: `https://username.github.io/jy-3d-studio`

### Firebase Hosting
- Already compatible with your existing setup
- Deploy with: `firebase deploy`

### Other Options
- Vercel (free)
- Netlify (free)
- Traditional web hosting

## 🎯 Next Steps

1. ✅ Add your logo to `images/logo.png`
2. ✅ Set up Stripe payment links
3. ✅ Add products to the `products` array in `script.js`
4. ✅ Deploy to GitHub Pages or Firebase
5. ✅ Test the checkout flow

## 📝 License

© 2026 JY 3D Studio. All rights reserved.

---

**Ready to launch?** Push these files to your repository and you're good to go! 🚀