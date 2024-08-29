import * as React from "react";
import carousel1 from "@/public/hero-carousel/hero.jpg";
import carousel2 from "@/public/hero-carousel/hero2.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { IconShop } from "./svg/IconShop";

const CarouselImages = [
  {
    carouselId: 1,
    img: carousel1,
  },
  {
    carouselId: 2,
    img: carousel2,
  },
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {CarouselImages.map(({ carouselId, img }) => (
          <CarouselItem key={carouselId}>
            <div className="w-full h-[90vh] md:h-[80vh] overflow-hidden relative">
              <Image
                width={2000}
                height={1000}
                src={img}
                alt={`slider-${carouselId}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70" />
              {/* Gradient overlay */}

              <div className="container absolute z-10 top-1/4 left-4 md:left-10 text-center md:text-left">
                <p className="text-white leading-normal text-2xl md:text-5xl font-Cinzel font-normal pb-2 tracking-wide">
                  Elevate Your Comfort, <br />A Cushion for Every Need
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  We provide the best products that match your interest and
                  home. <br />
                  Let&apos;s get started with our product and your choice.
                </p>
                <Button
                  className="flex mt-5 md:mt-20 gap-2 uppercase font-Cinzel mx-auto md:mx-0"
                  style={{
                    padding: "10px 20px", // Adjust padding for button
                  }}
                >
                  <IconShop width={20} height={20} /> Buy Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute z-10  left-48 md:left-60  text-light bg-inherit" />
      <CarouselNext className="absolute z-10  left-60 md:left-72 text-light bg-inherit" />
    </Carousel>
  );
}
