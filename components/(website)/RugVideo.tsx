import React from "react";
import Image from "next/image";

const RugVideo = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
        style={{ background: "#00000099" }}
      ></div>

      {/* Image */}
      <Image
        src="/rug/rugbanner1.jpg"
        width={1000}
        height={200}
        alt="rug-video"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RugVideo;
