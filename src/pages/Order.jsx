import React from "react";
import "./InvoiceDetails.css";
import { IoClose } from "react-icons/io5";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Order = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="invoice-overlay" onClick={onClose}>
      <div
        className="invoice-page"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* HEADER */}
        <div className="invoice-header">
          <h2>Order Details</h2>
          <button className="close-btn" onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        {/* INVOICE BOX */}
        <div className="invoice-box">
          <div className="invoice-id-row">
            <span className="invoice-id">Order# E043025-A0115394</span>
            <span className="paid-tag">FULLY PAID</span>
          </div>

          <div className="amount-row">
            <div>
              <p className="label">Order Amount</p>
              <p className="value">₹ 1270.00</p>
            </div>

            <div>
              <p className="label">Outstanding</p>
              <p className="value">₹ 0.00</p>
            </div>
          </div>

          <div className="date-row">
            <p>Inv Date: 12 Nov 2025</p>
            <p>Due Date: 19 Nov 2025</p>
          </div>

          <div className="file-btns">
            <button className="pdf-btn">
              <FaFilePdf /> PDF
            </button>
            <button className="xls-btn">
              <FaFileExcel /> XLS
            </button>
          </div>
        </div>

        {/* LINKED TRANSACTIONS */}
        <div className="section">
          <h3>Linked Transactions (1)</h3>

          <div className="transaction-card">
            <div>
              <p className="txn-id">CL07840708</p>
              <span className="success-tag">SUCCESS</span>
              <p className="txn-type">Rio Pay</p>
            </div>

            <div className="txn-right">
              <p className="txn-amount">₹ 1270.0</p>
              <FaChevronRight />
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div className="section">
          <h3>Items in this Invoice (3)</h3>

          {/* ITEM 1 */}
          <div className="item-card">
            <p className="item-title">CORTEL 40MG - 15 TAB</p>
            <div className="item-row">
              <span>PTR: 51.2</span>
              <span className="qty">Qty: 2</span>
              <span>Free Qty: 0</span>
            </div>
            <p className="scheme">Scheme: --</p>
            <div className="item-row">
              <span>Batch: 02250725</span>
              <span>Expiry: 28 Jun 2027</span>
            </div>
            <p className="net-value">Net Value: ₹102.4</p>
          </div>

          {/* ITEM 2 */}
          <div className="item-card">
            <p className="item-title">CRESTOR 40MG - 15 TAB</p>
            <div className="item-row">
              <span>PTR: 802.86</span>
              <span className="qty">Qty: 1</span>
              <span>Free Qty: 0</span>
            </div>
            <p className="scheme">Scheme: --</p>
            <div className="item-row">
              <span>Batch: CF2407</span>
              <span>Expiry: 29 May 2027</span>
            </div>
            <p className="net-value">Net Value: ₹802.86</p>
          </div>

          {/* ITEM 3 */}
          <div className="item-card">
            <p className="item-title">
              SINAREST DELICIOUS ROSE FLAVOUR BOTTLE OF 75ML
            </p>
            <div className="item-row">
              <span>PTR: 104.99</span>
              <span className="qty">Qty: 4</span>
              <span>Free Qty: 0</span>
            </div>
            <p className="scheme">Scheme: 4 + 12.50%</p>
            <div className="item-row">
              <span>Batch: GA832</span>
              <span>Expiry: 28 Jun 2028</span>
            </div>
            <p className="net-value">Net Value: ₹419.96</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
