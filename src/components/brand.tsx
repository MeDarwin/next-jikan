"use client";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// TODO: Add hover effect glow animation
const Brand = () => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [scope, animate] = useAnimate<HTMLHeadingElement>();

  useEffect(() => {
    if (isHovered) {
      const enterGlowAnimation = async () => {
        await animate(
          scope.current,
          { textShadow: "rgba(110, 231, 183, .8) 0 0 20px" },
          { ease: "backOut" }
        );
      };
      enterGlowAnimation();
    } else {
      const exitGlowAnimation = async () => {
        await animate(scope.current, { textShadow: "none" });
      };
      exitGlowAnimation();
    }
  }, [animate, isHovered, scope]);

  return (
    <h1
      ref={scope}
      className="w-fit text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href="/">
        Neo<span className="block">Nime.</span>
      </Link>
    </h1>
  );
};

export default Brand;
