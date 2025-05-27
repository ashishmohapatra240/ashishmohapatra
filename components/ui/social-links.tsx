import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: SiLeetcode, href: "#", label: "LeetCode" },
  { icon: FaMedium, href: "#", label: "Medium" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="rounded-full transition-colors w-[48px] h-[48px] flex items-center justify-center"
          aria-label={label}
        >
          <Icon className="w-6 h-6 hover:text-gray-700" />
        </a>
      ))}
    </div>
  );
}
