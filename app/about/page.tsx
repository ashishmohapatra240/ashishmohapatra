import { AboutHero } from "@/app/sections/AboutHero";
import { AboutProfile } from "@/app/sections/AboutProfile";
import { WorkExperience } from "@/app/sections/WorkExperience";
import { Education } from "@/app/sections/Education";
import { Footer } from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutProfile />
      <WorkExperience />
      <Education />
      <Footer />
    </main>
  );
}
