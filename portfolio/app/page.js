'use client'

import React, { useState, useEffect } from 'react';  // Import React hooks
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from './components/Work';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const [isClient, setIsClient] = useState(false); // Flag to track if we are on the client side

  // UseEffect for initializing dark mode based on localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) 
      && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
      setIsDarkMode(true);  // Set to dark mode if stored in localStorage or system preference
    } else {
      setIsDarkMode(false); // Set to light mode otherwise
    }
  }, []);

  // UseEffect for applying dark mode on the client side and updating localStorage
  useEffect(() => {
    // Set isClient to true once the component is mounted on the client side
    setIsClient(true);

    // Handle dark mode only on the client side
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';  // Store dark mode in localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';  // Remove dark mode from localStorage
    }
  }, [isDarkMode]);

  // Return nothing during SSR (Server-Side Rendering) until component is mounted on the client
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
