import Image from "next/image";
import React from "react";
import rugImg1 from "@/public/category/rugimg1.jpg";
import rugImg2 from "@/public/category/rugimg2.jpg";
import rugImg3 from "@/public/category/rugimg3.jpg";

const rugCategoryList = [
  {
    id: "01",
    image: rugImg1,
  },
  {
    id: "02",
    image: rugImg2,
  },
  {
    id: "03",
    image: rugImg3,
  },
];
const RugCategory = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-0">
        {rugCategoryList.map((category, index) => {
          if (index % 3 === 0) {
            return (
              <div
                key={category.id}
                className="col-span-12  border-black relative group"
              >
                <Image
                  src={category.image.src} // Access the image source correctly
                  alt={category.id}
                  width={500}
                  height={300}
                  className="w-full h-[80vh] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
              </div>
            );
          } else {
            return (
              <div
                key={category.id}
                className="col-span-6 border-black relative group"
              >
                <Image
                  src={category.image.src}
                  alt={category.id}
                  width={500}
                  height={300}
                  className="w-full h-90 object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default RugCategory;
