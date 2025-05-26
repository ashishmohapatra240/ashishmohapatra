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

          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mt-6">
            I&apos;ve consistently built projects for over the past 3 years and
            can build a product end to end. From a user centric aesthetically
            good UI, to coding pixel perfect frontend, from writing secure API
            endpoints in backend, to deploying and scaling according to the
            users.
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
