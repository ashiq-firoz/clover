"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "@components/ui/bento-grid";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

import { Antonio } from 'next/font/google'


export const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  weight : '400'
});


function BentoGridDemo() {
    return (
        <section className="p-20 bg-[#2C2C2C]">
            <br />
            <center>
                <span className={`${antonio.className} text-4xl text-white`}>
                    ABOUT US
                </span>
                <br />
            </center>
            <br />
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        position={item.position}
                        description={item.description}
                        header={item.header}
                        icon1={item.icon1}
                        icon2={item.icon2}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = ({ child }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
        {child}
    </div>
);

const items = [
    {
        title: "Avneeth Jan",
        position: "Social Media Analyst.",
        description: "Avneeth is passionate about staying up-to-date with the latest social media trends and technologies to help clients succeed in their online presence.",
        header: <Skeleton child={<img src="/img/avneeth.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/ave_jan_?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/company/wix-com"><FaLinkedinIn/></a>,
    },
    {
        title: "Catherine Green",
        position: "Media Account Manager",
        description: "Catherine helps clients develop effective social media content to increase their online presence and engage with their target audience and is dedicated to creating high-quality content.",
        header: <Skeleton child={<img src="/img/catherine.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/cmgjvk?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/in/catherine-green-marketingstudent/"><FaLinkedinIn/></a>,
    },
    {
        title: "Siyona Shajil",
        position: "Social Media Strategist",
        description: "Siyona is responsible for developing and executing innovative strategies that help her company stay ahead of the competition.She provides valuable insights to her clients.",
        header: <Skeleton child={<img src="/img/Siyona.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/_itz_siyaaaa_?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/in/siyona-shajil-b9946b20b/"><FaLinkedinIn/></a>,
    },
    {
        
        header: <div className={`${antonio.className} text-[#2C2C2C]  flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[15vh]`}>
        <b>MEET US</b>
    </div>,

    },
    {
        title: "Anandan Anil",
        position: "Videographer",
        description: "With his passion for storytelling and his eye for detail, Anandan is responsible for creating compelling and engaging video content that resonates with his company's target audience.",
        header: <Skeleton child={<img src="/img/anandan.jpg" className="rounded" />} />,
        icon1: <a href="https://www.instagram.com/anandannaiir?igsh=ZGZra3Fpa2VyMjR0"><FaInstagram/></a>,
        icon2:<a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ae.linkedin.com/company/clover-creative-agency&ved=2ahUKEwjtgO665a-FAxWuQPEDHYD4BFUQFnoECBQQAQ&usg=AOvVaw3CqRX3NhI52wOyoPWuSAwJ"><FaLinkedinIn/></a>,
    },
    {
        header: <p>As a social media curating company, our primary objective is to help businesses and individuals manage their social media presence more effectively. Our team will work closely with our clients to create customized social media strategies that are tailored to their specific needs and goals.</p> ,
      
    },
    {
        title: "Create Together With Us",
        description: "Embark on exciting journeys and thrilling discoveries.",
        icon1: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];

export default BentoGridDemo;
