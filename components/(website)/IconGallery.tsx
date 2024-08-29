import React from "react";
import type { SVGProps } from "react";

export function IconGallery(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="none"
        stroke="#9F9F9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M31.315 12.123a4.465 4.465 0 1 1 0 8.93a4.465 4.465 0 0 1 0-8.93m-11.294 8.909l7.224 7.223a.7.7 0 0 0 .992 0l1.383-1.383a.7.7 0 0 1 .993 0l7.807 7.807a.702.702 0 0 1-.497 1.198H10.076a.702.702 0 0 1-.577-1.101l9.45-13.648a.702.702 0 0 1 1.072-.097Z"
      ></path>
      <path
        fill="none"
        stroke="#9F9F9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"
      ></path>
    </svg>
  );
}
