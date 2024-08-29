import React from "react";
import type { SVGProps } from "react";

export function IconNeedle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54.09px" // Same width as IconWool
      height="53.44px" // Same height as IconWool
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <linearGradient id="needleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <g
        fill="none"
        stroke="url(#needleGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
      >
        <path d="M3 21Q2 20 14.785 4.291a3.5 3.5 0 1 1 5.078 4.791Q4.001 22 3 21M17.5 6.5l-1 1" />
        <path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11c-1.056 1.268-3.363 1.285-5.75.808m-4.511-1.383C4.346 14.86 2 13.5 2 12m17.5-2.5L21 11" />
      </g>
    </svg>
  );
}
