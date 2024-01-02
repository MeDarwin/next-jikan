"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Brand from "../../components/brand";

const baseSlogan = "Watch anime,";
const sequence = [
  `${baseSlogan}\nLike never before.`,
  2000,
  `${baseSlogan}\nLike how you want it.`,
  2000,
  `${baseSlogan}\nLike how you deserve it.`,
  2000,
  `${baseSlogan}\nThe new way, Neo way.`,
  (el: HTMLElement | null) => {
    el!.classList.add("text-secondary");
    el!.style.textShadow = "rgba(110, 231, 183, .8) 0 0 20px";
  },
  6000,
  (el: HTMLElement | null) => {
    el!.classList.remove("text-secondary");
    el!.style.textShadow = "none";
  },
];

//TODO: make everything glow when last slogan is displayed
const SloganCard = () => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -200, opacity: 0 }}
      
      className="group whitespace-pre-line h-40 col-span-2 min-w-fit relative flex outline hover:outline-secondary outline-primary outline-offset-8 shadow-primary shadow-lg hover:shadow-2xl hover:shadow-secondary py-4 px-2 rounded-lg duration-700 transition-all ease-out"
    >
      <span className="after:block group-hover:after:bg-secondary after:w-1 after:h-full after:absolute after:bottom-0 after:-skew-x-12 after:left-32 after:shadow-lg after:shadow-secondary after:bg-primary"></span>
      <Brand />
      <h1 className="group-hover:text-secondary break-words transition-colors duration-100 ms-12 text-3xl italic font-semibold text-primary">
        <TypeAnimation
          sequence={sequence}
          deletionSpeed={80}
          className="text-5xl transition-all"
          repeat={Infinity}
          speed={50}
        />
      </h1>
    </motion.div>
  );
};

export default SloganCard;
