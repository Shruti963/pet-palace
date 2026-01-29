// AddPet.jsx

import { useState } from "react";
import axios from "axios";
import "./AddPet.css";

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    age: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/pets", pet);
      alert("Pet added successfully!");
      setPet({ name: "", type: "", age: "", price: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to add pet");
    }
  };

  return (
    <div className="add-pet">
      <h2>Add New Pet 🐾</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={pet.name}
          onChange={handleChange}
          placeholder="Pet Name"
          required
        />
        <input
          name="type"
          value={pet.type}
          onChange={handleChange}
          placeholder="Pet Type"
          required
        />
        <input
          name="age"
          type="number"
          value={pet.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          name="price"
          type="number"
          value={pet.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          name="image"
          value={pet.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />

        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
