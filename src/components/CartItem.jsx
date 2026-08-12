import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import '../styles/CartItem.css';

// Individual cart item row component
function CartItemRow({ item }) {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.quantity;

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img 
          src={item.image} 
          alt={item.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/100x100?text=' + encodeURIComponent(item.name);
          }}
        />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="unit-price">Unit Price: ₹{item.price}</p>
        
        <div className="quantity-controls">
          <button onClick={handleDecrease} className="qty-btn">−</button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={handleIncrease} className="qty-btn">+</button>
        </div>
        
        <p className="item-total">Individual Item Total: ₹{itemTotal}</p>
      </div>
      <button onClick={handleRemove} className="delete-btn">Delete</button>
    </div>
  );
}

// Complete shopping cart page component
function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={handleContinueShopping} className="continue-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-section">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-item">
                <span>Total Items:</span>
                <span className="summary-value">{totalItems}</span>
              </div>
              <div className="summary-item total-amount">
                <span>Total Amount:</span>
                <span className="summary-value">₹{cartTotal}</span>
              </div>

              <button onClick={handleContinueShopping} className="continue-btn">
                Continue Shopping
              </button>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Default export is the complete cart page
export default CartPage;
