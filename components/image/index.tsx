import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
        'aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-zinc-800 md:aspect-h-1 md:aspect-w-2',
        className || ''
      )}
    >
      <Image
        alt={alt}
        layout="fill"
        objectFit="cover"
        height={height}
        width={width}
        src={src}
        onLoadingComplete={() => setIsLoading(false)}
        loading="lazy"
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
      />
    </div>
  );
};

export default BlurImage;
