import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

AOS.init();

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#e0f7fa] flex flex-col justify-center items-center text-center px-4">
      {/* Heading */}
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00bcd4] to-[#ff80ab]"
        data-aos="fade-down"
      >
        Talent Hunt 2025
      </h1>

      {/* Sub Text */}
      <p
        className="text-md md:text-xl text-gray-700 max-w-xl mb-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Designers. Writers. Influencers. Strategists.<br />
        Let your creativity flow like water. Shine like a drop in the sun.
      </p>

      {/* CTA */}
      <Link to="/apply">
        <button
          className="mt-4 bg-[#00bcd4] hover:bg-[#26c6da] text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <FaRocket className="inline-block mr-2" />
          Apply Now
        </button>
      </Link>

      {/* Scroll Indicator */}
      <div className="mt-12 animate-bounce text-gray-600 text-sm" data-aos="fade-up" data-aos-delay="700">
        Scroll down ↓
      </div>
    </div>
  );
};

export default Home;
