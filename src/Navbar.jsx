import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Download } from "lucide-react";


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },  
    { id: "project", label: "Project" },
    { id: "service", label: "Service" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }

  ];

  return (
    <nav
      className={` nunito ${
        scrolled ? "bg-black backdrop-blur-md fixed items-center w-full top-0 left-0 z-50 transition-all duration-300 shadow-lg border-gray-100" : "bg-[#0F0715] text-white"
      }`}
    >
      <div className="lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl text-white font-bold satisfy-regular hover:scale-95 transition-transform  duration-300"
        >
          Zayd
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors rounded-full barlow-regular px-5 py-2 font-semibold ${
                  activeSection === item.id
                    ? "text-white bg-[#8750F7] "
                    : "text-white hover:bg-[#8750F7] transition duration-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Get Started Button (desktop only) */}
        <div className="hidden lg:inline hover:scale-95 transition-transform duration-300">
          <a
            href="/TazTahirResume.pdf"
            download="TazTahirResume.pdf"
            className="text-sm flex space-x-2 items-center barlow-regular shadow-white bg-[#8750F7] border-2 duration-300 transition hover:bg-white hover:text-black rounded-full border-[#8750F7] text-white px-7 py-3 font-semibold"
          >
            <span>Resume</span>
            <Download size={13} className=""/>
          </a>
        </div>
        </ul>

        

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1329] shadow-md h-screen">
          <ul className="flex flex-col space-y-2 text-center px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors px-3 py-3 rounded-full font-semibold ${
                    activeSection === item.id
                      ? "text-[#8750F7] border-2 w-40 mx-auto"
                      : "text-white hover:text-[#8750F7]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="./TazTahirResume.pdf"
                download="TazTahirResume.pdf"
                onClick={() => setIsOpen(false)}
                className="block text-center w-fit rounded-full mx-auto bg-[#8750F7] text-white px-7 py-3 font-semibold"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
