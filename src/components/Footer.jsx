import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdShoppingBag, MdPayments, MdPendingActions } from "react-icons/md";
import { FaUsers } from "react-icons/fa"; 
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check active route
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="mobile-footer px-4 py-2">
        
        {/* HOME */}
        <button
          className={isActive("/") ? "active" : ""}
          onClick={() => navigate("/")}
        >
          <IoIosHome className="footer-icon" />
          <span>Home</span>
        </button>

        {/* ORDERS */}
        <button
          className={isActive("/orders") ? "active" : ""}
          onClick={() => navigate("/orders")}
        >
          <MdShoppingBag className="footer-icon" />
          <span>Orders</span>
        </button>

        {/* CUSTOMERS */}
        <button
          className={isActive("/customers") ? "active" : ""}
          onClick={() => navigate("/customers")}
        >
          <FaUsers className="footer-icon" />
          <span>Customers</span>
        </button>

        {/* TRANSACTIONS */}
        <button
          className={isActive("/transactions") ? "active" : ""}
          onClick={() => navigate("/transactions")}
        >
          <MdPayments className="footer-icon" />
          <span>Transactions</span>
        </button>

        {/* OUTSTANDING */}
        <button
          className={isActive("/outstanding") ? "active" : ""}
          onClick={() => navigate("/outstanding")}
        >
          <MdPendingActions className="footer-icon" />
          <span>Outstanding</span>
        </button>
      </div>
    </>
  );
};

export default Footer;
