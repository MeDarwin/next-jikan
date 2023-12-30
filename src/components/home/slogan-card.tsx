"use client";
import Brand from "../brand";
import ClientTypeAnimation from "../client-type-animation";

const sequence = [
  "Like never before.",
  2000,
  "Like how you want it.",
  2000,
  "Like how you like it.",
  2000,
  "Like how you deserve it.",
  2000,
  "The new way, Neo way.",
  2000,
  (el) => {
    console.log(el);
  },
];

const SloganCard = () => {
  return (
    <div className="group h-40 col-span-2 min-w-fit relative flex transition-all duration-300 outline hover:outline-secondary outline-primary outline-offset-8 shadow-primary shadow-lg hover:shadow-2xl hover:shadow-secondary py-4 px-2 rounded-lg">
      <span className="after:block group-hover:after:bg-secondary after:w-1 after:h-full after:absolute after:bottom-0 after:-skew-x-12 after:left-32 after:shadow-lg after:shadow-secondary after:bg-primary"></span>
      <Brand />
      {/* //TODO: On hover each sentence staggers */}
      <h1 className="group-hover:text-secondary break-words transition-colors duration-100 ms-12 text-3xl italic font-semibold text-primary">
        <span className="block break-normal not-italic">Watch anime,</span>
        <ClientTypeAnimation
          sequence={sequence}
          deletionSpeed={80}
          className="text-5xl"
          repeat={Infinity}
          speed={50}
        />
      </h1>
      {/* //TODO: Image below the quote */}
    </div>
  );
};

export default SloganCard;
