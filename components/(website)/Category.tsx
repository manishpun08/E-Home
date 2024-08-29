import React from "react";
import img1 from "@/public/category/1.jpg";
import img2 from "@/public/category/2.jpg";
import img3 from "@/public/category/3.jpg";
import img4 from "@/public/category/4.jpg";
import img5 from "@/public/category/5.jpg";
import { IconRightArrow } from "../svg/IconRightArrow";
import Image from "next/image";

const categoryList = [
  {
    id: "01",
    title: "Rug Mattress",
    image: img1,
  },
  {
    id: "02",
    title: "Bedsheets",
    image: img2,
  },
  {
    id: "03",
    title: "Sofa and cushion cover",
    image: img3,
  },
  {
    id: "04",
    title: "Clothes Hangers",
    image: img4,
  },
  {
    id: "05",
    title: "Other Decor products",
    image: img5,
  },
  {
    id: "06",
    title: "Sofa and cushion cover",
    image: img3,
  },
];

export const Category = () => {
  return (
    <div className="grid grid-cols-12 gap-0">
      {categoryList.map((category, index) => {
        if (index % 3 === 0) {
          return (
            <div key={category.id} className="col-span-12 relative group">
              <Image
                src={category.image.src} // Access the image source correctly
                alt={category.title}
                width={500}
                height={300}
                className="w-full h-[80vh] object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

              <div className="grid">
                <div className="category-content absolute bottom-10 container left-0 ">
                  <p className="text-gradient text-4xl md:text-8xl font-PlusJakartaSans ">
                    {category.id}.
                  </p>
                  <p className=" text-2xl md:text-4xl font-Cinzel text-light">
                    {category.title}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-3xl  absolute bottom-10 font-Cinzel cursor-pointer text-light font-semibold right-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100  duration-400">
                  Explore <IconRightArrow />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={category.id} className="col-span-6 relative group">
              <Image
                src={category.image.src}
                alt={category.title}
                width={500}
                height={300}
                className="w-full h-90 object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

              <div className="grid">
                <div className="category-content absolute bottom-10 container left-0 ">
                  <p className="text-gradient text-4xl md:text-8xl font-PlusJakartaSans ">
                    {category.id}.
                  </p>
                  <p className="text-2xl md:text-4xl font-Cinzel text-light">
                    {category.title}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-3xl  absolute bottom-10 text-light font-semibold right-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 font-Cinzel transition-transform transition-opacity cursor-pointer duration-400">
                  Explore <IconRightArrow />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
