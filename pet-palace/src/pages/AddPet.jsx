// AddPet.jsx

import { useState } from "react";
import "./AddPet.css";

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    age: "",
    image: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pet); // later -> send to backend
    alert("Pet added (frontend only)");
    setPet({ name: "", type: "", age: "", image: "" });
  };

  return (
    <div className="add-pet">
      <h2>Add New Pet 🐾</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={pet.name} onChange={handleChange} placeholder="Pet Name" required />
        <input name="type" value={pet.type} onChange={handleChange} placeholder="Pet Type" required />
        <input name="age" value={pet.age} onChange={handleChange} placeholder="Age" required />
        <input name="image" value={pet.image} onChange={handleChange} placeholder="Image URL" required />

        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
