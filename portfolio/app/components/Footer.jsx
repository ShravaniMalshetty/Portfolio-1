import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import icons to prevent SSR issues
const FaInstagram = dynamic(() => import('react-icons/fa').then((mod) => mod.FaInstagram), { ssr: false });
const FaLinkedin = dynamic(() => import('react-icons/fa').then((mod) => mod.FaLinkedin), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then((mod) => mod.FaTwitter), { ssr: false });

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      {/* Logo Section */}
      <div className="text-center">
        <Image
          src={isDarkMode ? "/assets/logo_dark.png" : "/assets/logo.png"}
          alt=" "
          width={1}
          height={1}
          className="w-36 mx-auto mb-2"
        />

        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? "/assets/main_icon_dark.png" : "/assets/main_icon.png"}
            alt=" "
            width={1}
            height={1}
            className="w-6"
          />
          shravanimalshetty@gmail.com
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center border-t border-gray-400 mx-[10%] mt-12 py-6 space-y-4 sm:space-y-0">
        {/* Social Links */}
        <ul className="flex items-center justify-center gap-6">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/pand.a18923"
            >
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shravani-malshetty-a7a948276/"
            >
              <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-700" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/MalshettyS"
            >
              <FaTwitter className="text-2xl text-blue-400 hover:text-blue-500" />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-center sm:text-right text-sm text-gray-600">
          © 2025 Shravani Malshetty. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
