import Navbar from './Navbar';
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Paradise Nursery</h1>
          
          <section className="about-section">
            <h2>Company Overview</h2>
            <p>
              Paradise Nursery is an online plant shop and company dedicated to bringing houseplants to customers. 
              We are a plant e-commerce business that specializes in selling quality houseplants and indoor plants. 
              At Paradise Nursery, we believe that every home deserves a touch of nature. 
              Since 2020, we have been committed to bringing beautiful, healthy plants directly to your doorstep.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              The mission of Paradise Nursery is to make plant ownership accessible and enjoyable for everyone. 
              We are committed to providing quality houseplants and excellent customer service. 
              Whether you're a seasoned plant parent or just starting your green journey, 
              we have the perfect plant for you.
            </p>
          </section>

          <section className="about-section">
            <h2>Quality of Plants</h2>
            <p>
              The quality of plants at Paradise Nursery is our top priority. 
              Every plant in our collection is carefully selected and nurtured in our state-of-the-art 
              facilities. We ensure that each plant is healthy, vibrant, and ready to thrive in your home. 
              Our expert team monitors plant health at every stage to guarantee the quality and longevity of our plants.
            </p>
          </section>

          <section className="about-section">
            <h2>Customer Service</h2>
            <p>
              Customer service is central to Paradise Nursery. Your satisfaction is our priority. 
              We provide the following customer service benefits:
            </p>
            <ul className="service-list">
              <li>Expert plant care guides for every species</li>
              <li>Free delivery on orders above ₹500</li>
              <li>7-day plant health guarantee</li>
              <li>Responsive customer support via email and phone</li>
              <li>Educational resources and plant care tips</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Why Choose Paradise Nursery?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🌱</div>
                <h3>Organic Growth</h3>
                <p>Naturally grown plants without harmful pesticides</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">📦</div>
                <h3>Careful Packaging</h3>
                <p>Plants shipped safely with special care packaging</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">💚</div>
                <h3>Plant Care Support</h3>
                <p>Lifetime guidance and support for your plants</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🌍</div>
                <h3>Eco-Friendly</h3>
                <p>Committed to sustainable practices and green initiatives</p>
              </div>
            </div>
          </section>

          <section className="about-section contact-section">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you!</p>
            <p><strong>Email:</strong> hello@paradisesnursery.com</p>
            <p><strong>Phone:</strong> +91-800-PLANTS-1</p>
            <p><strong>Hours:</strong> Monday - Sunday, 9 AM - 6 PM IST</p>
          </section>
        </div>
      </div>
    </>
  );
}
