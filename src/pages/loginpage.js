import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../styles/LoginPage.css";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";
import Float from "../assets/float.png";
import { useNavigate } from "react-router-dom";

const floating = Float;
const GoogleIcon = google;
const FacebookIcon = facebook;


const LoginPage = () => {
  const navigate = useNavigate();

  // Add state for popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setShowPopup(true);
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <p className="login-subtitle">How to i get started lorem ipsum dolor sit amet?</p>

        <div className="input-container">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-container">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="login-button" onClick={handleLogin}>Login Now</button>

        {/* Popup for successful login */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>✅ Successfully Logged In!</h3>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}

        <div className="separator">
          <br /> <span>OR</span> <br />
          <span>Login with Others</span>
        </div>

        <div className="social-login">
          <button className="google-login">
            <img src={GoogleIcon} alt="Google" />
            Login with <b>google</b>
          </button>
          <button className="facebook-login">
            <img src={FacebookIcon} alt="Facebook" />
            Login with <b>Facebook</b>
          </button>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")}>
            Sign up
          </a>
        </p>
      </div>

      <div className="background-image">
        <img src={floating} alt="Background Design" />
      </div>
    </div>
  );
};

export default LoginPage;
