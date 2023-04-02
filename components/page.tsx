import { FC } from 'react';

const Page: FC = ({ children }): JSX.Element => (
  <main className="relative mx-auto w-full max-w-2xl space-y-20 px-4 py-6 sm:pt-28 md:px-0 2xl:space-y-32">
    {children}
  </main>
);

export default Page;
