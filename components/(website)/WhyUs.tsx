import React from "react";
import { IconDelivery } from "../svg/IconDelivery";
import { IconBadge } from "../svg/IconBadge";
import { IconPrice } from "../svg/IconPrice";
import { IconSupport } from "../svg/IconSupport";

const WhyUs = () => {
  return (
    <div className="whyUs bg-black py-8">
      <div className="container flex flex-col items-center justify-center">
        <h3 className="font-Cinzel text-light text-center py-5 md:py-10 text-4xl md:text-5xl">
          Why Choose Us?
        </h3>
        <p className="text-afa font-PlusJakartaSans  text-center  md:text-lg max-w-5xl px-4">
          At Evo-nepal, we excel in transforming spaces into beautiful,
          functional art pieces. With over 500 projects completed, we
          consistently surpass our customers expectations. Our portfolio
          features diverse styles, from modern elegance to rustic charm,
          showcasing our dedication to quality and innovation.
        </p>

        <div className="flex justify-center md:gap-[80px] my-6">
          <div className="flex flex-col items-center">
            <IconDelivery width={70} height={80} />
            <span className="text-light font-PlusJakartaSans pt-4 text-sm text-center md:text-xl">
              Direct-to-Consumer
            </span>
          </div>

          <div className="flex flex-col items-center">
            <IconBadge width={70} height={80} />
            <span className="text-light font-PlusJakartaSans pt-4 text-sm text-center md:text-xl">
              Quality Product
            </span>
          </div>

          <div className="flex flex-col items-center">
            <IconPrice width={70} height={80} />
            <span className="text-light font-PlusJakartaSans pt-4 text-sm text-center md:text-xl">
              Reasonable Price
            </span>
          </div>

          <div className="flex flex-col items-center">
            <IconSupport width={70} height={80} />
            <span className="text-light font-PlusJakartaSans pt-4 text-sm text-center md:text-xl">
              Customer Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
