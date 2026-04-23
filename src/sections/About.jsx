import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        I’m Pratik Navale, a Full Stack Developer specializing in the MERN
        stack, with a strong interest in Data Analytics and Big Data
        technologies. I enjoy building modern, scalable web applications that
        solve real-world problems. From designing responsive user interfaces in
        React to developing robust backend systems using Node.js and Express, I
        focus on writing clean, efficient, and maintainable code. Alongside
        development, I have a growing passion for data analyzing patterns,
        extracting insights, and working with data driven systems. This
        combination allows me to not only build applications but also understand
        and improve them through data. I’m always eager to learn new
        technologies, take on challenging problems, and continuously improve my
        skills. My goal is to become a versatile developer who can bridge the
        gap between software development and data engineering.
      </p>
    </section>
  );
}
