import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Profile from "./assets/profile.svg";

const FloatingShape = ({ color, size, top, left, delay, rotate }) => (
  <motion.div
    className={`absolute border-[3px] border-black shadow-brutal ${color} ${size}`}
    initial={{ y: 0, rotate: rotate }}
    animate={{
      y: [0, -20, 0],
      rotate: [rotate, rotate + 10, rotate - 10, rotate]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    style={{ top, left }}
  />
);

export default function Header() {
  const socialLinks = [
    { icon: Twitter, url: "https://x.com/taz1393177", color: "bg-cyan-vivid" },
    { icon: Linkedin, url: "https://linkedin.com/in/yourusername", color: "bg-primary" },
    { icon: Github, url: "https://github.com/Taztahir", color: "bg-accent" },
    { icon: FaWhatsapp, url: "https://wa.me/2349060720810", color: "bg-secondary" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden bg-white"
      style={{ backgroundImage: "radial-gradient(black 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape color="bg-primary" size="w-12 h-12 md:w-16 md:h-16" top="15%" left="5%" delay={0} rotate={12} />
        <FloatingShape color="bg-secondary" size="w-16 h-16 md:w-24 md:h-24 rounded-full" top="65%" left="8%" delay={1} rotate={0} />
        <FloatingShape color="bg-accent" size="w-14 h-14 md:w-20 md:h-20" top="20%" left="85%" delay={2} rotate={-15} />
        <FloatingShape color="bg-cyan-vivid" size="w-10 h-10 md:w-12 md:h-12 rotate-45" top="75%" left="90%" delay={1.5} rotate={45} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-accent px-4 py-1 border-[3px] border-black shadow-brutal font-black uppercase mb-6 text-sm md:text-base"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Full Stack Developer & Tutor
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase leading-none mb-8 break-words">
            I BUILD <br />
            <span className="text-white bg-black px-2 md:px-4 shadow-[5px_5px_0px_0px_#FF006E] md:shadow-[8px_8px_0px_0px_#FF006E]">CRAZY</span> <br />
            <span className="text-secondary">INTERFACES</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold mb-10 max-w-xl leading-relaxed">
            I design and code beautifully clashing things and I love what I do.
            Taking <span className="underline decoration-secondary decoration-4">Brutalism</span> to the next level.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-btn bg-primary text-black flex items-center space-x-3"
            >
              <span>Hire me now</span>
              <ArrowRight size={24} />
            </motion.a>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, color }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-[3px] border-black p-4 shadow-brutal transition-all ${color} hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px]`}
                  whileHover={{ rotate: idx % 2 === 0 ? 10 : -10 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile / Image Group */}
        <motion.div
          className="relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 border-[5px] border-black shadow-brutal-lg bg-white overflow-hidden aspect-square max-w-[500px] mx-auto group">
            <motion.img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Floating decoration in the image area */}
          <motion.div
            className="absolute -top-10 -right-10 bg-cyan-vivid p-6 border-[3px] border-black shadow-brutal transform rotate-12 z-20"
            animate={{ rotate: [12, 15, 12], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="font-black text-2xl uppercase">100% Bold</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

