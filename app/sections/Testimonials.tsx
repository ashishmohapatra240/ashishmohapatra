"use client";

import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";
import Image from "next/image";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">Testimonials</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                These people are{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer working"
                  width={400}
                  height={400}
                />{" "}
                flat earth believers
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-[16px] md:text-[18px] tracking-tight leading-relaxed mt-6">
          People have said things, some of it was good and some of it was just “bro wtf.” These are messages from my manager, clients, seniors and people I’ve worked with, people who have made me realise why Slack communications are called Huddle (Hurdle). I would want my mother in law to be a software developer, so that I could call her my SaaS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-[#E5E5E5] rounded-[24px] p-6 duration-300"
            >
              {/* Testimonial Text */}
              <p className="text-gray-700 text-[16px] leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E5E5E5] flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium text-[16px]">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-[14px]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
