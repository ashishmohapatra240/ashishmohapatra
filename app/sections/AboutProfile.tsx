"use client";

import Image from "next/image";

export function AboutProfile() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] font-sans font-medium tracking-tighter mb-8">
              Meet the Developer Ashish
            </h2>

            <div className="space-y-6 text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
              <p>
                A creative full-stack developer who thinks he&apos;s good at
                problem solving, design and being a stand-up comic. At the end
                of 2022, I quit my job as a software engineer to go fulltime
                into building and scaling my own SaaS businesses.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden">
              <Image
                src="/images/about/team-photo.png"
                alt="Ashish with team"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
