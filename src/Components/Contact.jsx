import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#e0f7fa] px-4 py-12 flex flex-col items-center text-center">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00796b] mb-10"
        data-aos="fade-down"
      >
        Contact Us
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-2">
        <div
          className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition"
          data-aos="zoom-in"
        >
          <FaPhoneAlt size={30} className="text-[#00bcd4] mx-auto mb-4" />
          <h4 className="font-semibold text-xl text-gray-700 mb-2">Call Us</h4>
          <p className="text-gray-600">+91 89713 25861</p>
          <p className="text-gray-600">+91 81470 04920</p>
        </div>

        <div
          className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaEnvelope size={30} className="text-[#00bcd4] mx-auto mb-4" />
          <h4 className="font-semibold text-xl text-gray-700 mb-2">Email</h4>
          <p className="text-gray-600">eagleweb360@gmail.com</p>
        </div>

        <div
          className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FaMapMarkerAlt size={30} className="text-[#00bcd4] mx-auto mb-4" />
          <h4 className="font-semibold text-xl text-gray-700 mb-2">Address</h4>
          <p className="text-gray-600">Bangalore, India</p>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="mt-12 w-full max-w-4xl rounded-xl overflow-hidden shadow-xl"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8889421463076!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDMuNiJF!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
