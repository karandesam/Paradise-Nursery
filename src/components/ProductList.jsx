import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsData } from './plantsData';
import Navbar from './Navbar';
import '../styles/ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  // Group plants by category
  const groupedPlants = plantsData.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const isInCart = cartItems.some(item => item.id === product.id);
    
    if (!isInCart) {
      dispatch(addItem(product));
      setAddedItems(new Set([...addedItems, product.id]));
    }
  };

  const isProductAdded = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <>
      <Navbar />
      <div className="products-container">
        <div className="products-header">
          <h1>🌱 Browse Our Plants</h1>
          <p>Discover beautiful plants for your home and office</p>
        </div>

        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {plants.map(plant => (
                <div key={plant.id} className="product-card">
                  <div className="product-image">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(plant.name);
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="description">{plant.description}</p>
                    <p className="price">₹{plant.price}</p>
                    <button
                      className={`add-to-cart-btn ${isProductAdded(plant.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isProductAdded(plant.id)}
                    >
                      {isProductAdded(plant.id) ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
