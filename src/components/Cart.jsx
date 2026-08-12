import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import CartPage from './CartItem';
import '../styles/Cart.css';

export default function Cart() {
  return (
    <>
      <Navbar />
      <CartPage />
    </>
  );
