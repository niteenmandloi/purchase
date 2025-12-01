import React from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Order from "./pages/Order";
<<<<<<< HEAD
import Home from './pages/Home.jsx';

=======
import Home from './pages/Home';
import Header from './components/Header';
>>>>>>> eb2f9c940cd1ad4937cc45d5b715ea3abeb57807
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />   {/* <-- Path for navigate */}
      </Routes>
      <Header/>
      <Footer/>

    </div>
  )
}

export default App