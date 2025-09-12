"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Sparkles,
  Rocket,
  Monitor,
  Server,
  Database,
  Zap,
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter
} from "lucide-react"
import Link from "next/link"

const skills = [
  { name: "MERN Stack", icon: <Database className="w-5 h-5" />, level: 95 },
  { name: "Next.js", icon: <Globe className="w-5 h-5" />, level: 90 },
  { name: "API Testing", icon: <Server className="w-5 h-5" />, level: 88 },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, level: 85 },
  { name: "Postman", icon: <Zap className="w-5 h-5" />, level: 92 },
  { name: "VSCode", icon: <Monitor className="w-5 h-5" />, level: 95 },
  { name: "Discord", icon: <Sparkles className="w-5 h-5" />, level: 87 },
  { name: "Material-UI", icon: <Sparkles className="w-5 h-5" />, level: 90 },
  { name: "ShadCN UI", icon: <Sparkles className="w-5 h-5" />, level: 93 },
  { name: "Framer Motion", icon: <Sparkles className="w-5 h-5" />, level: 88 },
]

const socialIcons = [Github, Linkedin, Twitter, Mail];
const socialLinks = [
  "https://github.com/realpuneet",
  "https://linkedin.com/in/realpuneet",
  "https://x.com/realpuneet_jsx",
  "mailto:puneety259@gmail.com"
];

const experiences = [
  "Building scalable web applications",
  "Creating responsive user interfaces",
  "Developing RESTful APIs",
  "Database optimization",
  "Performance tuning",
  "Team collaboration"
]

export default function AboutPage() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("skills")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section
      id="about"
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden"
      style={{ backgroundColor: "#FAFDEE" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C2F84F] rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F3A4B] rounded-full opacity-10 blur-3xl animate-pulse animation-delay-2000" />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#C2F84F] rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#1F3A4B] rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: "rgba(194, 248, 79, 0.1)", border: "1px solid rgba(194, 248, 79, 0.3)" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#1F3A4B] font-semibold text-sm sm:text-base">🚀 Fullstack Developer</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ color: "#1F3A4B" }}>
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F3A4B] to-[#C2F84F]">Puneet</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: "#1F3A4B" }}>
            Crafting <span className="font-bold text-[#99c142]">interactive</span>,
            <span className="font-bold text-[#9dcc37]"> scalable</span>, and
            <span className="font-bold text-[#8ab430]"> modern</span> web experiences
          </p>
        </motion.div>

        {/* Profile and Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden backdrop-blur-md border-2 border-[#C2F84F]/30 shadow-2xl rounded-3xl"
              style={{ backgroundColor: "rgba(31, 58, 75, 0.05)" }}>
              <div className="relative p-6 sm:p-8">
                <motion.div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C2F84F] to-[#1F3A4B] rounded-full animate-spin-slow opacity-75" />
                  <img
                    src="/profile.jpg"
                    alt="Puneet"
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A4B] mb-4 text-center">
                  Professional Developer
                </h3>

                <div className="space-y-3">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C2F84F] flex-shrink-0" />
                      <span className="text-sm sm:text-base text-[#1F3A4B]">{exp}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {socialIcons.map((Icon, index) => (
                    <Link
                      key={index}
                      href={socialLinks[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-[#1F3A4B] text-[#C2F84F] hover:bg-[#C2F84F] hover:text-[#1F3A4B] transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <Card className="backdrop-blur-md border-2 border-[#C2F84F]/30 shadow-2xl rounded-3xl p-6 sm:p-8"
              style={{ backgroundColor: "rgba(31, 58, 75, 0.05)" }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1F3A4B] flex items-center gap-3">
                <Rocket className="w-8 h-8 text-[#C2F84F]" />
                My Journey
              </h3>

              <div className="space-y-4 text-[#1F3A4B]">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  As a <span className="font-bold text-[#a5e719]">MERN Stack specialist</span>,
                  I bring ideas to life through elegant code and intuitive design. My passion lies in creating
                  applications that not only work flawlessly but also provide exceptional user experiences.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  With expertise in <span className="font-bold">React, Next.js, Node.js</span>, and
                  <span className="font-bold"> MongoDB</span>, I build end-to-end solutions that scale.
                  Currently mastering <span className="font-bold text-[#a5e719]">TypeScript</span> to
                  write even more robust and maintainable code.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  I believe <span className="italic">"Every application tells a story, and I ensure the
                    code tells it flawlessly."</span> 🚀
                </p>
              </div>

              <motion.div
                className="mt-6 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#C2F84F]/20 text-[#1F3A4B] border border-[#C2F84F]/30">
                  Clean Code Advocate
                </span>
                <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#C2F84F]/20 text-[#1F3A4B] border border-[#C2F84F]/30">
                  UI/UX Enthusiast
                </span>
                <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#C2F84F]/20 text-[#1F3A4B] border border-[#C2F84F]/30">
                  Problem Solver
                </span>
              </motion.div>
            </Card>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 p-1 rounded-full backdrop-blur-md"
            style={{ backgroundColor: "rgba(31, 58, 75, 0.1)" }}>
            {["skills", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === tab
                    ? "bg-[#1F3A4B] text-[#C2F84F] shadow-lg"
                    : "text-[#1F3A4B] hover:bg-[#C2F84F]/20"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with Animation */}
        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative"
                >
                  <Card className="overflow-hidden backdrop-blur-md border-2 border-[#C2F84F]/30 hover:border-[#C2F84F] transition-all duration-300 rounded-2xl group cursor-pointer"
                    style={{ backgroundColor: hoveredSkill === index ? "rgba(194, 248, 79, 0.1)" : "rgba(31, 58, 75, 0.05)" }}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: hoveredSkill === index ? 360 : 0,
                            scale: hoveredSkill === index ? 1.2 : 1
                          }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-full bg-[#1F3A4B] text-[#C2F84F] group-hover:bg-[#C2F84F] group-hover:text-[#1F3A4B] transition-colors"
                        >
                          {skill.icon}
                        </motion.div>

                        <h4 className="font-bold text-xs sm:text-sm text-[#1F3A4B] text-center">
                          {skill.name}
                        </h4>

                        {/* Skill Level Bar */}
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#C2F84F] to-[#1F3A4B]"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>

                        <span className="text-xs font-semibold text-[#1F3A4B]">
                          {skill.level}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { title: "Frontend", tools: ["React", "Next.js", "Tailwind CSS"], icon: <Monitor /> },
                { title: "Backend", tools: ["Node.js", "Express", "MongoDB"], icon: <Server /> },
                { title: "Tools & Testing", tools: ["Postman", "Git", "VSCode"], icon: <Code2 /> }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full backdrop-blur-md border-2 border-[#C2F84F]/30 hover:border-[#C2F84F] transition-all duration-300 rounded-3xl overflow-hidden group"
                    style={{ backgroundColor: "rgba(31, 58, 75, 0.05)" }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-[#1F3A4B] text-[#C2F84F] group-hover:bg-[#C2F84F] group-hover:text-[#1F3A4B] transition-colors">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#1F3A4B]">{category.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.tools.map((tool) => (
                          <motion.div
                            key={tool}
                            className="flex items-center gap-2"
                            whileHover={{ x: 10 }}
                          >
                            <ArrowRight className="w-4 h-4 text-[#C2F84F]" />
                            <span className="text-[#1F3A4B] text-sm sm:text-base">{tool}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-2xl transition-all duration-300"
              style={{ backgroundColor: "#C2F84F", color: "#1F3A4B" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Let&apos;s Build Together
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-[#1F3A4B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center gap-3 text-[#C2F84F] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Let&apos;s Build Together
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-sm text-[#1F3A4B]/70"
          >
            Ready to transform your ideas into reality? ✨
          </motion.p>
        </motion.div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}