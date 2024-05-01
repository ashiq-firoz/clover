"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "@components/ui/bento-grid";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


import { Antonio } from 'next/font/google'


export const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  weight : '400'
});


function BentoGridDemo() {
    return (
        <section className="p-20 bg-[#2C2C2C]">
            <br></br>
            <br></br>
            <br></br>
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
        title: "AVNEETH JAN",
        position: "Social Media Analyst.",
        description: "Avneeth is passionate about staying up-to-date with the latest social media trends and technologies to help clients succeed in their online presence.",
        header: <Skeleton child={<img src="/img/avneeth.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/ave_jan_?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/company/wix-com"><FaLinkedinIn/></a>,
    },
    {
        title: "CATHERINE GREEN",
        position: "Media Account Manager",
        description: "Catherine helps clients develop effective social media content to increase their online presence and engage with their target audience and is dedicated to creating high-quality content.",
        header: <Skeleton child={<img src="/img/catherine.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/cmgjvk?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/in/catherine-green-marketingstudent/"><FaLinkedinIn/></a>,
    },
    {
        title: "SIYONA SHAJIL",
        position: "Social Media Strategist",
        description: "Siyona is responsible for developing and executing innovative strategies that help her company stay ahead of the competition.She provides valuable insights to her clients.",
        header: <Skeleton child={<img src="/img/Siyona.webp" className="rounded" />} />,
        icon1: <a href="https://instagram.com/_itz_siyaaaa_?igshid=YmMyMTA2M2Y="><FaInstagram/></a>,
        icon2:<a href="https://www.linkedin.com/in/siyona-shajil-b9946b20b/"><FaLinkedinIn/></a>,
    },
    {
        
        header: <div className={`${antonio.className} text-[#2C2C2C]  flex flex-1 w-full h-full min-h-[10rem] rounded-xl text-[13vh] lg:text-[22vh]`}>
        <b>MEET US</b>
    </div>,

    },
    {
        title: "ANANDAN ANIL",
        position: "Videographer",
        description: "With his passion for storytelling and his eye for detail, Anandan is responsible for creating compelling and engaging video content that resonates with his company's target audience.",
        header: <Skeleton child={<img src="/img/anandan.jpg" className="rounded" />} />,
        icon1: <a href="https://www.instagram.com/anandannaiir?igsh=ZGZra3Fpa2VyMjR0"><FaInstagram/></a>,
    },
    {
       header: <div>
        <p className={`${antonio.className} text-[#2C2C2C] text-6xl lg:text-7xl`}>
            <b>
           EDUCATE
           </b>
        </p>
        <p className={`${antonio.className} text-[#2C2C2C] text-6xl lg:text-7xl py-4` }>
            <b>
            ASPIRE
            </b>
        </p>
        <p className={`${antonio.className} text-[#2C2C2C] text-6xl lg:text-7xl`}>
            <b>
            INSPIRE
            </b>
        </p>

       </div>
      
    },
    {
        header: <>
        
        <p class='uppercase tracking-[2px] lg:text-lg' >
        We kicked off our journey in the world of social media management on April 24, 2023. We've taken our name from the lucky clover, inspired by our four enthusiastic co-founders, each symbolizing one of its leaves. With mottos like <b>"Never run out of Luck with Clover"</b>  and <b>"Unleashing Imagination with Strategic Brilliance,"</b>  we're here to tap into the ever-expanding realm of social media                </p>
            </>

    },
];

export default BentoGridDemo;
