import React from "react";

const RugHero = () => {
  return (
    <div
      className="flex h-[78vh] items-center justify-center w-full bg-contain bg-no-repeat relative"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 37.95%, rgba(0, 0, 0, 0.9) 85.62%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url("/rug/rughero1.jpg")
        `,
      }}
    >
      <div className="container absolute md:bottom-28 left-5">
        <p className="leading-normal  text-light text-xl  md:text-5xl font-Cinzel font-bold  tracking-wide max-w-6xl ">
          Turn Your House into a Heartfelt Haven. Fill Your Home with Love and
          Warmth.
        </p>
      </div>
    </div>
  );
};

export default RugHero;
