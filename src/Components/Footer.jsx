import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#e0f7fa] text-gray-800 mt-20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">EagleWeb</h4>
          <p className="text-sm">
            Launching Talent Hunt campaigns that bring out your creative best.
            Apply, showcase and shine with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-[#00bcd4]">Home</Link></li>
            <li><Link to="/details" className="hover:text-[#00bcd4]">Details</Link></li>
            <li><Link to="/apply" className="hover:text-[#00bcd4]">Apply</Link></li>
            <li><Link to="/contact" className="hover:text-[#00bcd4]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <FaPhone /> +91 89713 25861
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope /> eagleweb360@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} EagleWeb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
