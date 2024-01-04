"use client";
import { motion } from "framer-motion";
import { Noto_Sans } from "next/font/google";
import { useState } from "react";
import Brand from "./brand";

const noto = Noto_Sans({ subsets: ["latin"], preload: true });

const SidebarTrigger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      whileHover={{
        textShadow: "rgba(110, 53, 174, 1) 4px 4px 10px ",
        fontWeight: "bold",
      }}
      onClick={() => setIsOpen(!isOpen)}
      className="absolute outline outline-primary outline-offset-2 outline-2 py-2 btn btn-primary top-4 -end-14 text-3xl w-16 h-fit leading-none"
      style={noto.style}
    >
      ネオン
    </motion.button>
  );
};
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`fixed z-50 p-4 shadow-primary ease-in-out duration-700 py-7 backdrop-blur-xl bg-black bg-opacity-25 transition-all w-64 border-r-2 border-purple-700 min-h-svh ${
        isOpen ? "start-0" : "-left-64"
      }
      ${isOpen ? "shadow-2xl" : ""}`}
    >
      <SidebarTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Brand />
      <ul className="mt-7">
        <li>
          <h2 className="divider divider-primary">Anime</h2>
          <ul>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
