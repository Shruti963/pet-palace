// Accessories.jsx

import AccessoryCard from "../components/AccessoryCard";
import { accessories } from "../services/accessoryService";
import "./Accessories.css";

export default function Accessories() {
  return (
    <div className="accessories">
      <h2 className="accessories-title">
        Pet Accessories 🐾
      </h2>

      <div className="accessories-grid">
        {accessories.map((item) => (
          <AccessoryCard key={item.id} accessory={item} />
        ))}
      </div>
      
    </div>
  );
}
