"use client";

import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";

export function AboutHero() {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">About</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                Get to know me{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Ashish Mohapatra"
                  width={400}
                  height={400}
                />{" "}
                where most times, I&apos;m not lying
              </h1>
            </div>
          </div>

          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mt-6 max-w-4xl">
            This is the part where I&apos;m supposed to talk about my journey, skills, and passion for tech and why should you not work with me.
          </p>
        </div>
      </div>
    </section>
  );
} 