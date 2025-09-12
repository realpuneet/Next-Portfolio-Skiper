"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

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
      >
        <Card
          className="w-[25rem] h-[18rem] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#C2F84F]"
          style={{ backgroundColor: "#1F3A4B" }}
        >
          <CardContent className="flex items-center justify-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-[#C2F84F]"
            >
              🚀 Uploading Soon...
            </motion.span>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
