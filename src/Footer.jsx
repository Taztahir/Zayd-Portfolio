import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="bg-black text-white border-t-[3px] border-black overflow-hidden">
            {/* Top Marquee */}
            <div className="bg-primary py-4 border-b-[3px] border-black overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-8"
                    animate={{ x: [0, -500] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-black font-black uppercase text-2xl tracking-tighter">
                            ZAYD.DEV ★ FULL STACK DEVELOPER ★ CRAFTING THE FUTURE ★
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h1 className="text-5xl font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_#FF006E]">ZAYD</h1>
                </div>

                <nav className="flex flex-wrap justify-center gap-6">
                    {["hero", "about", "skills", "project", "resume", "contact"].map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="font-black uppercase hover:text-primary transition-colors hover:underline decoration-4"
                        >
                            {id}
                        </a>
                    ))}
                </nav>

                <div className="text-center md:text-right">
                    <p className="font-bold text-gray-400 uppercase text-sm">
                        © 2024 Built with <span className="text-secondary">Chaoz</span> by <br />
                        <a href="#hero" className="text-white hover:text-accent font-black">Zayd Tahir</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
