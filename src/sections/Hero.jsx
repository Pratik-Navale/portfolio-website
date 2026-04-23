import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto"
    >
      {/* LEFT: TEXT */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-indigo-600">Pratik Navale</span>
        </motion.h1>

        {/* 🔥 FIXED typo (you had text-lg twice + missing space) */}
        <div className="mt-4 text-2xl text-gray-600 h-12">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Full Stack Engineer",
              2000,
              "Data Analyst Enthusiast",
              2000,
              "Big Data Enthusiast",
              2000,
               "Data Engineer Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 text-gray-500 max-w-md">
          I build scalable web applications and work with data to generate
          insights.
        </p>

        {/* 🔥 NEW PREMIUM BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-lg hover:scale-105 transition"
          >
            Contact me here
            <ArrowRight size={18} />
          </a>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            //download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-full text-lg hover:scale-105 transition"
          >
            Download CV
            <Download size={18} />
          </a>
        </motion.div>

        {/* 🔥 SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-6 mt-8"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pratik-navale-301ba5226/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/10 backdrop-blur-md border border-white/20 
               shadow-md transition-all duration-300 
               hover:scale-110 hover:shadow-blue-500/30 hover:bg-[#0A66C2]"
          >
            <FaLinkedin
              size={20}
              className="text-[#0A66C2] group-hover:text-white transition"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Pratik-Navale"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/10 backdrop-blur-md border border-white/20 
               shadow-md transition-all duration-300 
               hover:scale-110 hover:shadow-gray-800/40 hover:bg-black"
          >
            <FaGithub
              size={20}
              className="text-gray-800 group-hover:text-white transition"
            />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/PratikNavale18"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/10 backdrop-blur-md border border-white/20 
               shadow-md transition-all duration-300 
               hover:scale-110 hover:shadow-black/40 hover:bg-black"
          >
            <FaXTwitter
              size={20}
              className="text-black group-hover:text-white transition"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pratik_2127"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-full 
               bg-white/10 backdrop-blur-md border border-white/20 
               shadow-md transition-all duration-300 
               hover:scale-110 hover:shadow-pink-500/40 
               hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
          >
            <FaInstagram
              size={20}
              className="text-pink-500 group-hover:text-white transition"
            />
          </a>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/profile.jpeg"
          alt="Pratik"
          className="w-80 h-100 object-cover rounded-3xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
