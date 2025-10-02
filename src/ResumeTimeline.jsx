import React from "react";
import PresentoImage from './assets/Presento.png'
import ProfileImage from './assets/profile.svg'

export default function Resume() {
  return (
    <section id="resume" className="bg-[#0F0715] py-20 text-white">
      <div className="max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#8750F7] max-md:px-10 mb-12">Recent Projects</h2>

      {/* Project Card */}
      <div className="bg-[#1a1329] rounded-2xl p-10 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-[#8750F7] text-sm mb-2">Social Website</p>
            <h3 className="text-3xl font-bold mb-4">Presento</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Project was about precision and information. That’s all. I
              help clients achieve their marketing target
              create website that’s appealing.
            </p>

            {/* Tags */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 duration-300 transition">
                Branding
              </span>
              <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 duration-300 transition">
                Graphic Design
              </span>
              <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 duration-300 transition">
                User Stories
              </span>
            </div>

            {/* Testimonial */}
            <blockquote className="italic text-gray-300 mb-6">
              “The service was excellent. Template example is the next killer app.”
            </blockquote>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={ProfileImage}
              alt="author"
              className="w-10 h-10 rounded-full "
            />
            <div>
              <p className="font-semibold text-white">Tahir Zayd</p>
              <p className="text-sm text-gray-400">Web Developer</p>
            </div>
          </div>
        </div>

        {/* Right Image Preview */}
        <div className="md:flex bg-gray-800 p-4 rounded-xl justify-center md:space-x-6 items-center">
          <div className="shadow-lg">
            <img
              src={PresentoImage}
              alt="Project Preview"
              className=" h-[500px] w-full object-cover"
            />
          </div>
          <div className="shadow-lg max-md:hidden">
            <img
              src={PresentoImage}
              alt="Project Preview"
              className=" h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
