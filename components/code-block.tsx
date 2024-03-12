import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { cn } from "utils/classnames";

type CodeBlockProps = {
  codeString: string;
  language: Language;
  highlightLine?: (index: number) => boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language = "jsx",
  highlightLine,
}) => (
  <Highlight
    key="Highlight"
    {...defaultProps}
    theme={theme}
    code={codeString}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={cn("text-left, p-2, overflow-scroll, h-full", className)}>
        {tokens.map((line, index) => {
          const { className: lineClassName } = getLineProps({
            className:
              highlightLine && highlightLine(index) ? "highlight-line" : "",
            key: index,
            line,
          });

          return (
            <div key={index} className={cn("table-row", lineClassName)}>
              <span className="table-cell text-right pr-4 select-none opacity-50">
                {index + 1}
              </span>
              <span>
                {line.map((token, key) => (
                  <span
                    data-testid="content-line"
                    key={key}
                    {...getTokenProps({
                      key,
                      token,
                    })}
                  />
                ))}
              </span>
            </div>
          );
        })}
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
