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
       <span className="text-white font-semibold">

       CLOVER CREATIVE
       </span>
      </HoveredLink>
      <HoveredLink href="/">Home</HoveredLink>
      <HoveredLink href="/about">About</HoveredLink>
      <HoveredLink href="/service">Services</HoveredLink>
      <HoveredLink href="/contact">Contact US</HoveredLink>
      <HoveredLink href="#">FAQ</HoveredLink>
      </Menu>
    </div>
    </>
  );
}
