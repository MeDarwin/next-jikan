"use client";
import {
  faDesktop,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SuggestionButton = () => {
  const router = useRouter();
  return (
    <>
      <motion.button
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        onClick={() => router.push("/")}
        className="relative group btn btn-primary px-10 shadow-2xl hover:h-72 transition-all ease-out duration-700"
      >
        <span className="-translate-x-3 group-hover:translate-x-0 group-hover:-translate-y-20 group-hover:text-4xl duration-300 transition-all ease-out">
          Watch now
        </span>
        <span className="absolute translate-x-12 group-hover:translate-x-0 group-hover:translate-y-5 group-hover:scale-[8] duration-500 transition-all ease-out">
          <FontAwesomeIcon icon={faDesktop} />
        </span>
      </motion.button>
      <motion.button
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: "100%" }}
        onClick={() => router.push("/nsfw")}
        className="relative group btn btn-primary px-10 shadow-2xl hover:h-72 transition-all ease-out duration-700"
      >
        <span className="-translate-x-3 group-hover:translate-x-0 group-hover:-translate-y-20 group-hover:text-4xl duration-300 transition-all ease-out">
          NSFW
        </span>
        <span className="absolute translate-x-8 group-hover:translate-x-0 group-hover:translate-y-5 group-hover:scale-[8] duration-500 transition-all ease-out">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
      </motion.button>
    </>
  );
};

export default SuggestionButton;
