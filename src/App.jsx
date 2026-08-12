import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">Welcome to Paradise Nursery - Your Online Plant Shop</p>
        <p className="landing-description">
          Paradise Nursery is an online plant shop where you can buy beautiful houseplants and indoor plants. 
          Discover beautiful indoor plants for your home and office. 
          From low-maintenance succulents to lush tropical plants, 
          we have the perfect greenery for you.
        </p>
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
