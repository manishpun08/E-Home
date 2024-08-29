import RugBestQuality from "@/components/(website)/RugBestQuality";
import { RugColorChoice } from "@/components/(website)/RugColorChoice";
import RugDetail from "@/components/(website)/RugDetail";
import RugTestimoni from "@/components/(website)/RugTestimoni";
import RugTestimoniBanner from "@/components/(website)/RugTestimoniBanner";
import Subscribe from "@/components/(website)/Subscribe";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <RugDetail />
      <RugBestQuality />
      <RugColorChoice />
      <div className="my-32">
        <RugTestimoniBanner />
        <RugTestimoni />
      </div>
      <Subscribe />
    </div>
  );
};

export default page;
