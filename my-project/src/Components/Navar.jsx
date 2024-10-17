import { useState } from "react"
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from "../constants";
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
     };

     const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement) {
           const offset = -85;
           const elementPosition = targetElement.getBoundingClientRect().top;
           const offsetPosition = elementPosition + window.scrollY + offset;

           window.scrollTo({
             top: offsetPosition,
             behavior:"smooth",
           });
        }
        setIsMobileMenuOpen(false);
    };

        return (
            <div>
                <nav className="fixed left-0 right-0 top-0 z-50">
                    {/*Desktop Menu */}
                    <div className="mx-auto hidden  backdrop-blur-lg lg:flex">
                       <div className="flex justify-between items-center w-full h-20 px-5 text-white bg-black fixed">
                           <div>
                              <a href="#">
                                 <h1 className="text-5xl font-cursive italic text-purple-50">Portflio</h1>
                              </a>
                           </div>
                           <div>
                               <ul className = "flex items-center gap-4">
                                    {NAVIGATION_LINKS.map ((item, index) => (
                                        <li key={index} >
                                           <a className="px-4 cursor-pointer capitalize font-medium text-gray-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                             href={item.href} onClick = {(e) => handleLinkClick(e, item.href)}>
                                             {item.label}
                                           </a>
                                        </li>
                                    ))}
                               </ul>
                           </div>
                       </div>
                   </div>
                   {/*mobile menu*/}
                    <div className="rounded-lg backdrop-blur-md lg:hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <a href="#">
                                    <h1 className="text-3xl font-cursive italic text-purple-50">Portflio</h1>
                                </a>
                            </div>

                            <div className="flex items-center">
                                <button className="focus:outline-none lg:hidden " onClick = {toggleMobileMenu}>
                                    {isMobileMenuOpen ? (
                                        <FaTimes className="m-2 h-6 w-5"/>):
                                       (<FaBars className="m-2 h-6 w-5"/> )}
                                </button>
                            </div>
                         </div>
                         {isMobileMenuOpen && (
                            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md ">
                              {NAVIGATION_LINKS.map((item, index) => (
                                 <li key={index}>
                                    <a href={item.href} 
                                       className="block w-full text-lg  text-gray-500"
                                       onClick={(e) => handleLinkClick(e, item.href)}>
                                       {item.label} 
                                    </a>
                                </li>
                             ))}
                         </ul>)}
                    </div> 
                </nav>
            </div>
        );     
};

export default Navbar;