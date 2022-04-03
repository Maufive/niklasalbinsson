import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  src: string;
  alt: string;
};

const BlurImage: React.FC<Props> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={alt}
        layout="fill"
        objectFit="cover"
        src={src}
        onLoadingComplete={() => setIsLoading(false)}
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
