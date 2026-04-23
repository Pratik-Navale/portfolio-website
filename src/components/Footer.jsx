import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Pratik-Navale",
    color: "hover:text-black",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/pratik-navale-301ba5226/",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://x.com/PratikNavale18",
    color: "hover:text-sky-500",
  },
];

export default function SocialIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-1 px-6 py-10 text-center relative"
    >
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-6">
        {socialLinks.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 text-gray-500 transition-all duration-300 ${item.color}`}
            >
              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 bg-current/20"></span>

              {/* Icon */}
              <Icon size={20} className="relative z-10" />

              {/* Text */}
              <span className="relative z-10">{item.name}</span>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm mt-8">
        © {new Date().getFullYear()} Pratik Navale. All rights reserved.
      </p>

      {/* Tech Stack */}
      <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
        About this website: built with React (Vite), Tailwind CSS, Framer Motion,
        and deployed on Vercel.
      </p>
    </motion.div>
  );
}