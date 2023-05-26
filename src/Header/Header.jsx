import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="navbar">
        <p className="title">NeoFi</p>
        <div className="switches">
          <p className="clicks">Trader</p>
          <br />
          <p className="clicks">Form</p>
          <br />
          <p className="clicks">Support</p>
          <br />
          <p className="clicks">About</p>
        </div>
        <div className="btn">
          <p>Connect wallet</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
