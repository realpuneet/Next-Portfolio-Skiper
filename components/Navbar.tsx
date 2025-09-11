"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Skiper58 } from "./ui/skiper-ui/skiper58"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-[#1F3A4B]/80 backdrop-blur-md z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight flex items-center"
        >
          <span className="text-[#FAFDEE]">&lt;</span>
          realpuneet
          <span className="text-[#C2F84F]">.in</span>
          <span className="text-[#FAFDEE]">&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Skiper58 />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#C2F84F]/20 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} color="#FAFDEE" /> : <Menu size={28} color="#FAFDEE" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1F3A4B]/90 backdrop-blur-lg shadow-lg w-full"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              <Skiper58 /> {/* ✅ animated nav reused here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
