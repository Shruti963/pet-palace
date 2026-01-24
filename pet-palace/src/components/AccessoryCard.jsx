// AccessoryCard.jsx

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./AccessoryCard.css";

export default function AccessoryCard({ accessory }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="accessory-card">
      <img
        src={accessory.image}
        alt={accessory.name}
        className="accessory-img"
      />

      <div className="accessory-content">
        <h3 className="accessory-title">{accessory.name}</h3>

        <p className="accessory-desc">
          {accessory.description}
        </p>

        <p className="accessory-rating">
          ⭐ {accessory.rating}
        </p>

        <p className="accessory-price">
          ₹{accessory.price}
        </p>

        {/* ✅ THIS is the important line */}
        <button
          className="accessory-btn"
          onClick={() => addToCart(accessory)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
