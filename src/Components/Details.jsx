import React from 'react';
import { FaPaintBrush, FaPenFancy, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const categories = [
  {
    icon: <FaPaintBrush size={30} className="text-[#00bcd4]" />,
    title: 'Designers',
    desc: 'Creative minds for visual branding, UI/UX, illustrations, and motion design.',
  },
  {
    icon: <FaPenFancy size={30} className="text-[#00bcd4]" />,
    title: 'Writers',
    desc: 'Wordsmiths for blog posts, ad copy, storytelling, and scripts.',
  },
  {
    icon: <FaLightbulb size={30} className="text-[#00bcd4]" />,
    title: 'Strategists',
    desc: 'Marketing brains who plan, analyze, and craft impactful campaigns.',
  },
  {
    icon: <FaUserFriends size={30} className="text-[#00bcd4]" />,
    title: 'Influencers',
    desc: 'Social trendsetters with presence on Instagram, YouTube, or TikTok.',
  },
];

const Details = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#e0f7fa] px-4 py-12 flex flex-col items-center">
      {/* Header */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00796b] mb-6 text-center"
        data-aos="fade-down"
      >
        About the Talent Hunt
      </h2>

      {/* Overview */}
      <p
        className="max-w-3xl text-gray-700 text-base sm:text-lg md:text-xl text-center mb-12 px-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Our Talent Hunt campaign is a celebration of creativity. We’re looking for individuals
        with passion, originality, and bold ideas to join our marketing movement.
        Whether you're a designer, writer, strategist, or influencer — this is your time to shine.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-2xl transition-all"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-[#00796b]">{cat.title}</h3>
              <p className="text-gray-600 mt-2">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
