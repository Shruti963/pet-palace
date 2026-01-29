const Pet = require("../models/Pet");

// Add new pet
exports.addPet = async (req, res) => {
  const { name, type, age, price, image } = req.body;
  try {
    const pet = await Pet.create({ name, type, age, price, image });
    res.status(201).json(pet);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all pets
exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get pet by id
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
