import React from "react";
import type { SVGProps } from "react";

export function IconRightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="m12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243l-1.414 1.415L13.88 11H6.343v2h7.537z"></path>
        <path
          fillRule="evenodd"
          d="M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556s-11.26-4.296-15.556 0s-4.296 11.26 0 15.556s11.26 4.296 15.556 0m-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
