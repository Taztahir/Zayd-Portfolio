import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = document.querySelectorAll("section");
            let current = "hero";
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
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b-[3px] border-black ${scrolled ? "bg-primary py-2 shadow-brutal" : "bg-white py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tighter bg-black text-white px-3 md:px-4 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_#FF006E]"
                >
                    ZAYD.DEV
                </motion.a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-2">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <motion.a
                                href={`#${item.id}`}
                                whileHover={{ y: -2, x: -2, shadow: "4px 4px 0px 0px black" }}
                                className={`px-4 py-2 font-bold uppercase border-[3px] transition-all ${activeSection === item.id
                                        ? "bg-secondary text-white border-black shadow-brutal"
                                        : "bg-white text-black border-transparent hover:border-black hover:shadow-brutal"
                                    }`}
                            >
                                {item.label}
                            </motion.a>
                        </li>
                    ))}
                    <li>
                        <motion.a
                            href="/TazTahirResume.pdf"
                            download
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="flex items-center space-x-2 bg-accent px-6 py-2 border-[3px] border-black shadow-brutal font-black uppercase ml-4"
                        >
                            <span>Resume</span>
                            <Download size={18} />
                        </motion.a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="lg:hidden p-2 bg-white border-[3px] border-black shadow-brutal"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b-[3px] border-black p-6 shadow-brutal-lg"
                    >
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`block p-4 border-[3px] border-black font-black uppercase text-center transition-all ${activeSection === item.id
                                                ? "bg-primary shadow-brutal"
                                                : "bg-white hover:bg-cyan-vivid hover:shadow-brutal"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};


export default Navbar;
