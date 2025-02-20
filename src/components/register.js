import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    customername: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    }
  }, []);

  // 🔹 Handle Input Changes and Validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input when user types
    validateField(name, value);
  };

  // 🔹 Validation Functions
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "customername":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = "Full name should only contain letters and spaces.";
        }
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Invalid email format.";
        }
        break;

      case "phone":
        if (!/^\d{10}$/.test(value)) {
          errorMsg = "Phone number must be 10 digits.";
        }
        break;

      case "password":
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(value)) {
          errorMsg =
            "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
        }
        break;

      case "confirmPassword":
        if (value !== formData.password) {
          errorMsg = "Passwords do not match.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  // 🔹 Handle Form Submission with Validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run full validation before submitting
    let newErrors = {};
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));
    if (Object.values(errors).some((error) => error)) {
      toast.error("Please fix the errors before submitting.", { position: "top-center" });
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/customer_register", {
        customername: formData.customername,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      toast.success("Registered successfully!", { position: "top-center" });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.", { position: "top-center" });
    }
  };

  return (
    <div className="register-page">
      <ToastContainer />
      <div className="register-left">
        <h1>Welcome Back!</h1>
        <p>Create an account to explore more features.</p>
      </div>
      <div className="register-right">
        <div className="register-card">
          <h2 className="register-title">Create Account</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="customername"
                placeholder="Enter your full name"
                value={formData.customername}
                onChange={handleChange}
                required
              />
              {errors.customername && <p className="error-text">{errors.customername}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="register-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
