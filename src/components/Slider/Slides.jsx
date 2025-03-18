

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// Importing images from the local folder
import image1 from "../../assets/SliderCarousel/slide1.png";
import image2 from "../../assets/SliderCarousel/slide2.jpg";

function App() {
  // Replacing URLs with locally imported images
  const slides = [
    { url: image1 },
    { url: image2 },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="slides">
    <div className='max-w-[1100px] h-[680px] w-full m-auto py-16 px-4 relative group '>
     
     {/* Adding image in Slider and maaking Slider Responsive */}
      <div 
         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
         
         className='w-full h-full rounded-2xl bg-center 
          bg-cover duration-500  shadow-black/30
            sm:bg-contain sm:bg-no-repeat sm:bg-center'>
              
       </div>
     
     
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} /></div>
     
     
     
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} /></div>
     
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default App;
