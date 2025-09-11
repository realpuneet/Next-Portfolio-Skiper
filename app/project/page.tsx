"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    description:
      "A modern, responsive portfolio to showcase my skills, projects, and experience. Fully animated with Framer Motion & built using React + Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Skiper-UI"],
    github: "https://github.com/puneet/portfolio",
    live: "https://puneet-portfolio.vercel.app",
  },
  {
    title: "MERN Todo App",
    image: "/projects/todo.jpg",
    description:
      "A fullstack MERN Todo app with authentication, real-time updates, and CRUD operations. Integrated with MongoDB, Node.js, Express, and React.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/puneet/mern-todo",
    live: "https://mern-todo-live.vercel.app",
  },
  {
    title: "E-commerce Platform",
    image: "/projects/ecommerce.jpg",
    description:
      "A fully functional e-commerce platform with category-wise product filtering, cart functionality, and payment integration using Razorpay.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Razorpay"],
    github: "https://github.com/puneet/ecommerce",
    live: "https://mern-ecommerce.vercel.app",
  },
]

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20"
      style={{ backgroundColor: "#FAFDEE" }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12"
          style={{ color: "#1F3A4B" }}
        >
          My Projects 💼
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <Card
                className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#C2F84F]"
                style={{ backgroundColor: "#1F3A4B" }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <CardContent className="p-6 text-white">
                  <CardHeader className="text-2xl font-bold text-[#C2F84F] mb-3">
                    {project.title}
                  </CardHeader>
                  <p className="text-gray-200 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: "#C2F84F",
                          color: "#1F3A4B",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank">
                      <Button
                        className="flex items-center gap-2 bg-[#C2F84F] text-[#1F3A4B] rounded-xl hover:brightness-105"
                      >
                        GitHub <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.live} target="_blank">
                      <Button
                        className="flex items-center gap-2 bg-[#C2F84F] text-[#1F3A4B] rounded-xl hover:brightness-105"
                      >
                        Live <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
