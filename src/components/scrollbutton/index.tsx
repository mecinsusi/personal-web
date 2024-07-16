import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);
  return (
    <div
      onClick={scrollToTop}
      className={`z-0 fixed text-cyan-500 scale-110 bottom-10 right-4 md:right-10 md:bottom-16 animate-bounce ${isVisible ? "block" : "hidden"}`}
    >
      <FaAngleDoubleUp className="size-6 md:size-8 md:hover:scale-125" />
    </div>
  );
}
