import React from "react";
import { ArrowUpRight } from "lucide-react";
import StatsSection from "./StatsSection"; 
import AboutImage from './assets/about-1.png'
const AboutSection = () => {
  return (
    <section id="about" className="bg-[#0f0715] text-white py-0 px-6 sora">
      <div className="">
        <StatsSection />
      </div>
      {/* About Section */}
      <div className="max-w-6xl mx-auto lg:flex space-y-10 gap-10">
        
        {/* Left Card */}
        <div className="bg-[#12091c] border border-[#2A1454] rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="lg:text-4xl text-3xl font-extrabold leading-snug text-[#8750F7]">
              Achievements in my <br className="max-lg:hidden"/> professional life.
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Since beginning my journey as a freelance designer nearly 8 years ago, 
              I've done remote work for agencies, consulted for startups, and collaborated 
              with talented people to create digital products for both business and consumer use.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center px-6 py-3 w-fit duration-500 lg:rotate-4 hover:rotate-0 rounded-full bg-[#8750F7] text-white font-semibold hover:bg-purple-700 transition">
            Contact Me <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-[#12091c] border border-[#2A1454] lg:w-[1500px] rounded-2xl flex flex-col justify-between">
          <div className="p-10">
            <h3 className="text-xl font-semibold text-white">Interface Designer</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              As a UI designer, I work closely with clients to understand their 
              needs and goals for their software or website.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src={AboutImage}
              alt="UI Design Mockup"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AboutSection;
