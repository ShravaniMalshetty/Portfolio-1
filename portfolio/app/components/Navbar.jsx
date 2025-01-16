'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Manage mobile menu state

  // Open mobile menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll events for background changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image 
          src="/assets/header-bg-color.png" 
          alt=" " 
          className="object-cover w-full h-full" 
          layout="fill" 
        />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <a href="#top">
          <Image
            src={isDarkMode ? "/assets/logo_dark.png" : "/assets/logo.png"}
            alt=" "
            width={112}
            height={28}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent '}`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Dark mode toggle and Contact button */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? "/assets/sun-icon.png" : "/assets/moon-icon.png"}
              alt=" "
              width={20}
              height={20}
              className="w-5"
            />
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full hover:bg-gray-200 font-Ovo dark:border-white/50 ">
            Contact
            <Image src={isDarkMode ? "/assets/arrow-icon-white.png" : "/assets/arrow-icon.png"} alt=" " width={12} height={12} className="w-3"/>
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image 
              src={isDarkMode ? "/assets/menu-white.png" : "/assets/menu-black.png"} 
              alt=" "
              width={24} 
              height={24} 
              className="w-6"
            />
          </button>
        </div>

        {/* -- Mobile Menu -- */}
        <ul 
          className={`fixed top-0 right-0 w-64 h-screen z-50 bg-rose-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} dark:bg-darkHover dark:text-white py-20 px-10`}>
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image 
              src="/assets/close-black.png" 
              alt=" "
              width={24}
              height={24}
              className="w-6"
            />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;


