import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPython,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiApachespark,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Apache Spark", icon: SiApachespark },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGitAlt },
      { name: "VS Code", icon: FaGitAlt },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-blue-100 blur-2xl opacity-50"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center justify-center w-28 h-20 rounded-lg text-sm font-medium bg-white/80 backdrop-blur shadow-sm cursor-pointer transition hover:bg-blue-50"
                  >
                    {/* Icon */}
                    <Icon className="text-lg text-indigo-600" />

                    {/* Name */}
                    <span className="text-gray-700 group-hover:text-black">
                      {skill.name}  
                    </span>

                    {/* Underline */}
                    <span className="mt-1 h-[2px] w-6 bg-indigo-500 origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}