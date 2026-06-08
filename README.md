# ElectroHub - E-Commerce Store 🛍️

A modern, responsive e-commerce React application built with Vite. Features a sleek black and white theme with product listings, customer testimonials, and multiple pages.

## 🎨 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Black & White Theme** - Clean, professional monochrome styling with CSS variables
- **Multiple Pages** - Home, Products, About, and Contact pages with React Router
- **Product Grid** - Featured products showcase with Unsplash images
- **Testimonials** - Customer reviews section
- **Navbar** - Fixed navigation with smooth anchor links
- **Footer** - Complete footer with branding and links

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx          # Navigation bar with links
│   ├── Hero.jsx            # Hero section with headline
│   ├── ProductGrid.jsx     # Product cards display
│   ├── Testimonials.jsx    # Customer testimonials
│   ├── Footer.jsx          # Footer component
│   └── Categories.jsx      # Category cards (optional)
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Products.jsx        # Products page
│   ├── About.jsx           # About page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles and theme
└── main.jsx                # Entry point
```

## 📦 Tech Stack

- **React 19.2.6** - UI library
- **Vite 8.0.16** - Build tool & dev server
- **React Router v6** - Client-side routing
- **CSS3** - Custom styling with CSS variables

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/utkarshawagh123/E-Commerce-Website.git
cd E-Commerce-Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port)

### Build for Production
```bash
npm run build
```

The production build will be created in the `dist/` folder.

## 🎯 Routes

- `/` - Home page with hero section and featured products
- `/products` - Products page showing all featured products
- `/about` - About page with company information
- `/contact` - Contact page with company details

## 🎨 Theme

The application uses a sophisticated black and white theme with CSS variables for easy customization:

- **Background**: Pure black (#000000)
- **Text**: Off-white (#f8fafc)
- **Accents**: White (#ffffff)
- **Muted**: Gray (#c8c8c8)

All images are rendered with grayscale filter for theme consistency.

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with 3-column product grid
- **Tablet** (980px): 1-column layout
- **Mobile** (640px): Optimized navigation and spacing

## 📸 Screenshots

**Homepage - Hero Section & Featured Products**
![ElectroHub Homepage](./homepage-screenshot.png)

**Featured Products:**
- Noise Cancelling Headphones - $249
- Ultra Portable Laptop - $1,099
- VR Gaming Set - $599

## 🛒 Products Featured

1. **Noise Cancelling Headphones** - Best Value
   - Comfortable, immersive sound with premium finish

2. **Ultra Portable Laptop** - Hot
   - Thin, fast, ideal for creators and students

3. **VR Gaming Set** - Gaming
   - Immersive virtual reality with motion controllers

## 👥 Customer Testimonials

The homepage features authentic customer reviews from:
- Maya Patel (Lifestyle blogger)
- Jordan Lee (Freelance designer)
- Nina Khan (Tech enthusiast)

## 📧 Contact Information

- Email: utkarshawagh941@gmail.com
- Phone: +91 9975896328
- Address: Angel Smruti, Papdy, Vasai, Palghar

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 👨‍💻 Author

**Utkarsha Wagh**
- GitHub: [@utkarshawagh123](https://github.com/utkarshawagh123)
- Email: utkarshawagh941@gmail.com

---

Built with ❤️ using React and Vite
