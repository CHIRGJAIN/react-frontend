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




import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";
import Float from "../assets/float.png";

const floating = Float;
const GoogleIcon = google;
const FacebookIcon = facebook;

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for Admin/User
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = () => {
    if (isAdmin) {
      if (username === "admin" && password === "admin123") {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/admin-dashboard"); // Redirect Admin
        }, 3000);
      } else {
        alert("Invalid Admin Credentials");
      }
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/"); // Redirect User
      }, 3000);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">{isAdmin ? "ADMIN LOGIN" : "USER LOGIN"}</h2>
        <p className="login-subtitle">How to i get started lorem ipsum dolor sit amet?</p>

        <div className="toggle-container">
          <span className={isAdmin ? "" : "active"} onClick={() => setIsAdmin(false)}>User</span>
          <span className={isAdmin ? "active" : ""} onClick={() => setIsAdmin(true)}>Admin</span>
        </div>

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

        <button className="login-button" onClick={handleLogin}>
          {isAdmin ? "Admin Login" : "Login Now"}
        </button>

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
            Login with <b>Google</b>
          </button>
          <button className="facebook-login">
            <img src={FacebookIcon} alt="Facebook" />
            Login with <b>Facebook</b>
          </button>
        </div>

        {!isAdmin && (
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </div>

      <div className="background-image">
        <img src={floating} alt="Background Design" />
      </div>
    </div>
  );
};

export default LoginPage;
