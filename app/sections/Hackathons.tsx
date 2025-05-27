"use client";

import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";
import { HackathonCard } from "@/components/ui/hackathon-card";
import { hackathons } from "@/app/data/hackathons";

export function Hackathons() {
  return (
    <section className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">Hackathons</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                I go to hackathons{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer at hackathon"
                  width={400}
                  height={400}
                />{" "}
                for the free T-shirts and Redbulls ofc
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-[16px] md:text-[18px] tracking-tight leading-relaxed mt-6">
          Always spent more time discussing team name than the actual product then end up making up a teamname with team members initials, once I had a team of Ashish, Swastik and Samikshya, the team name was terrible. We won a hackathon once because our app didn&apos;t crash during the demo, that&apos;s it, that was the innovation. We didn&apos;t write tests, but we did write a README. We never had a working backend, so we hardcoded the data, still better than some real startups. Took part in Hackathons so much that I love working under pressure because what&apos;s work when it&apos;s not done under pressure and delivers on time before time. So good at delivering before time that Zepto and Blinkit are fighting over me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </section>
  );
}
