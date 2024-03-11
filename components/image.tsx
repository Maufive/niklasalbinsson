"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "utils/classnames";

type Props = {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
};

const BlurImage: React.FC<Props> = ({ src, alt, className, height, width }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "relative h-[330px] overflow-hidden rounded-lg sm:h-[350px] md:h-[380px] lg:h-[400px]",
        className,
      )}
    >
      <Image
        alt={alt}
        src={src}
        fill
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        className={cn(
          "rounded-lg object-contain shadow-lg duration-200 ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0",
        )}
      />
    </div>
  );
};

export default BlurImage;
