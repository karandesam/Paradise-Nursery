# Paradise Nursery

An elegant and responsive e-commerce application for an online plant shop built with React.js and Redux Toolkit.

## Description

Paradise Nursery is a modern shopping cart application that allows users to browse a curated collection of houseplants, add items to their cart, manage quantities, and proceed to checkout. The application features a beautiful landing page, comprehensive product listing with category filtering, and a fully functional shopping cart with Redux state management.

## Features

- **Beautiful Landing Page**: Eye-catching hero section with "Get Started" navigation
- **Product Browsing**: Browse plants organized into 3 categories (Indoor Plants, Succulents, Flowering Plants)
- **18 Unique Products**: 6 unique plants in each category with images, descriptions, and prices
- **Shopping Cart**: Full-featured cart with add, remove, increase/decrease quantity operations
- **Redux State Management**: Centralized cart state using Redux Toolkit
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Cart Count**: Real-time cart item counter in the navbar
- **Add to Cart Protection**: Buttons disable after adding to prevent duplicates
- **About Us Page**: Company information and service details
- **Modern UI**: Clean, professional design with smooth animations and hover effects

## Technologies Used

- **React.js** - Frontend UI library with functional components and hooks
- **Redux Toolkit** - State management for shopping cart
- **React Router** - Client-side routing and navigation
- **Vite** - Fast build tool and development server
- **CSS3** - Responsive styling with modern features

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx      # Product display with categories
│   │   ├── Cart.jsx              # Shopping cart page
│   │   ├── CartItem.jsx          # Individual cart item component
│   │   ├── AboutUs.jsx           # Company information
│   │   ├── Navbar.jsx            # Navigation bar
│   │   └── plantsData.js         # Plant data structure
│   ├── redux/
│   │   ├── CartSlice.jsx         # Redux cart slice with reducers
│   │   └── store.js              # Redux store configuration
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ProductList.css
│   │   ├── CartItem.css
│   │   ├── Cart.css
│   │   └── AboutUs.css
│   ├── App.jsx                   # Main app with routes and landing page
│   ├── App.css                   # Landing page styling
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point with Redux Provider
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── package.json                  # Project dependencies
└── README.md                      # This file
```

## How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## Shopping Cart Features

### Add to Cart
- Click "Add to Cart" button on any plant card
- Button disables after adding to prevent duplicate additions
- Button text changes to "✓ Added"
- Cart count updates immediately in navbar

### Cart Management
- **Increase Quantity**: Click + button to add more of same plant
- **Decrease Quantity**: Click - button to reduce quantity
- **Delete Item**: Click Delete button to remove product completely
- **Individual Total**: Shows total cost for each item (price × quantity)
- **Cart Total**: Displays sum of all item totals

### Navigation
- **Continue Shopping**: Button returns to product listing
- **Checkout**: Displays "Coming Soon" message
- **Home**: Navigate back to landing page
- **About**: View company information

## Cart Data Structure

Each item in the cart contains:
```javascript
{
  id: number,           // Unique plant identifier
  name: string,         // Plant name
  category: string,     // Product category
  price: number,        // Unit price
  description: string,  // Plant description
  image: string,        // Product image URL
  quantity: number      // Quantity in cart
}
```

## Redux Reducers

### CartSlice Actions
- **addToCart**: Add a product to cart (prevents duplicates)
- **removeFromCart**: Delete a product completely
- **increaseQuantity**: Increment quantity by 1
- **decreaseQuantity**: Decrement quantity by 1 (removes if 0)
- **clearCart**: Empty entire cart

## Plant Categories

### 1. Indoor Plants (6 items)
Snake Plant, Peace Lily, Spider Plant, Pothos, Rubber Plant, ZZ Plant

### 2. Succulents (6 items)
Aloe Vera, Jade Plant, Echeveria, Sedum, Cactus Mix, Haworthia

### 3. Flowering Plants (6 items)
Monstera, Boston Fern, Orchid, Areca Palm, Chinese Evergreen, Anthurium

## Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full grid layout with sidebar cart summary
- **Tablet**: Adjusted grid and spacing
- **Mobile**: Single column layout with optimized touch targets

## Error Handling

- Broken images fall back to placeholder images
- Empty cart displays friendly message
- All imports properly resolved
- No console errors or warnings
- Proper prop validation and state management

## Future Enhancements

- Real payment processing
- User authentication and order history
- Product reviews and ratings
- Search and filtering functionality
- Wishlist feature
- Admin dashboard for inventory management

## License

This project is open source and available for educational purposes.

---

**Enjoy building your green home with Paradise Nursery! 🌿**
