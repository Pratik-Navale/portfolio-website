import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Post Graducation Certification Programme in Advanced Computing",
    college: "CDAC Kharghar, Mumbai",
    year: "Feb 2026 – Present",
    details:
      "Specializing in Full Stack Development with hands-on experience in MERN stack, scalable backend systems, and modern data-driven applications.",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    college: "Pillai College of Engineering, New Panvel",
    year: "2021 – 2025 • CGPA : 9.01",
    details:
      "Built strong foundations in Data Structures, Algorithms, DBMS, and Software Engineering with practical project development experience.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Education
      </h2>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-black via-gray-400 to-gray-200 h-full rounded-full"></div>

        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`mb-8 flex flex-col md:flex-row items-center ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="w-full md:w-1/2 p-3">
              <div className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                
                <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-black">
                  {edu.degree}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {edu.college} • {edu.year}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="relative z-10">
              <div className="w-4 h-4 bg-black rounded-full border-[3px] border-white shadow-sm"></div>
            </div>

            {/* Spacer */}
            <div className="w-full md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}