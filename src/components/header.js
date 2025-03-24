import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import cartIcon from "../assets/cart.png"; // Update path as needed


function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo"> 
          <img src={logo} alt="logo" />
        </div>
        <SearchBar />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          <li className="cart-icon">
            <a href="/cart">
            <img src={cartIcon} alt="Cart" />
            </a>
          </li>
          </ul>
      </nav>

    </header>
  );
}

export default Header;
