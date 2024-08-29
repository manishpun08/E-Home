"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import rugDetail1 from "@/public/rug/rugdetail1.jpg";
import { Button } from "../ui/button";
import RugIncremeter from "./RugIncremeter";
import { IconActive } from "../svg/IconActive";

// Define the type for the rug detail
interface Rug {
  title: string;
  image: StaticImageData;
  description: string;
  previousPrice: string;
  price: string;
  features: string[]; // Array of features
}

const rugDetail: Rug[] = [
  {
    title: "Beautiful Turkish Rugs",
    image: rugDetail1,
    description:
      "Indulge in the lavish comfort and timeless elegance of our Soft Luxurious Turkish Design Rugs. Inspired by traditional Turkish motifs, these rugs feature sumptuously soft materials that invite you to sink your feet into luxurious comfort. Crafted with convenience in mind, our rugs are easily washable, allowing for hassle-free maintenance and ensuring they retain their beauty for years to come. Their lightweight construction makes them effortless to handle and move around your home, providing versatility in placement and decor.",
    previousPrice: "Rs. 2000",
    price: "Rs. 1700",
    features: [
      "2 years guaranty",
      "Best Materials",
      "Free exchange",
      "200 EVO points",
    ],
  },
];

const RugDetail = () => {
  return (
    <div className="container mx-auto relative py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Rug Detail Left Section */}
        <div className="rugDetail-left md:w-2/3">
          <h3 className="text-gradient font-Cinzel font-bold text-[32px] md:text-[40px]">
            {rugDetail[0].title}
          </h3>

          <Image
            src={rugDetail[0].image}
            alt="rugdetail"
            className=" max-w-full h-auto"
            style={{ maxWidth: "760px", maxHeight: "400px" }}
          />

          <p className="mt-4 font-PlusJakartaSans text-b3b3 text-[16px] font-medium">
            {rugDetail[0].description}
          </p>
        </div>

        {/* Checkout Section */}
        <div className="checkoutContent md:w-1/3 sticky top-56 text-light bg-card p-8 md:p-10 rounded-md shadow-md">
          <p className="font-Cinzel font-bold text-2xl mb-1">
            Beautiful Stylish Rugs
          </p>

          <div className="flex items-center my-2">
            <IconActive />
            <p className="text-dddd font-PlusJakartaSans text-[20px] font-light ml-2">
              In stock
            </p>
          </div>

          {/* dynamic features  */}
          <ul className="font-PlusJakartaSans text-sm mb-4 text-dddd font-light">
            {rugDetail[0].features.map((feature, index) => (
              <li key={index} className="py-1">
                - {feature}
              </li>
            ))}
          </ul>

          <div className="text-2xl font-PlusJakartaSans font-bold">
            <span className="text-gray-500 line-through">
              {rugDetail[0].previousPrice}
            </span>
            <span className="text-light ml-2">{rugDetail[0].price}</span>
          </div>

          {/* increment  */}
          <RugIncremeter />

          {/* buttons  */}
          <Button className="text-black font-Cinzel font-bold text-[16px] w-full my-4">
            Buy now
          </Button>
          <Button
            variant="outline"
            className="font-Cinzel font-bold text-[16px] w-full bg-inherit"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RugDetail;
