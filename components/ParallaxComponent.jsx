import styles from "../app/globals.css";

import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";
import { Antonio } from "next/font/google";

export const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const ParallaxComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center bg-black"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        <div className="flex flex-col items-center">
          <span className={`${antonio.className} tracking-[1.25rem] text-[#2C2C2C] text-[13vh] lg:text-[30vh] `}>
            <b>CLOVER</b>
          </span>
          <span className={`bg-black text-[2vh]  lg:text-[5.5vh] py-5 inline-block text-transparent bg-clip-text mt-4`}>
            SOCIAL MEDIA MANAGEMENT
          </span>
        </div>

        <center>

        </center>
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/hero.jpg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // Add this line for the parallax effect
          y: backgroundY,
        }}
      />

    </div>
  );
};

export default ParallaxComponent;
