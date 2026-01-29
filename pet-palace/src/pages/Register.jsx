// src/pages/Register.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2 className="auth-title">Create Account 🐾</h2>
        <p className="auth-subtitle">Join Pet Palace today</p>

        <input type="text" placeholder="Full Name" value={name}
          onChange={(e) => setName(e.target.value)} className="auth-input" required />

        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="auth-input" required />

        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="auth-input" required />

        <button type="submit" className="auth-btn">Register</button>

        <p className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="auth-link">
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
