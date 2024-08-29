import React from "react";
import type { SVGProps } from "react";

export function IconGif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#9F9F9F"
        d="M3 21V3h18v18zm4.5-7h3v-2h-1v1h-1v-2h2v-1h-3zm4 0h1v-4h-1zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3z"
      ></path>
    </svg>
  );
}
