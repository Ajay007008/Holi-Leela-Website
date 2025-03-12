import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HoliPlatePng from "../../assets/holi-plate.png"

import { motion } from 'framer-motion'
import { FadeRight } from '../../utility/animation'


const Hero = () => {
  return <section>
     <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">



        {/* Brand Info */}
       <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div className="text-center md:text-left space-y-6 lg:max-w-[450px]"> 
            <motion.h1
               variants={FadeRight(0.6)}
               initial="hidden"
               animate="visible"
               className="text-5xl lg:text-6xl font-bold leading relaxed xl:leading loose font-averia">
            Rangon Ka<br/>
            Tyohaar,  <span className="text-secondary">Khushiyon Ke Saath!</span></motion.h1>
        
            <motion.p
                  variants={FadeRight(0.9)}
                  initial="hidden"
                  animate="visible" 
                className="text-2xl tracking-wide">
            Is Holi, Apno Ko Rangon Mein Rang Do</motion.p>
       
             
            <motion.p
                   variants={FadeRight(1.2)}
                   initial="hidden"
                   animate="visible"
                 className="text-gray-400">Celebrate the festival of colors with love and laughter. Shop for gulal, sweets, and festive essentials—bring home the spirit of Holi with special discounts and joyful deals!</motion.p>


        {/* Button Section */}
             <motion.div 
                    variants={FadeRight(1.5)}
                    initial="hidden"
                    animate="visible"    
             className="flex justify-center md:justify-start">
             <button className="primary-btn flex items-center gap-2">
               <span><IoBagHandleOutline/></span>Order Now</button>
        </motion.div>
        
        </div>
        </div> 


        {/* Hero Images */}
        <div className="flex justify-center items-center">
              <motion.img 
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
              src={HoliPlatePng} alt=" "  className="w-[350px] md:w-[550px] drop-shadow" />
        </div>





     </div>
  </section>
}

export default Hero