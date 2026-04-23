import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack ecommerce with admin dashboard, authentication, and payment flow.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Job Portal",
    desc: "Hiring platform connecting recruiters and candidates with dashboard features.",
    tech: ["MERN", "JWT", "REST API"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden bg-white shadow-lg"
          >
            {/* Image */}
            <div className="h-56 bg-gradient-to-br from-indigo-200 to-purple-200"></div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-200 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔥 Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-4">
              
              <button
                onClick={() => setSelected(p)}
                className="px-5 py-2 bg-white rounded-full text-sm"
              >
                View Details
              </button>

              <div className="flex gap-4">
                <a href={p.github} target="_blank" className="text-white underline">
                  GitHub
                </a>
                <a href={p.live} target="_blank" className="text-white underline">
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold">{selected.title}</h3>
            <p className="mt-4 text-gray-600">{selected.desc}</p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {selected.tech.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-gray-200 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={selected.github}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>
              <a
                href={selected.live}
                target="_blank"
                className="px-4 py-2 border rounded"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}