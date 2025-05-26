import { Hero } from "@/app/sections/Hero";
import { Works } from "@/app/sections/Works";
import { Hackathons } from "@/app/sections/Hackathons";
import { Skills } from "./sections/Skills";
import { HallOfFame } from "@/app/sections/HallOfFame";
import { Testimonials } from "@/app/sections/Testimonials";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Works />
      <Hackathons />
      <Skills />
      <HallOfFame />
      <Testimonials />
      <Footer />
    </main>
  );
}
