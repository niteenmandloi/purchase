import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdShoppingBag, MdPayments, MdPendingActions } from "react-icons/md";
import { FaUsers } from "react-icons/fa"; 
import "./Footer.css";
import Order from "../pages/Order";

const Footer = () => {
  const [openInvoice, setOpenInvoice] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="mobile-footer px-4 py-2">
        <button className="active" onClick={() => navigate("/")}>
          <IoIosHome className="footer-icon" />
          <span>Home</span>
        </button>

        {/* Open modal instead of navigating */}
        <button onClick={() => setOpenInvoice(true)}>
          <MdShoppingBag className="footer-icon" />
          <span>Orders</span>
        </button>

        <button onClick={() => navigate("/customers")}>
          <FaUsers className="footer-icon" />
          <span>Customers</span>
        </button>

        <button onClick={() => navigate("/transactions")}>
          <MdPayments className="footer-icon" />
          <span>Transactions</span>
        </button>

        <button onClick={() => navigate("/outstanding")}>
          <MdPendingActions className="footer-icon" />
          <span>Outstanding</span>
        </button>
      </div>

      <Order
        isOpen={openInvoice}
        onClose={() => setOpenInvoice(false)}
      />
    </>
  );
};

export default Footer;
