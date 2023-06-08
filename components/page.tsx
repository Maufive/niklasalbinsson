import { FC } from 'react';
import Image from 'next/image';
import DesktopBackground from 'public/images/bgs/glow-homepage-desktop.webp';
import TabletBackground from 'public/images/bgs/glow-homepage-tablet.webp';
import MobileBackground from 'public/images/bgs/glow-homepage-mobile.webp';

const Page: FC = ({ children }): JSX.Element => (
  <main className="relative ">
    <div className="absolute -top-16 -z-10 flex w-full justify-center overflow-hidden lg:-top-20">
      <Image
        alt="abstract background image"
        src={MobileBackground}
        className="max-w-none opacity-30 sm:hidden"
      />
      <Image
        alt="abstract background image"
        src={TabletBackground}
        className="hidden max-w-none opacity-30 sm:block lg:hidden"
      />
      <Image
        alt="abstract background image"
        src={DesktopBackground}
        className="hidden max-w-none opacity-30 lg:block"
      />
    </div>
    <section className="mx-auto w-full max-w-2xl space-y-12 px-4 py-6 sm:pt-28 md:px-0 2xl:space-y-32">
      {children}
    </section>
  </main>
);

export default Page;
