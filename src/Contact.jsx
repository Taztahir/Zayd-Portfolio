import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const InfoItem = ({ icon: Icon, label, value }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-center gap-4 p-4 border-[3px] border-black bg-white shadow-brutal"
  >
    <div className="bg-primary p-3 border-[2px] border-black">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs font-black uppercase text-gray-500">{label}</p>
      <p className="text-xl font-black uppercase">{value}</p>
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            className="text-4xl sm:text-6xl md:text-9xl font-black uppercase leading-none"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            LET'S <br /> <span className="text-secondary">COLLABORATE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="brutal-card p-8 bg-cyan-vivid/5"
          >
            <div className="bg-black text-white px-4 py-2 font-black uppercase mb-8 inline-block rotate-[-2deg]">
              Mission Briefing
            </div>

            <form className="space-y-6" action="https://formsubmit.co/taztaz162004@gmail.com" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="First name"
                  required
                  placeholder="FIRST NAME"
                  className="brutal-input focus:bg-primary/20"
                />
                <input
                  type="text"
                  name="Last Name"
                  required
                  placeholder="LAST NAME"
                  className="brutal-input focus:bg-secondary/20"
                />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="EMAIL ADDRESS"
                className="brutal-input focus:bg-accent/20"
              />
              <input
                type="tel"
                name="tel"
                required
                placeholder="PHONE NUMBER"
                className="brutal-input focus:bg-cyan-vivid/20"
              />
              <textarea
                required
                name="message"
                placeholder="TELL ME ABOUT YOUR PROJECT"
                className="brutal-input h-40 focus:bg-primary/20"
              />

              <motion.button
                whileHover={{ scale: 1.02, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full brutal-btn bg-black text-white text-2xl flex items-center justify-center gap-4 py-6"
              >
                SEND MESSAGE <Send size={28} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Info */}
          <div className="flex flex-col gap-8">
            <div className="text-3xl font-black uppercase leading-tight mb-4">
              "Available for <span className="bg-accent px-2">world-changing</span> full stack projects."
            </div>

            <div className="grid grid-cols-1 gap-6">
              <InfoItem icon={Phone} label="Call Me" value="+234 906 0720 810" />
              <InfoItem icon={Mail} label="Email Me" value="taz@zayd.dev" />
              <InfoItem icon={MapPin} label="Location" value="Lagos, Nigeria" />
            </div>

            <div className="mt-8">
              <p className="font-black uppercase text-sm mb-6">Connect across the void:</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaTwitter, url: "https://x.com/taz1393177", color: "bg-cyan-vivid" },
                  { icon: FaGithub, url: "https://github.com/Taztahir", color: "bg-white" },
                  { icon: FaWhatsapp, url: "https://wa.me/2349060720810", color: "bg-accent" },
                  { icon: FaLinkedin, url: "#", color: "bg-primary" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    whileHover={{ y: -5, rotate: i % 2 === 0 ? 10 : -10 }}
                    className={`p-5 border-[3px] border-black shadow-brutal ${social.color}`}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Decoration */}
            <motion.div
              className="mt-auto hidden lg:block bg-secondary p-8 border-[3px] border-black shadow-brutal rotate-3"
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="text-4xl font-black text-white uppercase italic">
                Let's Make <br /> History.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
