import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/cart">🛒 Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
