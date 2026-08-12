import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import '../styles/CartItem.css';

export default function CartItem({ item }) {
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
        
        <p className="item-total">Total: ₹{itemTotal}</p>
      </div>
      <button onClick={handleRemove} className="delete-btn">Delete</button>
    </div>
  );
}
