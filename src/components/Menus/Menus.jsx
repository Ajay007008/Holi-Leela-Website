import React from 'react'

import Product1 from "../../assets/product-photo/ProductPic1.png"
import Product2 from "../../assets/product-photo/ProductPic2.png"
import Product3 from "../../assets/product-photo/ProductPic3.png"
import Product4 from "../../assets/product-photo/ProductPic4.png"
import Product5 from "../../assets/product-photo/ProductPic5.png"
import Product6 from "../../assets/product-photo/ProductPic6.png"
import Product7 from "../../assets/product-photo/ProductPic7.png"
import Product8 from "../../assets/product-photo/ProductPic8.png"
import Product9 from "../../assets/product-photo/ProductPic9.png"


import { AnimatePresence,motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'

const MenusData = [
   {
    id: 1,
    title: "Badaam Thandai",
    link: "/",
    price: "₹250",
    img: Product1,
    delay: 0.3,
   },

   {
    id: 2,
    title: "Holi Goodies",
    link: "/",
    price: "₹ 450",
    img: Product2,
    delay: 0.6,
   },

   {
    id: 3,
    title: "Jamuni Jashn",
    link: "/",
    price: "₹320",
    img: Product3,
    delay: 0.9,
   },


   {
    id: 4,
    title: "Sweet Gujiya",
    link: "/",
    price: "₹560",
    img: Product4,
    delay: 1.2,
   },

   {
    id: 5,
    title: "Holi Pichkari",
    link: "/",
    price: "₹1560",
    img: Product5,
    delay: 1.5,
   },

   {
    id: 6,
    title: "Organic Gulal",
    link: "/",
    price: "₹560",
    img: Product6,
    delay: 1.8,
   },

   {
    id: 7,
    title: "Gold Gulal",
    link: "/",
    price: "₹560",
    img: Product7,
    delay: 2.1,
   },

   {
    id: 8,
    title: "Holi Gulal Ball",
    link: "/",
    price: "₹960",
    img: Product8,
    delay: 2.4,
   },

   {
    id: 9,
    title: "Mithai Gift Box",
    link: "/",
    price: "₹1960",
    img: Product9,
    delay: 2.7,
   },
];



const Menus = () => {
  return(
    <section>
         <div className="container pt-12 pb-20">
    
            {/* Added Animation to menu h1 */}
             <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 1, delay: 0.3 }} 
               className="text-2xl font-bold text-left pb-10 uppercase">Our Menu</motion.h1>
              
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {MenusData.map((menu) => (
            <motion.div 
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView={ "visible" }
                whileHover={{ scale: 1.1 }}     
                                       className="bg-white rounded-3xl px-4 py-2 
                                       shadow-[0_0_22px_0_rgba(0,0,0,0.15)]
                                       flex flex-row
                                       justify-around items-center gap-3">
                        <img 
                           src={ menu.img}
                           alt=""
                           className="w-[60px] mb-4 scale-150 transform-translate-y-6"/>
                         <div> 
                        <h1 className="text-lg font-semibold">{menu.title}</h1>


                      {/*Added flex container for price and button */}  
                      <div className="flex items-center gap-2"> 
                      <p className="text-lg font-semibold text-secondary">{menu.price}</p>   
                      <button className="text-sm px-2 py-1 bg-primary text-white rounded-md hover:bg-secondary transition">Buy Now</button> 
                      </div>
                    
                      
                        
                    </div>      
                     
                     </motion.div>                              
                 ))}
             </div>
         </div>
    </section>
  )
}

export default Menus