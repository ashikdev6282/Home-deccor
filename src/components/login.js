import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    customername: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customer_login",
        credentials
      );

      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem("authToken", token); // Store the token

        toast.success("Login successful! Redirecting...", { position: "top-center" });

        setTimeout(() => {
          navigate("/home"); // Redirect to home after success
        }, 2000);
      } else {
        toast.error("No token found in the response.", { position: "top-center" });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.", { position: "top-center" });
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="customername"
              placeholder="Customer Name"
              value={credentials.customername}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="glowing-button">
            Login
          </button>
        </form>
        <div className="register-link" style={{ color: "#ff6b6b" }}>
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
