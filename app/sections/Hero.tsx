import { Chip } from "@/components/ui/chip";
import { ClientReview } from "@/components/ui/client-review";
import { RoundedImage } from "@/components/ui/rounded-image";
import { SocialLinks } from "@/components/ui/social-links";

export function Hero() {
  return (
    <div className="bg-white max-w-6xl mx-auto">
      <div className="min-h-[80dvh] flex flex-col justify-center">
        <section className="w-full px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            <div>
              <Chip className="text-gray-700 mb-2">
                Hello I&apos;m Ashish Mohapatra 👋
              </Chip>

              <div className="space-y-4">
                <h1 className="text-[40px] md:text-[64px] lg:text-[72px] leading-[120%] font-sans font-normal tracking-tighter">
                  Build products with
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
      </div>

      <section className="min-h-[10dvh] w-full mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-10">
          <ClientReview />
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
