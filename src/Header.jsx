import React from "react";
import { motion } from "framer-motion";
import { Twitter, Dribbble, Linkedin, Github } from "lucide-react";
import Profile from "./assets/profile.svg";

export default function Header() {
  return (
    <section
      id="hero"
      className="lg:h-screen sora flex items-center justify-center bg-[#0F0715] "
    >
      {/* Main Card */}
      <motion.div
        className="bg-[#140C1C] border border-[#2A1454] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 border border-[#2A1454] hover:border-[#8750F7] rotate-3 hover:rotate-0 duration-300 transition max-md:rotate-0 rounded-xl overflow-hidden h-60 w-60 md:w-80 md:h-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img src={Profile} alt="Profile" className="w-full h-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-[58px] sora leading-[69.6px] font-bold text-[#8750F7] mb-4">
            Hi, I am{" "}
            <span className="text-[#8750F7]">
              Web <br /> Developer
            </span>{" "}
            + Tutor <br /> 
          </h1>

          <p className="text-[#DDDDDD] sora text-[20px] mb-8 max-w-md">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8750F7] hover:bg-[#6c35d8] text-white px-6 py-3 rounded-full font-medium transition"
            >
              Hire me!
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Twitter, Dribbble, Linkedin, Github].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="border border-[#8750F7] p-3 text-[#8750F7] hover:text-white hover:bg-[#8750F7] transition duration-300 flex items-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
