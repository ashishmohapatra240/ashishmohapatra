"use client";

import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";
import { skillCategories } from "@/app/data/skills";

export function Skills() {
  return (
    <section className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">Skills</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                Endorsed by Myself{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer working"
                  width={400}
                  height={400}
                />{" "}
                on LinkedIn, Have 47 Tools, Uses 3
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

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-sans font-medium tracking-tighter text-gray-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Chip
                    key={skill}
                    className="text-gray-700 hover:bg-gray-200 transition-colors cursor-default"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
