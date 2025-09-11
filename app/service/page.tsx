"use client"

import { motion } from "framer-motion"
import { Code, Server, Globe, Workflow } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="w-12 h-12 text-[#C2F84F]" />,
    title: "Frontend Development",
    dialogue:
      "Screen par jo dikhta hai wahi duniya yaad rakhti hai. React + Tailwind se main woh UI banata hoon jo lightning fast aur stylish ho ⚡",
  },
  {
    icon: <Server className="w-12 h-12 text-[#C2F84F]" />,
    title: "Backend Development",
    dialogue:
      "Asli hero parde ke peeche hota hai. Node.js & MongoDB ke saath main ek secure aur powerful backend khada karta hoon 🔐",
  },
  {
    icon: <Workflow className="w-12 h-12 text-[#C2F84F]" />,
    title: "API Testing & Integration",
    dialogue:
      "API testing asli dosti jaisi hoti hai — har response sahi aur on time. Postman & debugging ke saath har request smooth banata hoon ✅",
  },
  {
    icon: <Code className="w-12 h-12 text-[#C2F84F]" />,
    title: "Fullstack Solutions",
    dialogue:
      "Frontend ho ya backend, main poora game khelta hoon! MERN stack se idea se deploy tak end-to-end solutions deliver karta hoon 🚀",
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center 
    bg-[#FAFDEE] px-6 py-20 text-[#1F3A4B] overflow-hidden">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight 
        text-[#1F3A4B]">
          My Services 🎬
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-[#1F3A4B]/80 italic"
        >
          “Main code nahi likhta… kahani likhta hoon.  
          Har app ek kahani hai, aur main uska director hoon.” 🎭
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
          >
            <Card
              className="rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 
              bg-[#1F3A4B] border border-[#C2F84F]/40"
            >
              <CardContent className="p-8 flex flex-col gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.3,
                    type: "spring",
                    stiffness: 150,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#C2F84F]">
                  {service.title}
                </h3>
                <p className="text-[#FAFDEE] text-md leading-relaxed">
                  {service.dialogue}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
