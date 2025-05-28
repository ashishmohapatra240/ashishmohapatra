"use client";

import Image from "next/image";
import { experiences } from "../data/work-experience";

export function WorkExperience() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] font-sans font-medium tracking-tighter mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-[16px]"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 overflow-hidden flex items-center justify-center">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-medium mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-[16px] md:text-[18px] mb-2">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-[14px] md:text-[16px] font-medium">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
