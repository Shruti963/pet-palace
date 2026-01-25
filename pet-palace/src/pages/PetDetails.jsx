// PetDetails.jsx

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { pets } from "../services/petsService";

const PetDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const pet = pets.find((p) => p.id === Number(id));

  if (!pet)
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Pet not found
      </h2>
    );

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img src={pet.image} alt={pet.name} width="300" />
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age} years</p>

      <button
        style={{ marginTop: "20px", padding: "8px 20px", fontSize: "14px", backgroundColor: "var(--primary)" ,border:"none" }}
        onClick={() => addToCart(pet)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PetDetails;
