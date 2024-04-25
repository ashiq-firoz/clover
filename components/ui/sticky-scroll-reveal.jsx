'use client'

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@app/util/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--slate-900)",
    "var(--neutral-900)",
    "var(--neutral-900)",
  ];

  const backgroundImgs = [
    "url('/img/1.jpg')",
    "url('/img/3.jpg')",
    "url('/img/5.jpg')",
    "url('/img/9.jpg')",
  ];
  
  
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundImage: backgroundImgs[activeCard % backgroundImgs.length],
        backdropFilter: 'none',
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10  p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2

                className="text-2xl font-bold text-black"
              >
                {item.title}
              </h2>
              <p

                className="text-kg text-black max-w-sm mt-10"
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
