import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#062045] text-white py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        
        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="text-sm space-y-1">
            
            <li><a href="/Committee" className="hover:text-gray-400">Committees</a></li>
            <li><a href="/Prizes" className="hover:text-gray-400">Prizes</a></li>
            <li><a href="/gallery" className="hover:text-gray-400">Gallery</a></li>
            <li><a href="/faqs" className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm flex items-center space-x-2">📍 <span>KIET Group of Institutions, Ghaziabad</span></p>
          <p className="text-sm flex items-center space-x-2 mt-1">📧 <a href="mailto:contact@kietmun.com" className="hover:text-gray-400">kietmun@kiet.edu</a></p>
          <p className="text-sm flex items-center space-x-2 mt-1">📞 <a href="tel:+918303220540" className="hover:text-gray-400">+91 8303220540</a></p>
          <p className="text-sm flex items-center space-x-2 mt-1">📞 <a href="tel:+917017712755" className="hover:text-gray-400">+91 7017712755</a></p>
        </div>

        {/* Socials & Register Button */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 text-2xl">
            <a href="https://www.instagram.com/kiet_mun?igsh=MWsxNDRudnZpaHEyMw==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/kiet-mun-society/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1Y6C8EN5pW/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook />
            </a>
          </div>
          <a href="/register" className="mt-4">
            <button className="bg-[#9a7e2f] px-5 py-2.5 rounded-lg text-white text-sm font-medium hover:bg-[#846b26] transition duration-300">
              Register
            </button>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-xs text-gray-300">
        © 2025 KIET MUN. All Rights Reserved.
        <p className="text-gray-400 text-sm mt-2">
        Made with ❤️ by 

       

        <a href="/Team" className="text-white hover:underline ml-1">

          KIET MUN Tech Team
        </a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;
