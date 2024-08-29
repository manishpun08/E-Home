import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  return (
    <div>
      <div className="container mb-20">
        <div className="my-10">
          <h3 className="font-Cinzel text-light font-bold leading-loose md:py-4  text-4xl md:text-5xl tracking-wide">
            NEVER MISS A CHANCE TO
            <br />
            KNOW OUR NEW <span className="text-gradient">ADD-ONS</span>
          </h3>
        </div>
        <div className="bg-C1C1C flex ">
          <div className="left">
            <Image
              src="/rug/Add.png"
              width={665}
              height={533}
              alt="rug detail"
              className="max-w-full h-auto "
              style={{
                maxHeight: "533px",
              }}
            />
          </div>

          <div className="right flex flex-col justify-center  max-w-lg mx-auto">
            <h3 className="text-gradient font-Cinzel font-normal text-5xl">
              SUBSCRIBE US!
            </h3>
            <p className="font-PlusJakartaSans font-light text-lg text-b3b3 py-4">
              To stay updated on our latest products, news, and trends. Don’t
              worry, we won’t spam you!
            </p>

            <Input
              type="email"
              placeholder="enter your email here"
              className="text-[#B3B3B340] w-[90%]"
              style={{
                background: "#1C1C1C",
                border: "none",
                borderBottom: "1px solid #ccc",
              }}
            />

            <Button
              style={{
                letterSpacing: "17.5%",
                background:
                  "linear-gradient(90.73deg, rgba(233, 206, 110, 0.5) 1.69%, rgba(179, 135, 58, 0.5) 96.02%)",
              }}
              className="font-semibold text-[16px] text-light font-Cinzel w-[90%] my-4"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
