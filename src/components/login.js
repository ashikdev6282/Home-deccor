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

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // 🔹 Validate Password Strength
  const isValidPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=!]).{8,}$/.test(password);
  };

  // 🔹 Validate Customer Name (Only Letters & Spaces)
  const isValidCustomerName = (name) => {
    return /^[a-zA-Z\s]+$/.test(name);
  };

  // 🔹 Handle Form Submission with Strong Validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!credentials.customername || !credentials.password) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }

    // Check customer name validation
    if (!isValidCustomerName(credentials.customername)) {
      toast.error("Customer name should only contain letters and spaces!", {
        position: "top-center",
      });
      return;
    }

    // Check password strength
    if (!isValidPassword(credentials.password)) {
      toast.error(
        "Password must be at least 8 characters, include a number, a lowercase letter, and a special character!",
        { position: "top-center" }
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customer_login",
        credentials
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);

        toast.success("Login successful! Redirecting...", {
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.error("Invalid response from server.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed. Check your credentials!",
        { position: "top-center" }
      );
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
