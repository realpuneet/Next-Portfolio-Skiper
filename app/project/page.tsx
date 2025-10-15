"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Skiper48 } from "@/components/ui/skiper-ui/skiper48"

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#FAFDEE" }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center"
        style={{ color: "#1F3A4B" }}
      >
        My Projects 💼
      </motion.h2>

      {/* Single Project Card in Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl flex flex-col items-center gap-10"
      >
        <Skiper48 />
      </motion.div>
    </section>
  )
}
