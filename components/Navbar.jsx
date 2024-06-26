"use client"
import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@app/util/cn";

export default function NavBarComponent({ className }) {
  const [active, setActive] = useState(null);
 
  return (
    <>
      <div className={cn("fixed top-2  inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
        <Menu setActive={setActive}>
          <HoveredLink href="/">
            <div className="flex items-center">
              <img src="/img/logo.png" alt="" className="h-15 w-10" />
              <span className="text-[#2C2C2C] font-semibold hidden sm:block">
                CLOVER CREATIVE
              </span>
            </div>
          </HoveredLink>
          <HoveredLink href="/about">
            {/* Display "About" on small screens */}
            <span className="sm:hidden">About</span>
            {/* Display "About Us" on larger screens */}
            <span className="hidden sm:inline">About Us</span>
          </HoveredLink>
          <HoveredLink href="/service">Services</HoveredLink>
          <HoveredLink href="/contact">Book</HoveredLink>
          <HoveredLink href="/faq">FAQ</HoveredLink> 
        </Menu>
      </div>
    </>
  );
}
