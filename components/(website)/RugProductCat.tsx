import React from "react";
import Image from "next/image";
import rugProduct1 from "@/public/rug/rugproduct1.jpg";
import rugProduct2 from "@/public/rug/rugproduct2.jpg";
import rugProduct3 from "@/public/rug/rugproduct3.jpg";
import rugProduct4 from "@/public/rug/rugproduct4.jpg";

import Link from "next/link";
import { Button } from "../ui/button";

const RugProduct = [
  {
    id: "01",
    title: "Hello",
    link: "#",
    image: rugProduct1,
  },
  {
    id: "02",
    title: "Stylish Rug",
    link: "#",
    image: rugProduct2,
  },
  {
    id: "03",
    title: "Comfort Rug",
    link: "#",
    image: rugProduct2,
  },
  {
    id: "04",
    title: "Comfort Rug",
    link: "#",
    image: rugProduct2,
  },
];

const RugProductCat = () => {
  return (
    <div className="rug-product-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {RugProduct.map((item) => (
          <div key={item.id} className="border-black relative group">
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover h-[80vh] w-full"
              />
            )}
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <Button className="font-Cinzel font-extrabold text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                View Product
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RugProductCat;
