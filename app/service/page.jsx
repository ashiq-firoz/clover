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
  return (
    <>
    
      <StickyScroll content={content} />

    </>
  );
}
