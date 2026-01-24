// Footer.jsx

import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🐾 PetCare</h2>
          <p>
            Helping pets find loving homes. Adopt, care, and spread happiness.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Adopt Pets</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>

        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 India</p>
          <p>📧 support@petcare.com</p>
          <p>📞 +91 10101 01010</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 PetCare. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
