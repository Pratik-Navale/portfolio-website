import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Hashedbit Innovation",
    duration: "Dec 2024 – Apr 2025",
    points: [
      "Contributed to the design and development of a job-seeking and recruitment web platform.",
      "Gained hands-on experience in full-stack development using React, Node.js, and MongoDB.",

    ],
  },
   {
    role: "SAP Material Mangement Intern",
    company: "Greenline Mobility Solution - Mumbai",
    duration: "May 2024 – Jul 2024",
    points: [
     "Assisted in the implementation and customization of the SAP MM module.",
     "Gained hands-on experience with procurement and inventory management functions within SAP MM.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 max-w-3xl mx-auto">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="mb-12 ml-6"
          >
            {/* Dot */}
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-black"></span>

            {/* Card */}
            <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              
              {/* Top Row */}
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>

              <p className="text-gray-600 mt-1">{exp.company}</p>

              {/* Points */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 bg-black rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}