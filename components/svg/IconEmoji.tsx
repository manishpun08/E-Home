import React from "react";
import type { SVGProps } from "react";

export function IconEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#9F9F9F"
        d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m13.5-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M18.452 34.681A11.7 11.7 0 0 0 24 36a11.72 11.72 0 0 0 9.816-5.1a1.249 1.249 0 1 0-2.13-1.307A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907a1.248 1.248 0 1 0-2.13 1.307a11.7 11.7 0 0 0 4.269 3.781"
      ></path>
    </svg>
  );
}
