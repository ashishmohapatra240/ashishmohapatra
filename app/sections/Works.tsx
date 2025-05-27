"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";
import { WorkCard } from "@/components/ui/work-card";
import { works, categoryDescriptions } from "@/app/data/work";

type Category =
  | "featured"
  | "web"
  | "app"
  | "ui-ux"
  | "3d-motion"
  | "video"
  | "graphics";

const categories: { id: Category; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "3d-motion", label: "3D and Motion" },
  { id: "video", label: "Video" },
  { id: "graphics", label: "Graphics" },
];

export function Works() {
  const [activeCategory, setActiveCategory] = useState<Category>("featured");

  const filteredWorks = works.filter(
    (work) => work.category === activeCategory
  );

  return (
    <section className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">Works</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                If work is worship{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer working"
                  width={400}
                  height={400}
                />{" "}
                I&apos;m an atheist
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-[16px] md:text-[18px] tracking-tight leading-relaxed mt-6">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by skills"
              className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-[12px] text-[16px]"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-2 py-1 rounded-[8px] text-[14px] font-normal transition-colors ${
                activeCategory === category.id
                  ? "bg-[#F5F5F5] text-[#24292F] border border-[#E6E6E6]"
                  : "bg-white text-[#24292F] border border-[#E6E6E6] hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-[18px]">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
