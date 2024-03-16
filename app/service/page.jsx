import React from "react";
import { StickyScroll } from "@components/ui/sticky-scroll-reveal";
import Image from "next/image";

import { Monoton } from 'next/font/google'


export const monoton = Monoton({
  subsets: ['latin'],
  display: 'swap',
  weight : '400'
});

const content = [
  {
    title: "Social Media Management",
    description:
      "Creating and scheduling content, engaging with followers, monitoring analytics, and implementing social media advertising campaigns",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Social Media Management
      </div>
    ),
  },
  {
    title: "Content Creation",
    description:
      "We will will work closely with you to capture your vision and bring your ideas to life.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Content Creation
      </div>
    ),
  },
  {
    title: "Community Management",
    description:
      "Building a community around your brand which will foster a deeper connection with your customers, increase customer loyalty, and ultimately drive growth for your business.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Community Management
      </div>
    ),
  },
  {
    title: "Hire our Videographer!",
    description:
      "Rent our skilled videographer at Clover Creative Agency for stunning visuals that bring your vision to life. From promotional videos to event coverage, our expert captures high-quality content that engages your audience. With flexible options and exceptional service, elevate your brand with us",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Hire our Videographer!
      </div>
    ),
  },
  {
    title: "Web Designing",
    description:
      "Whether you need a simple informational website or a complex e-commerce platform, we have the expertise to deliver a customised web design solution that enhances your online presence",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Designing
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Designing
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <>
    
    <center>
      <div className="h-[20vh] bg-slate-900">
      <br /><br /><br /> <br />
        {/* <span  className={`${monoton.className} text-4xl text-white py-10`}>
                    OUR SERVICES
        </span> */}
      </div>
    </center>
      <StickyScroll content={content} />

    </>
  );
}
