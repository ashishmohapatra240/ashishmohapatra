"use client";

import { Chip } from "@/components/ui/chip";
import { RoundedImage } from "@/components/ui/rounded-image";
import Image from "next/image";

export function HallOfFame() {
  return (
    <section className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Chip className="text-gray-700 mb-6">Hall of Fame</Chip>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[120%] font-sans font-normal tracking-tighter mb-6">
                Days where{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer working"
                  width={400}
                  height={400}
                />{" "}
                my competitors didn&apos;t perform well
              </h2>
            </div>
          </div>

          <p className="text-gray-600 text-[16px] md:text-[18px] tracking-tight leading-relaxed mt-6">
            Hosted a tech talk once, 80% of the audience stayed till the end,
            which is a higher retention rate than most of my apps. Attended 72
            scrum call meetings without saying a word, I was the scrum master.
          </p>
        </div>

        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          <div className="aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/1.png"
              alt="Team with trophy"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#24292F] rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/2.png"
              alt="Stage presentation"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 aspect-[2/1] bg-[#24292F] rounded-[32px] flex flex-col justify-center items-center text-white">
            <div className="text-[48px] font-medium leading-none">351+</div>
            <div className="text-[14px] font-medium">Open Mics and Shows</div>
          </div>
          <div className="aspect-squarerounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/3.png"
              alt="Team celebration"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/4.png"
              alt="Individual achievement"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-[32px] flex flex-col justify-center items-center bg-[#24292F] text-white">
            <div className="text-[48px] font-medium leading-none">15+</div>
            <div className="text-[14px] font-medium">Hackathons</div>
          </div>
          <div className="aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/5.png"
              alt="Group discussion"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/6.png"
              alt="Presentation screen"
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tablet Grid (3 columns) */}
        <div className="hidden sm:grid lg:hidden grid-cols-6 gap-4 auto-rows-[120px]">
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/1.png"
              alt="Team with trophy"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/2.png"
              alt="Stage presentation"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] flex flex-col justify-center items-center bg-[#24292F] text-white">
            <div className="text-[56px] font-medium leading-none">351+</div>
            <div className="text-[16px] font-medium">Open Mics and Shows</div>
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/3.png"
              alt="Team celebration"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 rounded-[32px] flex flex-col justify-center items-center bg-[#24292F] text-white">
            <div className="text-[56px] font-medium leading-none">15+</div>
            <div className="text-[16px] font-medium">Hackathons</div>
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/4.png"
              alt="Individual achievement"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/5.png"
              alt="Group discussion"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/6.png"
              alt="Presentation screen"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/7.png"
              alt="Final achievement"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Bento Grid (12 columns) */}
        <div className="hidden lg:grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
          {/* Top Row - Team Photo (spans 4 cols, 2 rows) */}
          <div className="col-span-4 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/1.png"
              alt="Team with trophy"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Row - Stage Photo (spans 4 cols, 2 rows) */}
          <div className="col-span-4 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/2.png"
              alt="Stage presentation"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Row - Hackathons Counter (spans 4 cols, 2 rows) */}
          <div className="col-span-4 row-span-2 rounded-[32px] flex flex-col justify-center items-center bg-[#24292F] text-white">
            <div className="text-[60px] xl:text-[80px] font-medium leading-none">
              351+
            </div>
            <div className="text-[18px] xl:text-[20px] font-medium">
              Open Mics and Shows
            </div>
          </div>

          {/* Middle Row - Team Photo 2 (spans 3 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/3.png"
              alt="Team celebration"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Row - Open Mics Counter (spans 6 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 bg-[#24292F] rounded-[32px] flex flex-col justify-center items-center text-white">
            <div className="text-[60px] xl:text-[80px] font-medium leading-none">
              15+
            </div>
            <div className="text-[18px] xl:text-[20px] font-medium">
              Hackathons
            </div>
          </div>

          {/* Middle Row - Individual Photo (spans 3 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/4.png"
              alt="Individual achievement"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Group Photo (spans 3 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/5.png"
              alt="Group discussion"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Screen Photo (spans 3 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/6.png"
              alt="Presentation screen"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Final Photo (spans 3 cols, 2 rows) */}
          <div className="col-span-6 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/7.png"
              alt="Final achievement"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - New Photo (spans 3 cols, 2 rows) */}
          <div className="col-span-3 row-span-2 rounded-[32px] overflow-hidden">
            <Image
              src="/images/hall-of-fame/8.png"
              alt="Additional achievement"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
