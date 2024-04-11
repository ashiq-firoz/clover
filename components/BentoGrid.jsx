import React, { useState } from "react";
import styles from "../app/globals.css";
import { antonio } from "./ParallaxComponent";

const BentoComponent = () => {
  const [count, setCount] = useState(0);

  const handleHover = () => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === 10) {
        counter = 110;
      }
      if (counter <= 110) {
        setCount(counter);
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <>

      <div className="container bg-neutral-200 py-8 mx-auto px-8 ">
        <div className="mb-4 md:col-span-2 lg:col-span-2 lg:row-span-1">
          <p>

          </p>
        </div>
        <div className="grid grid-cols-6  lg:grid-cols-3 gap-5 grid-flow-row-dense">
          <div className="mb-4 col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden hover:transform hover:scale-105 transition-transform">
            <div className="h-full bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <img
                src="/img/avneeth.webp"
                alt=""
                className="w-full h-full object-cover rounded-xl"
                onMouseEnter={handleHover}
              />
            </div>
          </div>
          <div className="mb-4 col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden hover:transform hover:scale-105 transition-transform">
            <div className="h-full bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <img
                src="/img/catherine.webp"
                alt=""
                className="w-full h-full object-cover rounded-xl"
                onMouseEnter={handleHover}
              />
            </div>
          </div>
          <div className="mb-4 col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden hover:transform hover:scale-105 transition-transform">
            <div className="h-full   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <img
                src="/img/Siyona.webp"
                alt=""
                className="w-full h-full object-cover rounded-xl"
                onMouseEnter={handleHover}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 grid gap-4 grid-cols-6">
        <div className="col-span-2">
          <span className={`${antonio.className} text-[8vh]  lg:text-[10vh] `}>
            <b>CLOVER VISION</b>
          </span>
        </div>
        <div className="col-span-4 px-8 lg:px-0">
          <p className={`${antonio.className} text-xl font-bold`}>
            We're on a mission to transform your online presence into an
            engaging, memorable, and relatable experience. Our focus is to bring
            creativity and strategy together in a way that helps your brand shine.
            We believe in a future where your social media is a hub of authentic
            connections, unique content, and continuous growth

          </p>
        </div>
      </div>



      <div className="p-8 grid grid-cols-4 bg-[#D2E7D0]">
        <div className="col-span-1">
          <span className="text-black text-[3vh] lg:text-[5vh] font-extrabold">OUR TEAM HAS WORKED WITH
          </span>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-2">
              <img src="/img/clients/talea.png" className="rounded-md" alt="" />
            </div>
            <div className="col-span-2">
              <img src="/img/clients/wicked.png" className="rounded-md" alt="" />
            </div>
            <div className="col-span-2">
              <img src="/img/clients/horse.png" className="rounded-md" alt="" />
            </div>

            <div className="col-span-2">
              <img src="/img/clients/artduabi.png" className="rounded-md" alt="" />
            </div>
            <div className="col-span-2">
              <img src="/img/clients/h&h.png" className="rounded-md" alt="" />
            </div>
            <div className="col-span-2">
              <img src="/img/clients/motrino.png" className="rounded-md" alt="" />
            </div>

            <div className="col-span-2">
              <img src="/img/clients/3horses.png" className="rounded-md" alt="" />
            </div>
            <div className="col-span-2">
              <img src="/img/clients/vic.png" className="rounded-md" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BentoComponent;
