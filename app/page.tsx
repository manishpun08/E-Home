import { Category } from "@/components/(website)/Category";
import Hero from "@/components/(website)/Hero";
import HeroBottom from "@/components/(website)/HeroBottom";
import WhyUs from "@/components/(website)/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <WhyUs />
      <HeroBottom />
    </div>
  );
}
