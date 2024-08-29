import React from "react";
import { Button } from "../ui/button";

const RugBanner4 = () => {
  return (
    <div>
      <div className=" bg-black py-8">
        <div className="container flex flex-col items-start justify-center py-4 md:pt-5 md:pb-20  text-4xl md:text-5xl">
          <h3 className="font-Cinzel text-light font-bold  pb-10 tracking-wide">
            We bring your family closer & <br />
            <span className="text-gradient">together</span>
          </h3>
          <Button className="font-Cinzel font-extrabold text-lg p-6">
            Buy Your Rug
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RugBanner4;
