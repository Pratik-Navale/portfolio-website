import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myklbkpn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Contact Me
      </motion.h2>

      {/* Email fallback */}
      <p className="text-center text-gray-500 mb-4">
        Please contact me directly at{" "}
        <a
          href="mailto:navalepratik21@gmail.com?subject=Opportunity%20from%20Portfolio&body=Hi%20Pratik,%20I%20would%20like%20to%20connect%20with%20you."
          className="font-medium text-black hover:text-blue-600 transition relative group"
        >
          navalepratik21@gmail.com
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>{" "}
        or through this form.
      </p>

      <p className="text-center text-lg text-gray-600 mb-12">
        Have a project or opportunity? Let’s connect.
      </p>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="grid gap-6 max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        {/* Hidden subject */}
        <input type="hidden" name="_subject" value="New Portfolio Message" />

        {/* Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-4 bg-black text-white rounded-xl text-lg hover:scale-105 transition disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-600 text-center">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
