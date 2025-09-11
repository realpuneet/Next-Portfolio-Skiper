"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";
import { Skiper31 } from "../ui/skiper-ui/skiper31";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Skiper-Ui"]

const About = () => {
    return (
        <div>
           <Skiper31/>
        </div>
    )
}

export default About