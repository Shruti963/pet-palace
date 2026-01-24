// Header.jsx

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaShoppingCart, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { cartItems } = useContext(CartContext); // ✅ cart data

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { name: "User" } : null;
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">🐾 PetCare</Link>
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/add-pet">Add Pet</Link>
          <Link to="/accessories">Accessories</Link>

          {/* ✅ WORKING CART COUNT */}
          <Link to="/cart" className="cart">
            <FaShoppingCart />
            <span className="cart-count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <button onClick={handleLogout} className="auth-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="auth-btn">
              Login
            </Link>
          )}

          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
