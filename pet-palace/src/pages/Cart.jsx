import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cart-total">
        Total: ₹{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
}
