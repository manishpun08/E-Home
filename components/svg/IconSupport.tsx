import React from "react";
import type { SVGProps } from "react";

export function IconSupport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="1.69%" stopColor="#E9CE6E" />
          <stop offset="96.02%" stopColor="#B3873A" />
        </linearGradient>
      </defs>
      <path
        fill="url(#supportGradient)" // Apply the gradient fill here
        d="m10.155 14.773l-.009-.021a7 7 0 0 1-.402-.123l-.01-.004A7 7 0 0 1 5 8a7 7 0 0 1 13.96-.749c.044.412-.296.749-.71.749s-.745-.338-.8-.748a5.501 5.501 0 1 0-7.279 5.937a2 2 0 0 1 3.829.81a2 2 0 0 1-3.845.774m-1.025 1.23a8.5 8.5 0 0 1-3.136-1.988a2.25 2.25 0 0 0-1.99 2.234v.92c0 .572.178 1.13.51 1.596C6.056 20.929 8.58 22 12 22s5.945-1.072 7.49-3.235a2.75 2.75 0 0 0 .513-1.599v-.918a2.25 2.25 0 0 0-2.248-2.25H15.5a3.5 3.5 0 0 1-6.37 2.004M16 8a4 4 0 0 0-1.431-3.066a4 4 0 1 0-4.811 6.379A3.5 3.5 0 0 1 12 10.5c.853 0 1.635.305 2.243.813A4 4 0 0 0 16 8"
      ></path>
    </svg>
  );
}
