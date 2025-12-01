// src/HeaderCard.jsx
import React from "react";
import profileImg from "../assets/image.png"; // change path if needed

const Header = () => {
  return (
    <div className="phone-wrapper">
    
      <div className="header-card">
        <div className="header-row">
          <div className="header-left">
            <img src={profileImg} alt="profile" className="profile-pic" />
            <div className="header-text">
              <p className="welcome">Welcome</p>
              <p className="username">Manish Soni (AYTemp056)</p>
            </div>
          </div>

          <div className="points-chip">
            <span className="points-icon">★</span>
            <span className="points-value">300</span>
          </div>
        </div>

        
        <div className="agency-row">
          <button className="agency-pill">
            <span className="agency-text">
              Medilink AGENCIES (MR-IDR-LSM), INDO…
            </span>
            <span className="chevron">▼</span>
          </button>

          <button className="square-btn">
            ⋮
          </button>
        </div>
      </div>

      
      <div className="orders-card">
        <div className="orders-header">
          <span className="orders-title">0 orders placed today</span>
        </div>

        <div className="orders-progress">
          <div className="orders-progress-bar">
            <div className="orders-progress-fill" />
          </div>
          <span className="orders-status">At risk</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
