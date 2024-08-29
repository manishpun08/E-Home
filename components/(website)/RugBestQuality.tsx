import Image from "next/image";
import React from "react";
import { IconWool } from "../svg/IconWool";
import { IconNeedle } from "../svg/IconNeedle";
import { IconPriceTag } from "../svg/IconPriceTage";

const RugBestQuality = () => {
  return (
    <div className="container ">
      <div className=" flex flex-col items-start justify-center mb-10">
        <h3 className="font-Cinzel text-light font-bold leading-loose md:py-4  text-4xl md:text-5xl tracking-wide">
          We Deliver the best <br />
          Rugs with best <span className="text-gradient">Quality</span>
        </h3>
        <p className="text-b3b3 font-PlusJakartaSans text-lg ">
          No compromise in the quality as we provide the best product with{" "}
          <br />
          best quality what are well tested and reviewed
        </p>
      </div>
      <div className="flex mb-10">
        <Image
          src="/rug/rugdetail1.jpg"
          width={456.9}
          height={362.33}
          alt="rug detail"
          className="max-w-full h-auto"
          style={{ maxHeight: "362.33px" }}
        />
        <div className="rugZoom flex justify-center items-center">
          <div
            className="ml-20"
            style={{
              border: "4.56px solid transparent",
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(90.73deg, #E9CE6E 1.69%, #B3873A 96.02%)",
              WebkitMaskImage: "linear-gradient(white, white)",
              maskImage: "linear-gradient(white, white)", // For Firefox support
            }}
          >
            <Image
              src="/rug/rugzoom.jpg"
              width={266.05}
              height={266.05}
              alt="rug detail"
              className="max-w-full h-auto rounded-full" // Ensure it's rounded
              style={{
                maxHeight: "266.05px",
                borderRadius: "50%",
                // objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="icon flex  gap-[59.21px] my-20">
        <div
          className="rugTwo flex flex-col gap-3.5"
          style={{
            width: "236.84px",
            height: "187.82px",
          }}
        >
          <IconWool />
          <p className="text-c3c3 text-lg font-medium font-PlusJakartaSans mt-10">
            We provide the best quality products with best materials.
          </p>
        </div>
        <div
          className="rugTwo flex flex-col gap-3.5"
          style={{
            width: "236.84px",
            height: "187.82px",
          }}
        >
          <IconNeedle />
          <p className="text-c3c3 text-lg font-medium font-PlusJakartaSans mt-10">
            We provide the best quality products with best materials.{" "}
          </p>
        </div>
        <div
          className="rugTwo flex flex-col gap-3.5"
          style={{
            width: "236.84px",
            height: "187.82px",
          }}
        >
          <IconPriceTag />
          <p className="text-c3c3 text-lg font-medium font-PlusJakartaSans mt-10">
            All our products are reasonable that fits the market.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RugBestQuality;
