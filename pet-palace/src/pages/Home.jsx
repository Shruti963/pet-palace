// Home.jsx
import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/pets");
        setPets(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch pets");
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading pets...</h2>;

  return (
    <div className="home">
      <h2>Available Pets for Adoption 🐾</h2>

      <div className="pet-grid">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
