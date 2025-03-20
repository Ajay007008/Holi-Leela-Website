import React from 'react';


import holiIcon from "../../assets/holiIcon5.png"

// To allow scrolling
import { Link as ScrollLink } from 'react-scroll'; 



import {  MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

import { motion } from 'framer-motion';

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "slides" },
  { id: 3, title: "Products", link: "products" },
  { id: 4, title: "Contacts", link: "testimonials" },
  { id: 5, title: "Testimonials", link: "testimonials" },
];

const Navbar = ({ cartCount }) => {
   const[open,setOpen] = React.useState(false);
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white  z-50">
      <motion.div 
           initial={{ opacity: 0}}
           animate={{ opacity: 1}}
           transition={{ duration: 0.5, delay: 0.5}}
        className="container flex justify-between items-center py-4 md:pt-4">

        {/* Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Holi</p>
          <p className="text-secondary">Leela</p>
          <img src={holiIcon} alt="Holi Icon" className="w-6 h-6" /> 
        </div>


       {/* Search Bar Section - Added responsive search bar */}
       <div className="hidden md:flex items-center ml-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="border border-gray-300 rounded-lg px-4 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-primary" 
            />
          </div>




        {/* NavBar Various Menu Component Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1 text-gray-600">
          
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">

                
                  {menu.link.startsWith("/") ? (
                    <a href={menu.link} className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">
                      {menu.title}
                    </a>
                  ) : (
                    <ScrollLink 
                      to={menu.link} 
                      smooth={true} 
                      duration={800} 
                      className="cursor-pointer inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    >
                      {menu.title}
                    </ScrollLink>


                  )}

              </li>
            ))}





            

             {/* Shopping Cart Icon with Count Badge */}
            
             <div className="relative">
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300" aria-label="Shopping Cart">
                  <MdOutlineShoppingCart />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </ul>
        </div>




  
       
      </motion.div>
    </nav>
 
         

        

 {/* Mobile Menu Section */}
  
  
  {/*To Control whether the menu is open or closed. */}   
  <ResponsiveMenu open={open}/>

   
 
  </>


  );
};

export default Navbar;
