import Image from "next/image";
import { Chip } from "./chip";
import { FaGithub, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import type { Hackathon } from "@/app/data/hackathons";

interface HackathonCardProps {
  hackathon: Hackathon;
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-[18px] border border-[#E6E6E6] hover:shadow-sm transition-shadow flex flex-col">
      <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden mb-4">
        <Image
          src={hackathon.image}
          alt={hackathon.title}
          fill
          className="object-cover"
        />
        {hackathon.award && (
          <div className="absolute top-3 right-3 bg-[#24292F] text-white px-2 py-1 rounded-[6px] text-[12px] font-medium flex items-center gap-1">
            <FaTrophy size={12} />
            {hackathon.award}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-sans font-medium tracking-tighter">
            {hackathon.title}
          </h3>
          <span className="text-[12px] text-gray-500 bg-gray-100 px-2 py-1 rounded-[6px] whitespace-nowrap">
            {hackathon.date}
          </span>
        </div>

        <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] mb-4 leading-relaxed flex-1">
          {hackathon.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="flex flex-row gap-3 mt-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-[8px] text-[14px] sm:text-[16px] font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap flex-1">
            View details
          </button>

          <div className="flex gap-2">
            {hackathon.githubUrl && (
              <a
                href={hackathon.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50 transition-colors flex items-center justify-center"
                aria-label="View GitHub repository"
              >
                <FaGithub size={20} className="text-gray-600" />
              </a>
            )}

            {hackathon.liveUrl && (
              <a
                href={hackathon.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50 transition-colors flex items-center justify-center"
                aria-label="View live project"
              >
                <FaExternalLinkAlt size={18} className="text-gray-600" />
              </a>
            )}

            {hackathon.devpostUrl && (
              <a
                href={hackathon.devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50 transition-colors flex items-center justify-center"
                aria-label="View on Devpost"
              >
                <SiDevpost size={18} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
