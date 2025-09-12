"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-background border-t  border-border py-6 mt-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Puneet Yadav ❤️. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/realpuneet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/realpuneet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="https://x.com/realpuneet_jsx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaXTwitter size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
export default Footer