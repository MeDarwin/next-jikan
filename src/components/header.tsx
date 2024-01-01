"use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Brand from "./brand";

const links = ["Anime", "Manga", "Magazine"];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`flex transition-all ease-out z-40 duration-1000 ps-20 pe-6 py-4 pb-2 h-24 min-h-fit fixed backdrop-blur-sm outline outline-primary outline-offset-4 flex-row items-center
      ${isOpen ? "w-full" : "w-[26rem]"}
      ${isOpen ? "rounded-none" : "rounded-br-3xl"}`}
    >
      <Brand />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="4x"
        rotation={isOpen ? 180 : undefined}
        onClick={() => setIsOpen(!isOpen)}
        // TODO: More advanced fade animation (neon blinking)
        // fade
        className="transition-all ms-auto order-last text-primary hover:cursor-pointer"
      />
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`flex ml-auto gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}
        >
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{
                fontWeight: 800,
              }}
              onMouseEnter={({ currentTarget: { style } }) =>
                (style.textShadow = "rgba(115, 208, 185, .8) 0 0 15px")
              }
              onMouseLeave={({ currentTarget: { style } }) =>
                (style.textShadow = "none")
              }
              className="text-lg"
            >
              <Link href={`/${link.toLowerCase()}`}>{link}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </header>
  );
};

export default Header;
