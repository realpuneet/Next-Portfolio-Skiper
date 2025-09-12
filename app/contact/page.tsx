"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-22 pb-15"
      style={{ backgroundColor: "#FAFDEE" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl grid gap-8 sm:gap-10 md:grid-cols-2"
      >
        {/* Left Side - Contact Info */}
        <Card
          className="shadow-2xl rounded-3xl text-white"
          style={{ backgroundColor: "#1F3A4B" }}
        >
          <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-wide"
              style={{ color: "#C2F84F" }}
            >
              Let’s Vibe & Connect ✨
            </motion.h2>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              Soch rahe ho project banwana hai? Collab karna hai? Ya bas ek
              <span className="font-semibold"> “Hi 👋”</span> bolna hai — message drop karo, reply turbo speed me aayega ⚡
            </p>

            <div className="space-y-4 sm:space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#C2F84F" }} />
                <span>puneety259@gmail.com</span>
              </motion.div>

              

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#C2F84F" }} />
                <span>Bhopal, India</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Right Side - Form */}
        <Card
          className="shadow-2xl rounded-3xl"
          style={{ backgroundColor: "#1F3A4B" }}
        >
          <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 text-white">
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-wide"
              style={{ color: "#C2F84F" }}
            >
              Drop Your Thoughts 💭
            </motion.h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Thoda professional, thoda friendly — bas wahi vibe hai idhar!
              Apna idea, query ya joke bhi likh sakte ho 😂
            </p>

            <form className="space-y-4 sm:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-white text-white rounded-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white text-white rounded-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="bg-white text-white rounded-xl"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#C2F84F", color: "#1F3A4B" }}
                >
                  Send Message <Send className="w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
