export const Wrapper: React.FC = ({ children }) => (
  <div className="fixed bottom-2 left-1/2 z-10 w-11/12 -translate-x-1/2 rounded-xl border border-zinc-400 bg-zinc-100/30 backdrop-blur-sm dark:border-zinc-600 dark:bg-zinc-900/30 md:w-fit md:rounded-lg">
    <div className="flex items-center justify-between p-2">{children}</div>
  </div>
);
