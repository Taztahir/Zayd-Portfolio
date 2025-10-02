import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaDribbble, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#0f0715] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center border-1 border-[#2A1454] p-10 rounded-2xl md:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s work <span className="text-[#8750F7]">together!</span>
          </h2>
          <p className="text-gray-300 mb-8">
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>
          <form className="space-y-6" action="https://formsubmit.co/taztaz162004@gmail.com" method="post">
            <div>
              <input
                type="text"
                name="First name"
                required
                placeholder="First name"
                className="w-full bg-transparent border-b px-3 border-gray-600 focus:border-[#8750F7] outline-none py-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="Last Name"
                required
                placeholder="Last name"
                className="w-full bg-transparent border-b px-3 border-gray-600 focus:border-[#8750F7] outline-none py-2"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent border-b px-3 border-gray-600 focus:border-[#8750F7] outline-none py-2"
              />
            </div>
            <div>
              <input
                type="number"
                name="tel"
                required
                placeholder="Phone number"
                className="w-full bg-transparent border-b px-3 border-gray-600 focus:border-[#8750F7] outline-none py-2"
              />
            </div>
            <div>
              <textarea
              required
              name="message"
                placeholder="Message"
                className="w-full bg-transparent border-b px-3 border-gray-600 focus:border-[#8750F7] outline-none py-2 h-28"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8750F7] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-[#8750F7] transition flex items-center gap-2"
            >
              Send Message ↗
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-300">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
          </p>

          <div className="space-y-4">
            <p className="font-medium hover:text-[#8750F7] transition cursor-pointer">
              +234 906 0720 810
            </p>
            <p className="font-medium hover:text-[#8750F7] transition cursor-pointer">
              taztaz162004@gmail.com
            </p>
            <p className="font-medium hover:text-[#8750F7] transition cursor-pointer">
              Lagos, Ng
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://x.com/taz1393177"
              className="text-2xl hover:text-[#8750F7]"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Taztahir"
              className="text-2xl hover:text-[#8750F7]"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://wa.me/2349060720810"
              className="text-2xl hover:text-[#8750F7]"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-2xl hover:text-[#8750F7]"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
