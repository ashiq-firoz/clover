"use client"
import React, { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

import { Monoton } from 'next/font/google'


export const monoton = Monoton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const content = [
  {
    title: "STRATEGY DEVELOPMENT",
    description:
      "Our strategies encompass content calendars, audience engagement tactics, platform selection, and KPIs to measure success. By continuously analyzing data and refining our approach, we ensure your brand remains agile and responsive in the dynamic world of social media.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CONTENT CREATION",
    description:
      "We craft tailored and engaging content that captures your brand's essence and resonates with your target audience. From captivating articles to stunning visuals, we bring your brand story to life across platforms. With planning and attention to detail, we create exceptional content that helps your brand stand out and drive results in the digital landscape",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "COMMUNITY MANAGEMENT",
    description:
      "We actively engage with your audience, responding to comments, messages, and feedback promptly. We foster a sense of belonging and encourage meaningful interactions. By humanizing your brand and creating a sense of community, we strengthen customer loyalty and drive organic growth, ensuring your brand's presence thrives in the digital space.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "Whether it's product photography, lifestyle shoots, event coverage, or promotional videos, we have the expertise to bring your vision to life. Our team of creative professionals ensures that every frame aligns with your brand identity and marketing goals. Let us turn your ideas into captivating visual content that leaves a lasting impression.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/7.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "WEB TECH",
    description:
      "Our web designers collaborate with you to understand and, ensure that every aspect of the design aligns with your brand values and objectives. We have the expertise to deliver a customised web design solution that enhances your online presence and drives meaningful results.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <br /><br /><br />
      {/* <StickyScroll content={content} /> */}

      <div className="p-10 grid grid-cols-12 gap-2 h-[50vh]">

        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-black">STRATEGY DEVELOPMENT</h2>
          <p className="text-kg py-4 text-black ">Our strategies encompass content calendars, audience engagement tactics, platform selection, and KPIs to measure success. By continuously analyzing data and refining our approach, we ensure your brand remains agile and responsive in the dynamic world of social media.</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/img/1.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md hidden sm:block"
            alt="linear board demo"
          />
        </div>
      </div>

      <div className="p-10 grid grid-cols-12 gap-2 h-[50vh]">

        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-black">CONTENT CREATION</h2>
          <p className="text-kg py-4 text-black ">We craft tailored and engaging content that captures your brand's essence and resonates with your target audience. From captivating articles to stunning visuals, we bring your brand story to life across platforms. With planning and attention to detail, we create exceptional content that helps your brand stand out and drive results in the digital landscape.</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/img/3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md hidden sm:block"
            alt="linear board demo"
          />
        </div>
      </div>


      <div className="p-10 grid grid-cols-12 gap-2 h-[50vh]">

        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-black">COMMUNITY MANAGEMENT</h2>
          <p className="text-kg py-4 text-black ">We actively engage with your audience, responding to comments, messages, and feedback promptly. We foster a sense of belonging and encourage meaningful interactions. By humanizing your brand and creating a sense of community, we strengthen customer loyalty and drive organic growth, ensuring your brand's presence thrives in the digital space.</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/img/5.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md hidden sm:block"
            alt="linear board demo"
          />
        </div>
      </div>
      <br />

      <div className="p-10 grid grid-cols-12 gap-2 h-[50vh]">

        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-black">PHOTOGRAPHY</h2>
          <p className="text-kg py-4 text-black ">Whether it's product photography, lifestyle shoots, event coverage, or promotional videos, we have the expertise to bring your vision to life. Our team of creative professionals ensures that every frame aligns with your brand identity and marketing goals. Let us turn your ideas into captivating visual content that leaves a lasting impression.</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/img/7.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md hidden sm:block"
            alt="linear board demo"
          />
        </div>
      </div>

      <div className="p-10 grid grid-cols-12 gap-2 h-[50vh]">

        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-black">WEB TECH</h2>
          <p className="text-kg py-4 text-black ">Our web designers collaborate with you to understand and, ensure that every aspect of the design aligns with your brand values and objectives. We have the expertise to deliver a customised web design solution that enhances your online presence and drives meaningfull results.</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/img/9.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-md hidden sm:block"
            alt="linear board demo"
          />
        </div>
      </div>
      
      <div className="fixed bottom-10 right-10 z-50">
      <div className="relative">
        <button
          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
         
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://api.whatsapp.com/send/?phone=%2B971527074607&text=I%27m+interested+,+tell+me+more+about+your+service&type=phone_number&app_absent=0">
            <IoLogoWhatsapp size={24} />
          </a>
        </button>
        {showTooltip && (
          <div className="absolute bg-gray-800 w-16 text-white text-xs rounded-lg p-1 bottom-8 left-1/2 transform -translate-x-1/2 opacity-100 pointer-events-auto transition-opacity duration-300">
            Let's chat!
          </div>
        )}
      </div>
    </div>



    </>
  );
}
