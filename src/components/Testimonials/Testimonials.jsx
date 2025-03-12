import React from 'react'
import TestimonialsPng from "../../assets/Testimonials.png"

import { motion } from 'framer-motion';
import { FadeUp } from "../../utility/animation";
const Testimonials = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-o py-0">
            
            {/* Testimonials Image */}
            <div className="flex-justify-center items-center">
            <img src={TestimonialsPng} alt="" className="w-[300px] md:max-w-[400px] h-full object-cover" />
            </div>
 
 


            {/* Testimonials Details */}
            <div className= "flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">  
              <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl font-bold uppercase"> 
                {" "}
                Testimonials</motion.h1>
              
              
              
                <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        "I loved the vibrant colors and quick delivery! My Holi celebrations were brighter than ever. The organic gulal was safe and skin-friendly—totally worth it!" 🎨
                        <br />
                        <strong>– PRIYA SHARMA</strong>
                    </motion.p>

                    <motion.p
                        variants={FadeUp(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        💚 "Amazing deals and a fantastic collection! I ordered a Holi gift pack, and it was beautifully packaged. My family loved it!" 💚
                        <br />
                        <strong>– RAHUL VERMA</strong>
                    </motion.p>

              {/* Button Section
                           <motion.div 
                                  variants={FadeUp(1.5)}
                                  initial="hidden"
                                  animate="visible"    
                           className="flex justify-evenly md:justify-start">
                      <button className="primary-btn ">More</button>
                      </motion.div> */}

            </div>
</div>



        </div>
    </section>
  )
}

export default Testimonials    