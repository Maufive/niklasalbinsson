import { InfoIcon } from "components/icons";

const Aside: React.FC = ({ children }) => (
  <aside className="relative mx-auto mb-6 w-full rounded-xl bg-primary px-12 py-8 bg-blend-screen shadow-lg">
    <div className="absolute top-[-8px] left-[-8px] flex items-center justify-center overflow-visible rounded-full border-8 border-zinc-900 bg-primary p-3 text-primary-foreground">
      <InfoIcon className="h-7 w-7" />
    </div>
    <article className="text-base text-white">{children}</article>
  </aside>
);

export default Aside;
