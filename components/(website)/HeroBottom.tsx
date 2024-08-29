import React from "react";
import { Button } from "../ui/button";

const HeroBottom = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(#000000B2, #000000B2), url("/hero-carousel/hero2.png")',
        backgroundSize: "cover",
        // height: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        height: "606px",
      }}
    >
      <div className="container text-center p-5 flex flex-col justify-center items-center">
        <p className="leading-normal text-light text-4xl md:text-6xl font-Cinzel  pb-5 tracking-wide max-w-5xl">
          Upgrade the comfort of your sofa with our cozy cushions
        </p>
        <p
          style={{
            color: "#D9D6D6",
          }}
          className=" text-base md:text-xl font-PlusJakartaSans "
        >
          &quot;Enhance your sofa&apos;s comfort with our plush, cozy
          cushions.&quot;
        </p>
        <Button
          className="flex gap-2 uppercase font-Cinzel mt-8"
          style={{
            padding: "13.23px 26.47px",
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroBottom;
