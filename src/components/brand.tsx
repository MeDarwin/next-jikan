"use client";
import Link from "next/link";
import { useState } from "react";

// TODO: Add hover effect glow animation
const Brand = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h1
      className="w-fit transition-all text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      style={{
        textShadow: isHovered ? "rgba(110, 231, 183,.8) 0 0 20px" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/">
        Neo<span className="block">Nime.</span>
      </Link>
    </h1>
  );
};

export default Brand;
