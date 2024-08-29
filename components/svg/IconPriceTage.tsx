import React from "react";
import type { SVGProps } from "react";

export function IconPriceTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54.09px" // Same width as IconWool
      height="53.44px" // Same height as IconWool
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <linearGradient
          id="pricetagGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="1.69%"
            style={{ stopColor: "#E9CE6E", stopOpacity: 1 }}
          />
          <stop
            offset="96.02%"
            style={{ stopColor: "#B3873A", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#pricetagGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={14.1}
        d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8"
      ></path>
      <path
        fill="currentColor"
        d="M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
      ></path>
    </svg>
  );
}
