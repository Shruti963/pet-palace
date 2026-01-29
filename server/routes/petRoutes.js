const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet"); // 👈 must match file name exactly

// GET all pets
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pets" });
  }
});

// ADD pet
router.post("/", async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ message: "Failed to add pet" });
  }
});

module.exports = router;
