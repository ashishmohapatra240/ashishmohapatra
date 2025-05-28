import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="bg-[#24292F] border-t border-[#E5E5E5] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[24px] font-sans font-medium tracking-tighter mb-4">
              Ashish Mohapatra
            </h3>
            <p className="text-white text-[16px] leading-relaxed mb-6 max-w-md">
              Full-stack developer building products end to end. From
              user-centric UI to scalable backend solutions.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[18px] font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#hackathons"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Hackathons
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[18px] font-medium mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ashishmohapatra240@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ashishmohapatra240@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918249412044"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +91 8249412044
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#E5E5E5]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-[14px]">
            © 2025 Ashish Mohapatra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#readme"
              className="text-white/80 hover:text-white text-[14px] transition-colors"
            >
              Readme
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
