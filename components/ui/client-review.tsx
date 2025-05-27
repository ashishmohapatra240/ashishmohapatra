import Image from "next/image";

const clientImages = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
];

export function ClientReview() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex -space-x-2">
        {clientImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Client ${index + 1}`}
            width={120}
            height={120}
            className="rounded-full border-2 border-white w-[40px] h-[40px]"
          />
        ))}
      </div>
      <p className="font-medium text-[8px] sm:text-[14px] md:text-[16px] max-w-[120px] md:max-w-[340px] ml-6">
        Trusted by over <span className="font-bold">30+</span> clients all over
        the world
      </p>
    </div>
  );
}
