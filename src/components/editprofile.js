import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./editprofile.css";

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    alert("Profile updated successfully!");
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Image Section */}
        <div className="profile-image-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <label htmlFor="profile-pic" className="profile-upload-btn">
            Upload Image
            <input
              type="file"
              id="profile-pic"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        </div>

        {/* Personal Information Section */}
        <div className="form-section">
          <h3 className="form-section-title">Personal Information</h3>
          <div className="input-container">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="form-section">
          <h3 className="form-section-title">Change Password</h3>
          <div className="input-container">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button type="submit" className="save-btn">Save Changes</button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
