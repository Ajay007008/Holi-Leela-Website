import React, { useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Menus from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Slides from './components/Slider/Slides';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const [cartCount, setCartCount] = useState(0);  // State to manage cart count



  return (
    <Router>

      {/* To avoid horizontal scrolling */}
    <main className="overflow-x-hidden"> 

       {/* Pass cart count to Navbar */}
    <Navbar cartCount={cartCount} /> 


      <Routes>
        {/* Home page includes Hero and Menus */}
        <Route path="/" element={
          <>
            <Hero />
            <Slides />

             {/* Pass setCartCount to Menus */}

            <Menus setCartCount={setCartCount} /> {/* Menus included in Home Page */}
            
            <Testimonials />
          </>
        } />

        {/* Separate Menu Page */}
        <Route path="/menu" element={<Menus setCartCount={setCartCount} />} />

      </Routes>

      <Footer />
    </main>
  </Router>
  );
};

export default App;
