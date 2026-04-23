import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = ["home", "about", "skills", "projects","experience" ,"education", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      // Bottom fix (contact)
      if (scrollPosition >= document.body.scrollHeight - 50) {
        setActive("contact");
        return;
      }

      let current = "home";

      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 150;

          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md bg-white/60 border border-gray-200 shadow-lg">
        
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative px-4 py-2 text-sm capitalize z-10"
          >
            {/* 🔥 Animated Background Pill */}
            {active === item && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-md shadow"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            {/* Text */}
            <span
              className={`relative z-10 transition ${
                active === item
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item}
            </span>
          </a>
        ))}

      </nav>
    </div>
  );
}