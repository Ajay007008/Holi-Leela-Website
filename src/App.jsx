
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero  from './components/HeroSection/Hero';
import Menus from './components/Menus/Menus';
import Testimonials from './components/Testimonials/Testimonials';
import Slides from './components/Slider/Slides';

const App = () => {
  return (
    <>
     <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Slides/>
      <Menus/>
      <Testimonials/>
     </main>
     
    </>
  )
};

export default App; 