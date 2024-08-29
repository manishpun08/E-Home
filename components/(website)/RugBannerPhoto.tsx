import React from "react";
import Image from "next/image";

const RugBannerPhoto = () => {
  return (
    <div className="relative w-full h-[75vh]">
      {/* Image */}
      <Image
        src="/rug/rugbanner2.jpg"
        width={1000}
        height={200}
        alt="rug-video"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RugBannerPhoto;
