import React from "react";
import type { SVGProps } from "react";

export function IconPrice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="1.69%" stopColor="#E9CE6E" />
          <stop offset="96.02%" stopColor="#B3873A" />
        </linearGradient>
      </defs>
      <path
        fill="url(#priceGradient)" // Apply the gradient fill here
        d="M6.5 14.975v-1H4v-2h5v-2H5q-.425 0-.712-.287T4 8.975v-4q0-.425.288-.712T5 3.975h1.5v-1h2v1H11v2H6v2h4q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287H8.5v1zm7.45 6l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z"
      ></path>
    </svg>
  );
}
