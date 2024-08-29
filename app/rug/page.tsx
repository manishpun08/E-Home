import RugBanner1 from "@/components/(website)/RugBanner1";
import RugBanner2 from "@/components/(website)/RugBanner2";
import RugBanner3 from "@/components/(website)/RugBanner3";
import RugBanner4 from "@/components/(website)/RugBanner4";
import RugBanner5 from "@/components/(website)/RugBanner5";
import RugBannerPhoto from "@/components/(website)/RugBannerPhoto";
import RugCategory from "@/components/(website)/RugCategory";
import RugHero from "@/components/(website)/RugHero";
import RugProductCat from "@/components/(website)/RugProductCat";
import RugVideo from "@/components/(website)/RugVideo";
import React from "react";

const page = () => {
  return (
    <div>
      <RugHero />
      <RugCategory />
      <RugBanner1 />
      <RugVideo />
      <RugBanner2 />
      <RugProductCat />
      <RugBanner3 />
      <RugBannerPhoto />
      <RugBanner4 />
      <RugBanner5 />
    </div>
  );
};

export default page;
