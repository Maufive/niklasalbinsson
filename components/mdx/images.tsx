import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const RoundedImage: React.FC<Props> = ({ src, alt, ...rest }) => (
  <Image {...rest} className="rounded-lg" src={src} alt={alt} />
);

export default RoundedImage;
