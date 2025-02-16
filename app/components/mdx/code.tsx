import { highlight } from "sugar-high";

type CodeProps = React.HTMLAttributes<HTMLElement> & {
  children: string;
};

export function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
