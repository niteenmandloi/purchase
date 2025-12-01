import React, { useState } from "react";
import "./DashboardSection.css";
import { FaUsers, FaRegClipboard, FaBullhorn, FaHeadset } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineSave, MdDeliveryDining, MdCheckCircle } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";

const Overlay = () => {
    const [activeTab, setActiveTab] = useState("today");
  return (
    <div className="dashboard">

    {/* Overall Section */}
    <div className="overall-box">
      <h3 className="overall-title">Overall</h3>

      <div className="tabs">
        <button className={activeTab === "today" ? "active" : ""} onClick={() => setActiveTab("today")}>Today</button>
        <button className={activeTab === "week" ? "active" : ""} onClick={() => setActiveTab("week")}>Week</button>
        <button className={activeTab === "month" ? "active" : ""} onClick={() => setActiveTab("month")}>Month</button>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-label">Customers</span>
          <span className="stat-value">1</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Orders</span>
          <span className="stat-value">1</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Amounts</span>
          <span className="stat-value amount">₹2,080.21</span>
        </div>
      </div>
    </div>

    {/* 4 Cards Grid */}
    <div className="grid4">
      <div className="box">
        <FaUsers className="box-icon" />
        <p>My Customers</p>
      </div>
      <div className="box">
        <FaRegClipboard className="box-icon" />
        <p>Reports</p>
      </div>
      <div className="box">
        <FaBullhorn className="box-icon" />
        <p>Announcements</p>
      </div>
      <div className="box">
        <FaHeadset className="box-icon" />
        <p>Support</p>
      </div>
    </div>

    {/* Quick Menu */}
    <div className="quick-menu">
      <div className="menu-item">
        <MdOutlineMailOutline className="menu-icon" />
        <span>Bounced</span>
        <div className="badge">12</div>
      </div>

      <div className="menu-item">
        <MdOutlineSave className="menu-icon" />
        <span>Saved ord.</span>
      </div>

      <div className="menu-item">
        <MdDeliveryDining className="menu-icon" />
        <span>Deliveries</span>
        <div className="badge">3</div>
      </div>

      <div className="menu-item">
        <MdCheckCircle className="menu-icon" />
        <span>To-Do</span>
      </div>

      <div className="menu-item">
        <IoPersonAddOutline className="menu-icon" />
        <span>Registration</span>
      </div>
    </div>
  </div>
  )
}

export default Overlay
