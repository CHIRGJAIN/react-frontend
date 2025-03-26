import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductPage from "./pages/productpage";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage"; 
import Contact from "./pages/contactpage";
import About from "./pages/aboutpage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;


