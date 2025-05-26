import Image from "next/image";

interface RoundedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function RoundedImage({ src, alt, width, height }: RoundedImageProps) {
  return (
    <div className="inline-block relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full inline-block mx-2 w-[100px] sm:w-[120px] md:w-[196px] h-auto"
      />
    </div>
  );
}
