import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Order";


export default function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/orders" element={<Orders />} />


      </Routes>
   
  );
}