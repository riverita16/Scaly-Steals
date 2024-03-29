import React from "react";

import logo from "../images/gator.png";
// import scalysteals from "../images/scaly-steals.png";
import heart from "../images/heart.png";
import cart from "../images/cart.png";
import profile from "../images/profile.png";

function Header() {
  return (
    <div className="Header">
      <div className="header-items">
        <a href="/">
          <img id="logo" src={logo} alt="logo" />
          <text id="logo-text">Scaly Steals.</text>
        </a>
      </div>
      <div className="search-container">
        <input id="search" className="search-input" placeholder="Search" />
      </div>
      <div className="header-items">
        <img id="heart" src={heart} alt="heart" />
        <a href="/cart">
          <img id="cart" src={cart} alt="cart" />
        </a>
      </div>
      <div className="header-items">
        <a href="/user">
          <text id="username">Username</text>
          <img id="profile" src={profile} alt="profile" /> 
        </a>
      </div>
    </div>
  );
}

export default Header;