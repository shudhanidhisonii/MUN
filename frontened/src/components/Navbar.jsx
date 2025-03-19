import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-20 transition-all duration-500 px-8 h-19 ${
        scrolled ? 'bg-[#062045] bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Left Section */}
      <div className="navbar-start gap-4 flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu Items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-black bg-opacity-80 rounded-box text-white"
          >
            <li><a href="/"className="hover:text-gray-400">Home</a></li>
            <li><a href="/committee" className="hover:text-gray-400">Committees</a></li>
            <li><a href="/Gallery" className="hover:text-gray-400">Gallery</a></li>
            <li><a className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png" // From public folder
            alt="Logo"
            className="h-35 w-auto object-contain"
          />
        </div>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-white font-medium text-base">
          <li><a href="/" className="hover:text-gray-300 cursor-pointer">Home</a></li>
          <li><a href="/committee" className="hover:text-gray-300 cursor-pointer">Committees</a></li>
          <li><a href="/Gallery"className="hover:text-gray-300 cursor-pointer">Gallery</a></li>
          <li><a href="/FAQs" className="hover:text-gray-300 cursor-pointer">FAQs</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        <a
          href="#register"
          className="btn bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 duration-300 font-semibold"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
