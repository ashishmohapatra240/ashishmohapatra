"use client";

import Image from "next/image";
import { education } from "@/app/data/education";

export function Education() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] font-sans font-medium tracking-tighter mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-[16px]"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 overflow-hidden flex items-center justify-center">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-medium mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-[16px] md:text-[18px] mb-2">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[14px] md:text-[16px] font-medium block">
                      {edu.duration}
                    </span>
                    {edu.grade && (
                      <span className="text-[14px] md:text-[16px] block mt-1">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
