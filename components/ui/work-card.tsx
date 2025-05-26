import Image from "next/image";
import { Chip } from "./chip";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Work } from "@/app/data/work";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-[18px] border border-[#E6E6E6] hover:shadow-sm transition-shadow flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
      <div className="relative w-full lg:w-[200px] h-[200px] lg:h-[240px] rounded-[16px] overflow-hidden flex-shrink-0">
        <Image
          src={work.image}
          alt={work.title}
          height={240}
          width={200}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-sans font-medium tracking-tighter mb-2 md:mb-0">
          {work.title}
        </h3>
        <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] mb-4 lg:mb-6 leading-relaxed">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
          {work.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
        <div className="flex flex-row gap-3 mt-auto">
          <button className="flex items-center justify-center xs:justify-start gap-2 px-4 py-2 border border-gray-200 rounded-[8px] text-[14px] sm:text-[16px] font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
            View details
          </button>

          <div className="flex gap-2 justify-center xs:justify-start">
            {work.githubUrl && (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50 transition-colors flex items-center justify-center"
                aria-label="View GitHub repository"
              >
                <FaGithub size={20} className="text-gray-600" />
              </a>
            )}

            {work.liveUrl && (
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50 transition-colors flex items-center justify-center"
                aria-label="View live project"
              >
                <FaExternalLinkAlt size={18} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
