import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "training@jalaacademy.com" && password === "jobprogram") {
      localStorage.setItem('auth', 'true');
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>JALA ACADEMY</h1>
      <p style={{ textAlign: "center" }}>
        <strong>Use the below details to login</strong><br />
        Email: training@jalaacademy.com<br />
        Password: jobprogram
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <span style={{ backgroundColor: "yellow", fontWeight: "bold", padding: "5px" }}>
          Learn Everything on real-time scenarios. FREE for all
        </span>
      </div>

      <form onSubmit={handleLogin} className="login-box">
        <h3 style={{ textAlign: "center" }}>Sign in</h3>
        <input
          type="email"
          placeholder="training@jalaacademy.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>
        <button type="submit" className="login-button">Sign In</button>
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <span>- OR -</span><br />
          <button type="button" style={{
            backgroundColor: "#2f3d70", color: "white", border: "none",
            padding: "8px 15px", marginTop: "10px", cursor: "pointer"
          }}>
            Forgot Password
          </button>
          <p style={{ marginTop: "10px", color: "#1976d2", cursor: "pointer" }}>
            Admin Login
          </p>
        </div>
      </form>

      <footer className="footer">
        JALA Academy offers Job Guaranteed Programs for Freshers to 12 year's experience on Full Stack Development /
        Automation Testing / Dev-Ops / QA / SDET / Cyber Security / RPA / Cloud Technologies. Training will be completely
        on live Project scenarios. Read our website JALA Academy for more details: <a href="https://jalaacademy.com" style={{ color: "white" }}>https://jalaacademy.com</a>
      </footer>
    </div>
  );
};

export default Login;
