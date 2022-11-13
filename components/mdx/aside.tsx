import { InfoIcon } from 'components/icons';

const Aside: React.FC = ({ children }) => (
  <aside className="relative mx-auto mb-6 w-full rounded-xl bg-blue-700 p-4 bg-blend-screen shadow-lg">
    <div className="aside-icon absolute flex items-center justify-center overflow-visible rounded-full border-8 border-zinc-100 bg-blue-700 p-3 text-zinc-50 transition-colors dark:border-zinc-900">
      <InfoIcon className="h-7 w-7" />
    </div>
    <article className="text-base text-white">{children}</article>
  </aside>
);

export default Aside;
