"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    form.reset();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 w-[80%] px-6 md:px-16 bg-muted">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="p-3 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        />
        <motion.button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-primary text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </section>
  );
};
