import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import rugShop1 from "@/public/rug/rugshop1.jpg";
import rugShop2 from "@/public/rug/rugshop2.png";
import rugShop3 from "@/public/rug/rugshop3.jpg";

const rugShopList = [
  {
    image: rugShop1,
    title: "Beautiful Sofa",
    previousPrice: "Rs. 2000",
    price: "Rs. 1700",
  },
  {
    image: rugShop2,
    title: "Comfortable Pillow",
    previousPrice: "",
    price: "Rs. 1800",
  },
  {
    image: rugShop3,
    title: "Turkish Rugs",
    previousPrice: "",
    price: "Rs. 1700",
  },
];

const RugBanner5 = () => {
  return (
    <div className="bg-black border-b border-gray-800 pb-10">
      <div className="container mx-auto px-4 pb-10">
        <h3 className="font-Cinzel text-light font-extrabold leading-loose text-4xl md:text-5xl tracking-wide">
          SEE OUR RUGS THAT WILL <br />
          ELEVATE YOUR <span className="text-gradient">HOUSE</span>
        </h3>
        <p className="py-8 text-gray-400">
          Explore our rugs and find the best product to elevate your house
        </p>

        {/* Image Section */}
        <div className="flex flex-wrap justify-between">
          {rugShopList.map((item, index) => (
            <div
              key={index}
              className="rug-card bg-[#1C1913] p-4 rounded-md shadow-md flex flex-col"
              style={{ width: "350px" }} // Set a fixed width for each card
            >
              <Image
                src={item.image}
                width={350}
                height={242}
                alt={item.title}
                className="object-cover h-[242px] rounded-md" // Fixed height for images
              />
              <div className="pt-4 flex justify-between items-center">
                <div className="rug-left">
                  <p className="text-light font-PlusJakartaSans text-lg font-bold">
                    {item.title}
                  </p>
                  <p className="text-light pt-2 font-Montserrat text-lg font-bold">
                    <del className="text-gray-600">{item.previousPrice}</del>
                    {item.price}
                  </p>
                </div>
                <div className="rug-right">
                  <Button className="text-light text-xl">+</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RugBanner5;
