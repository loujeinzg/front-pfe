import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo/logo.png';

const Header = () => {
  return (
    <header className="headerhome">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="img-cart" />
      </Link>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#review">Review</a>
        <a href="#aboutus">About Us</a>
      </nav>
      <div className="icons">
        <div className="fas fa-bars menu-btn" id="menu-btn"></div>
        <Link to="/signin-signup" className="button" id="login-btn">
          <i className="fas fa-user icon"></i> Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
