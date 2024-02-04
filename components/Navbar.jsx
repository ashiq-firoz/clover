'use client'

import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBarComponent = () => {
    const ref = useRef(null);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolling(offset > 50); // Adjust the offset value as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 bg-white backdrop-filter  bg-opacity-0 w-full transition-transform duration-[500ms] ${scrolling ? '-translate-y-16' : ''
                }`}
        >
            <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex items-center justify-between h-16">
    <span className="text-2xl text-gray-900 font-semibold sm:flex hidden">
      <Image
          src='/img/logo2.png'
          alt='CLOVER'
          width={250}
          height={250}
          className='object-contain'
        />
    </span>
    <span className="text-2xl text-gray-900 font-semibold sm:hidden">
      CLOVER
    </span>
    <div className="flex space-x-4 text-gray-900">
    <a
        href="#"
        className="link-container"
      >
        <span className="hover-text text-white font-consolas text-2xl">Home</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text text-white font-consolas text-2xl">About</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text text-white font-consolas  text-2xl">Services</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text text-white font-consolas  text-2xl">Contacts</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text text-white font-consolas  text-2xl">FAQs</span>
      </a>
    </div>
  </div>
</div>


        </nav>
    );
};

export default NavBarComponent;