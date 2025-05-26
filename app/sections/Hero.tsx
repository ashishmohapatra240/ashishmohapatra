import { Chip } from "@/components/ui/chip";
import { ClientReview } from "@/components/ui/client-review";
import { RoundedImage } from "@/components/ui/rounded-image";
import { SocialLinks } from "@/components/ui/social-links";

export function Hero() {
  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      <section className="mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
          <div>
            <Chip className="text-gray-700 mb-2">
              Hello I&apos;m Ashish Mohapatra 👋
            </Chip>

            <div className="space-y-4">
              <h1 className="text-[40px] md:text-[64px] lg:text-[72px] leading-[120%] font-sans font-normal tracking-tighter">
                cracked developer,
                <br />
                builds product with
                <br />
                clean and{" "}
                <RoundedImage
                  src="/images/hero/ashish.png"
                  alt="Developer"
                  width={600}
                  height={600}
                />
                <br />
                maintainable code
              </h1>
            </div>
          </div>

          {/* Right Side - 3D Element Placeholder */}
          <div className="hidden lg:block"></div>
        </div>
      </section>

      <section className="mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <ClientReview />
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
