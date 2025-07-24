import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-12 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#e0f7fa]">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl" data-aos="zoom-in">
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-xl animate-fade-in">
            🎉 Thank you for applying!<br />
            We’ll get back to you soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00796b] mb-6">
              Apply to Talent Hunt
            </h2>
            <form
              action="https://formsubmit.co/rathoredipanshu21@gmail.com"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-gray-700"
                data-aos="fade-up"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-gray-700"
                data-aos="fade-up"
                data-aos-delay="100"
              />

              {/* Portfolio/LinkedIn */}
              <input
                type="url"
                name="portfolio"
                placeholder="LinkedIn or Portfolio URL"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-gray-700"
                data-aos="fade-up"
                data-aos-delay="200"
              />

              {/* Category */}
              <select
                name="category"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-gray-700"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <option value="">Select Talent Category</option>
                <option value="Designer">Designer</option>
                <option value="Writer">Writer</option>
                <option value="Strategist">Strategist</option>
                <option value="Influencer">Influencer</option>
              </select>

              {/* Personal Pitch */}
              <textarea
                name="pitch"
                placeholder="Tell us about yourself in 2-3 lines"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-gray-700 resize-none"
                rows={4}
                data-aos="fade-up"
                data-aos-delay="400"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00bcd4] hover:bg-[#26c6da] text-white font-bold py-3 rounded-md transition-transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Apply;
