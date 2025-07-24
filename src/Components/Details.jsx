import React from 'react';
import { FaPaintBrush, FaPenFancy, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 800,
    once: true,
});

const categories = [
  {
    icon: <FaPaintBrush size={35} className="text-cyan-500" />,
    title: 'Designers',
    desc: 'Creative minds for visual branding, UI/UX, illustrations, and motion design.',
  },
  {
    icon: <FaPenFancy size={35} className="text-cyan-500" />,
    title: 'Writers',
    desc: 'Wordsmiths for blog posts, ad copy, storytelling, and scripts.',
  },
  {
    icon: <FaLightbulb size={35} className="text-cyan-500" />,
    title: 'Strategists',
    desc: 'Marketing brains who plan, analyze, and craft impactful campaigns.',
  },
  {
    icon: <FaUserFriends size={35} className="text-cyan-500" />,
    title: 'Influencers',
    desc: 'Social trendsetters with presence on Instagram, YouTube, or TikTok.',
  },
];

const Details = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 px-4 py-12 flex flex-col items-center">
      {/* Header */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-700 mb-6 text-center"
        data-aos="fade-down"
      >
        About the Talent Hunt
      </h2>

      {/* Overview */}
      <p
        className="max-w-4xl text-gray-700 text-lg sm:text-xl text-center mb-16 px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Talent Hunt is a launchpad for creativity. We’re seeking passionate individuals
        with bold ideas to fuel our marketing revolution. Whether you're a designer, writer, strategist, or influencer—this is your platform to excel.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-200/50 hover:-translate-y-2 transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-teal-700">{cat.title}</h3>
              <p className="text-gray-600 mt-3 text-base">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;