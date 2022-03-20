import { InfoIcon } from 'components/icons';

enum AsideVariants {
  INFO = 'info',
  WARNING = 'warning',
}

const Aside: React.FC<{ variant?: AsideVariants }> = ({
  variant,
  children,
}) => (
  <aside className="relative mx-auto mb-6 w-11/12 rounded-md bg-blue-600/20 p-8 bg-blend-screen shadow-lg">
    <div className="aside-icon absolute flex items-center justify-center overflow-visible rounded-full border-8 border-zinc-100 bg-blue-600/80 p-3 text-zinc-50 transition-colors dark:border-zinc-900">
      <InfoIcon className="h-7 w-7" />
    </div>
    <p>{children}</p>
  </aside>
);

export default Aside;
