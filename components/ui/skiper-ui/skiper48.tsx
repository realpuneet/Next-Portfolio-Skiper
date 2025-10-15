"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";

const Skiper48 = () => {
  const images = [
    {
      src: "/projects/os.png",
      alt: "Operating System Project",
      live: "https://os-portfolio-beta.vercel.app/",
      code: "https://github.com/realpuneet/os-portfolio",
    },
    {
      src: "/projects/criccart.png",
      alt: "CricCart Project",
      live: "https://criccart.vercel.app/",
      code: "https://github.com/realpuneet/E-comm-backend",
    },
    {
      src: "/projects/foodrecipe.png",
      alt: "Food Recipe App",
      live: "https://food-recipe-web-app-rust.vercel.app/",
      code: "https://github.com/realpuneet/FoodRecipe",
    },
    {
      src: "/projects/portfolio.png",
      alt: "Portfolio Website",
      live: "https://portfolio-skiper.vercel.app/",
      code: "https://github.com/realpuneet/Next-Portfolio-Skiper",
    },
  ];

  return (
    <div className="flex flex-col p-4 h-full w-full items-center justify-center gap-2 overflow-hidden bg-[#FAFDEE]">
      <h3 className="text-gray-800">Swipe the cards</h3>
      <Carousel_002 images={images} loop />
    </div>
  );
};

export { Skiper48 };

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string; live?: string; code?: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-3xl", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 h-[380px] w-[260px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl overflow-hidden relative group">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={image.src}
              alt={image.alt}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a
                href={image.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-green-500/90 text-white text-sm rounded-full hover:bg-green-600 transition"
              >
                Live Demo
              </a>
              <a
                href={image.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-800/90 text-white text-sm rounded-full hover:bg-black transition"
              >
                Source Code
              </a>
            </div>
          </SwiperSlide>
        ))}

        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_002 };
