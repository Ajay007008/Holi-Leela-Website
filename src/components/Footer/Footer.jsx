import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';



const Footer = () => {
  return (
     <footer className=" flex flex-col  shadow-[0_0_2px_0_rgba(0,0,0,0.15)]">
       <div className="py-7  bg-grey-1800 flex-grow">
         <motion.div
             initial={{ opacity: 0, y:50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3 }} 
             className="container">
              
              
              
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
                    
                    
                    
                     {/* first section */}
                        
                        <div> 
                            <h1 className="text-lg font-bold">Bring Home the Colors of Joy!✨</h1>
                            <p className="text-grey-100 text-sm">At Holi Leela, we make your Holi celebrations<br></br> brighter and 
                            happier with premium organic gulal, <br></br>vibrant pichkaris, festive sweets, and joyful deals.<br></br> 
                            Let's spread love, laughter, and colors this Holi!</p>
                        </div>






                     {/* second section */}

                        <div className="grid grid-cols-2 gap-10">
                             <div className="space-y-2">
                                <h1 className="text-lg font-bold">Shop By Category</h1>
                                 
                             <div className="text-grey-100"> 
                                 <ul className="space-y-0 text-sm">
                                     <li className="cursor-pointer hover:text-secondary duration-200">Organic Colors 🌿</li>
                                     <li className="cursor-pointer hover:text-secondary duration-200">Pichkaris Guns💦</li>
                                     <li className="cursor-pointer hover:text-secondary duration-200">Festive Outfits👕</li>
                                     <li className="cursor-pointer hover:text-secondary duration-200">Holi Special Sweets 🍬</li>
                                 </ul>
                                 </div>    
                             </div>



                             <div className="space-y-2">
                                <h1 className="text-xl font-bold">Contact Us</h1>
                                  <div className="text-grey-100">
                                    <ul className="space-y-0 text-xs">
                                        <li className="flex items-center space-x-2">Email: <a href="mailto:ajay007008@gmail.com" className="hover:text-secondary duration-200">ajay007008@gmail.com</a></li>
                                        <li>Phone: <a href="tel:8604170xxx" className="hover:text-secondary duration-200">8604170358</a></li>
                                        <li>Address: w3viila noida-59</li>
                                    </ul>
                                </div>
                            </div>



                        </div>




                     {/* third section */}


                           <div className="space-y-4 max-w-[300px] ml-">
                             <h1 className="text-xl font-bold">Subscribe Newsletter</h1>
                             
                             <div className="flex items-center">
                                <input type="text"
                                  placeholder="Enter your email"
                                  className="p-3 rounded-s-xl bg-white w-full
                                   py-4 focus:ring-0 focus:outline-none
                                   placeholder:text-grey-100"/>
                                   
                                   <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                                   
                                   </div> 


                            {/* social icons */}
                           <div className="flex space-x-4 py-1 ml-2"><a href="#"><FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/> </a>
                        
                        
                            <a href="#"> <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                            </a>
                        
                        
                            <a href="#">  <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                            </a>
                        
                        
                            <a href="#"> <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                            </a>
                     </div>





                           </div>




               </div>
               
         

             </motion.div>
             </div>


             {/* We have Added Copyright Notice this section */}
         <div className="bg-gray-300 text-center py-3   ">
             <p className="text-white text-sm font-semibold">Developed By Ajay Singh</p>
         </div>



     </footer>
  )
}

export default Footer