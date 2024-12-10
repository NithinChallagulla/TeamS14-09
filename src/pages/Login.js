// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Make sure you create this CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const credentials = {
      "harshini@klmail.com": { password: "admin", name: "Harshini", role: "admin" },
      "nithin@klmail.com": { password: "user1", name: "Nithin", role: "user" },
      "rahul@klmail.com": { password: "user2", name: "Rahul", role: "user" },
      "priya@klmail.com": { password: "user3", name: "Priya", role: "user" },
    };

    const user = credentials[email];

    if (user && user.password === password) {
      if (user.role === "admin") {
        navigate("/admin", { state: { name: user.name } }); // Route to Admin Dashboard with user name
      } else {
        navigate("/dashboard", { state: { name: user.name } }); // Route to Student Dashboard with user name
      }
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
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
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
