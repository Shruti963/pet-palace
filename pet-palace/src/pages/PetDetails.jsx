// PetDetails.jsx

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const PetDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/pets/${id}`);
        setPet(res.data);
      } catch (err) {
        console.error(err);
        alert("Pet not found");
      } finally {
        setLoading(false);
      }
    };
    fetchPet();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading pet...</h2>;
  if (!pet) return <h2 style={{ textAlign: "center" }}>Pet not found</h2>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img src={pet.image} alt={pet.name} width="300" />
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age} years</p>
      <p>Price: ₹{pet.price}</p>

      <button
        style={{
          marginTop: "20px",
          padding: "8px 20px",
          fontSize: "14px",
          backgroundColor: "var(--primary)",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => addToCart({ ...pet, id: pet._id })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PetDetails;
