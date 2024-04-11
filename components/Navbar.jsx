"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@app/util/cn";



export default function NavBarComponent({ className }) {
  const [active, setActive] = useState(null);
  return (
    <>
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <HoveredLink href="/">
        <div className="grid grid-cols-4">
          <img src="/img/logo.png" alt="" className="col-span-1 h-15 w-10" />
        <span className="text-[#2C2C2C] font-semibold col-span-3">
       CLOVER CREATIVE
       </span>
        </div>
     
      </HoveredLink>
      <HoveredLink href="/">Home</HoveredLink>
      <HoveredLink href="/about">About</HoveredLink>
      <HoveredLink href="/service">Services</HoveredLink>
      <HoveredLink href="/contact">Contact US</HoveredLink>
      <HoveredLink href="/faq">FAQ</HoveredLink>
      </Menu>
    </div>
    </>
  );
}
