// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "../styles/Register.css"; // Make sure you create this CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate user creation
    console.log("Registered with", email, password);

    // Clear the values
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Show confetti and popup
    setShowConfetti(true);
    setShowPopup(true);

    // Navigate to Dashboard after a delay
    setTimeout(() => {
      setShowConfetti(false);
      setShowPopup(false);
      navigate("/login", { state: { name: "New User", email } });
    }, 3000);
  };

  return (
    <div className="register-container">
      {showConfetti && <Confetti />} {/* Confetti animation */}
      {showPopup && (
        <div className="popup">
          <h3>Registration Successful!</h3>
          <p>Welcome to the platform!</p>
        </div>
      )}
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
