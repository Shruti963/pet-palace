// PetCard.jsx

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  const { addToCart } = useContext(CartContext);

  return (
   <div className="pet-card">
  <img src={pet.image} alt={pet.name} />
  <h3>{pet.name}</h3>
  <p>Type: {pet.type}</p>
  <p>Age: {pet.age} years</p>
  <p className="pet-price">Price: ₹{pet.price}</p>  {/* price highlighted */}
  
  <div className="pet-card-buttons">
    <Link to={`/pet/${pet.id}`}>
      <button>View Details</button>
    </Link>

    <button onClick={() => addToCart(pet)}>
      Add to Cart
    </button>
  </div>
</div>

  );
};

export default PetCard;
