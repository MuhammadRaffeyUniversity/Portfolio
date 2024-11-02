/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <nav className="fixed flex justify-center gap-8 bg-blue-700 bg-opacity-75 p-4 top-0 w-full z-10 border-4 border-gray-600 rounded-lg">
      <a href="#home" className="text-white font-bold text-2xl">
        Home
      </a>
      <a href="#about" className="text-white font-bold text-2xl">
        About
      </a>
      <a href="#portfolio" className="text-white font-bold text-2xl">
        Portfolio
      </a>
      <a href="#footer" className="text-white font-bold text-2xl">
        Contact
      </a>
    </nav>
  );
};

export default Header;
