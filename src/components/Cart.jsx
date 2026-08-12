import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import Navbar from './Navbar';
import '../styles/Cart.css';

export default function Cart() {
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
    <>
      <Navbar />
      <div className="cart-container">
        <h1>🛒 Shopping Cart</h1>

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
                  <CartItem key={item.id} item={item} />
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
    </>
  );
}
