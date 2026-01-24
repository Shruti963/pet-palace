// Home.jsx

import PetCard from "../components/PetCard";
import { pets } from "../services/petService";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Available Pets for Adoption 🐾</h2>

      <div className="pet-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
