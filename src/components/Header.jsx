import React from "react";
import "./HeaderCard.css";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="header-card">

      {/* Top Row */}
      <div className="profile-row">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-img"
        />

        <div className="name-box">
          <p className="welcome">Welcome</p>
          <p className="username">Manish Soni <span className="user-id">(AYTemp056)</span></p>
        </div>

        <div className="points-box">
          <span className="points-icon">💎</span>
          <span className="points-text">900</span>
        </div>
      </div>

      {/* Dropdown */}
      <div className="dropdown-row">
        <select className="dropdown-select">
          <option>Mecilink AGENCIES (MP-IDR-LSM), INDIA</option>
          <option>Other Agency</option>
        </select>
        <IoIosArrowDown className="dropdown-icon" />
      </div>

      {/* Card with Progress */}
      <div className="orders-card">
        <p className="order-title">0 orders placed today</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <span className="visited-count">4/8 visited</span>
      </div>
    </div>
  );
};

export default Header;
