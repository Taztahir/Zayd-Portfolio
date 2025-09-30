import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 animate-bounce right-3 lg:right-6 p-3 rounded-full bg-[#E68200] text-white shadow-2xl hover:bg-white duration-300 hover:text-[#E00912] transition"
      >
        <ArrowUp size={13} />
      </button>
    )
  );
};

export default ScrollUpButton;
