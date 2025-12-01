import React from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Order from "./pages/Order";
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />   {/* <-- Path for navigate */}
      </Routes>
      <Footer/>

    </div>
  )
}

export default App