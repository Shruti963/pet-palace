const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware"); // your JWT auth

// Get user's cart
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("cart.petId");
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user's cart
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items } = req.body; // [{petId, quantity}]
    const user = await User.findById(req.user.id);
    user.cart = items;
    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
