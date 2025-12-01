import React from 'react'
import "./BrandTarget.css";
import { FaCircle } from "react-icons/fa";
const Section = () => {
  return (
    <div className="brand-page">

      {/* Banner */}
      <div className="brand-banner">
        Important Brand Target Nov’25
      </div>

      {/* Table */}
      <div className="brand-table">
        <div className="table-row table-head">
          <span>Brand</span>
          <span>Target</span>
          <span>Achievement</span>
          <span>%</span>
        </div>

        <div className="table-row">
          <span>GSK</span>
          <span>16472</span>
          <span>1312.47</span>
          <span>8.95%</span>
        </div>

        <div className="table-row">
          <span>DR REDDY</span>
          <span>16472</span>
          <span>662.24</span>
          <span>7.19%</span>
        </div>

        <div className="table-row">
          <span>MANKIND</span>
          <span>16472</span>
          <span>8554.67</span>
          <span>18.83%</span>
        </div>

        <div className="table-row">
          <span>CIPLA</span>
          <span>16472</span>
          <span>2656.99</span>
          <span>4.70%</span>
        </div>
      </div>

      {/* Total Sales */}
      <h3 className="section-title">Total Sales</h3>

      {/* Tabs */}
      <div className="tabs2">
        <button className="active">Regular Retailers</button>
        <button>Irregular Retailers</button>
      </div>

      {/* Sub tabs */}
      <div className="sub-tabs">
        <span>Regular Not Billed</span>
        <span>Irregular Not Billed</span>
      </div>

      {/* Chips */}
      <div className="chips">
        <span>TrueCure, LivEasy</span>
      </div>

      {/* Retailers Section */}
      <div className="retailer-boxes">
        <div className="retailer-card">
          <p className="ret-title">Power Retailers</p>
          <span className="ret-sub">Power Retailers</span>
        </div>

        <div className="retailer-card">
          <p className="ret-title">Power Retailer</p>
          <span className="ret-sub">1k pending</span>
        </div>
      </div>

      {/* Banners */}
      <div className="promo-image">

      </div>
      <div className="promo-image2">
        
      </div>

    </div>
  )
}

export default Section