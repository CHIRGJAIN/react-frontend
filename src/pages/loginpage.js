// // import React, { useState } from "react";
// // import { FaUser, FaLock } from "react-icons/fa";
// // import "../styles/LoginPage.css";
// // import google from "../assets/google-icon.png";
// // import facebook from "../assets/facebook-icon.png";
// // import Float from "../assets/float.png";

// // const floating = Float;
// // const GoogleIcon = google;
// // const FacebookIcon = facebook;

// // // Removed unused Login component

// // const LoginPage = () => {
// //   return (
// //     <div className="login-wrapper">
// //       <div className="login-container">
// //         <h2 className="login-title">LOGIN</h2>
// //         <p className="login-subtitle">How to i get started lorem ipsum dolor sit amet?</p>

// //         <div className="input-container">
// //           <FaUser className="input-icon" />
// //           <input type="text" placeholder="Username" />
// //         </div>

// //         <div className="input-container">
// //           <FaLock className="input-icon" />
// //           <input type="password" placeholder="Password" />
// //         </div>

// //         <button className="login-button">Login Now</button>

// //         {showPopup && (
// //         <div className="popup">
// //           <div className="popup-content">
// //             <h3>✅ Successfully Logged In!</h3>
// //             <button onClick={() => setShowPopup(false)}>OK</button>
// //           </div>
// //         </div>
// //       )}

// //         <div className="separator">
// //           <br />  <span>OR</span>  <br />
// //           <span>Login with Others</span>
// //         </div>

// //         <div className="social-login">
// //           <button className="google-login">
// //             <img src={GoogleIcon} alt="Google" />
// //             Login with <b>google</b>
// //           </button>
// //           <button className="facebook-login">
// //             <img src={FacebookIcon} alt="Facebook" />
// //             Login with <b>Facebook</b>
// //           </button>
// //         </div>

// //         <p className="signup-text">
// //           Don't have an account? <a href="#">Sign up</a>
// //         </p>
// //       </div>

// //       <div className="background-image">
// //         <img src={floating} alt="Background Design" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;







// import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";
// import "../styles/LoginPage.css";
// import google from "../assets/google-icon.png";
// import facebook from "../assets/facebook-icon.png";
// import Float from "../assets/float.png";

// const floating = Float;
// const GoogleIcon = google;
// const FacebookIcon = facebook;

// const LoginPage = () => {
//   const navigate = useNavigate(); 


// const LoginPage = () => {
//   // Add state for popup visibility
//   const [showPopup, setShowPopup] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     setShowPopup(true);
//   };
// };
//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <h2 className="login-title">LOGIN</h2>
//         <p className="login-subtitle">How to i get started lorem ipsum dolor sit amet?</p>

//         <div className="input-container">
//           <FaUser className="input-icon" />
//           <input type="text" placeholder="Username" />
//         </div>

//         <div className="input-container">
//           <FaLock className="input-icon" />
//           <input type="password" placeholder="Password" />
//         </div>

//         <button className="login-button" onClick={handleLogin}>Login Now</button>

//         {/* Popup for successful login */}
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <h3>✅ Successfully Logged In!</h3>
//               <button onClick={() => setShowPopup(false)}>OK</button>
//             </div>
//           </div>
//         )}

//         <div className="separator">
//           <br /> <span>OR</span> <br />
//           <span>Login with Others</span>
//         </div>

//         <div className="social-login">
//           <button className="google-login">
//             <img src={GoogleIcon} alt="Google" />
//             Login with <b>google</b>
//           </button>
//           <button className="facebook-login">
//             <img src={FacebookIcon} alt="Facebook" />
//             Login with <b>Facebook</b>
//           </button>
//         </div>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <a href="#" onClick={() => navigate("/signup")}>
//             Sign up
//           </a>
//         </p>
//       </div>

//       <div className="background-image">
//         <img src={floating} alt="Background Design" />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; // Import useNavigate
// import "../styles/LoginPage.css";
// import google from "../assets/google-icon.png";
// import facebook from "../assets/facebook-icon.png";
// import Float from "../assets/float.png";

// const floating = Float;
// const GoogleIcon = google;
// const FacebookIcon = facebook;

// const LoginPage = () => {
//   const navigate = useNavigate(); // Correct placement of useNavigate
//   const [showPopup, setShowPopup] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//         navigate("/"); // Redirects to the home page after login
//       }, 3000);
//     };

//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <h2 className="login-title">LOGIN</h2>
//         <p className="login-subtitle">How to i get started lorem ipsum dolor sit amet?</p>

//         <div className="input-container">
//           <FaUser className="input-icon" />
//           <input type="text" placeholder="Username" />
//         </div>

//         <div className="input-container">
//           <FaLock className="input-icon" />
//           <input type="password" placeholder="Password" />
//         </div>

//         <button className="login-button" onClick={handleLogin}>Login Now</button>

//         {/* Popup for successful login */}
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <h3>✅ Successfully Logged In!</h3>
//               <button onClick={() => setShowPopup(false)}>OK</button>
//             </div>
//           </div>
//         )}

//         <div className="separator">
//           <br /> <span>OR</span> <br />
//           <span>Login with Others</span>
//         </div>

//         <div className="social-login">
//           <button className="google-login">
//             <img src={GoogleIcon} alt="Google" />
//             Login with <b>Google</b>
//           </button>
//           <button className="facebook-login">
//             <img src={FacebookIcon} alt="Facebook" />
//             Login with <b>Facebook</b>
//           </button>
//         </div>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>

//       <div className="background-image">
//         <img src={floating} alt="Background Design" />
//       </div>  
//       </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";
import Float from "../assets/float.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", { // Update with your backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      localStorage.setItem("token", data.token); // Store JWT token
      localStorage.setItem("role", data.role);   // Store user role

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        if (data.role === "admin") {
          navigate("/admin"); // Redirect admin to admin panel
        } else {
          navigate("/"); // Redirect normal user to home page
        }
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <p className="login-subtitle">How do I get started? Enter your details below.</p>

        {error && <p className="error-message">{error}</p>}

        <div className="input-container">
          <FaUser className="input-icon" />
          <input 
            type="text" 
            placeholder="Username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-container">
          <FaLock className="input-icon" />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Login Now</button>
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
            <img src={google} alt="Google" />
            Login with <b>Google</b>
          </button>
          <button className="facebook-login">
            <img src={facebook} alt="Facebook" />
            Login with <b>Facebook</b>
          </button>
        </div>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <div className="background-image">
        <img src={Float} alt="Background Design" />
      </div>  
    </div>
  );
};

export default LoginPage;
