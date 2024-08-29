import React from "react";
import type { SVGProps } from "react";

export function IconReply(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22px"
      height="18px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#E4A951"
        d="M19 19v-4q0-1.25-.875-2.125T16 12H6.825l3.6 3.6L9 17l-6-6l6-6l1.425 1.4l-3.6 3.6H16q2.075 0 3.538 1.463T21 15v4z"
      ></path>
    </svg>
  );
}
