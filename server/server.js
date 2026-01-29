// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const authRoutes = require("./routes/authRoutes");
// const petRoutes = require("./routes/petRoutes");
// // const cartRoutes = require("./routes/cartRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/pets", petRoutes);
// // app.use("/api/cart", cartRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
// const cartRoutes = require("./routes/cartRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "*", // allow frontend (Vercel)
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
// app.use("/api/cart", cartRoutes);

// Test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Pet Care API is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
