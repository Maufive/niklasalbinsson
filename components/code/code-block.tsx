import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styles from './code-block.module.scss';

type CodeBlockProps = {
  codeString: string;
  language: Language;
  highlightLine?: (index: number) => boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language = 'jsx',
  highlightLine,
}) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={codeString}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={`${className} ${styles.pre}`}>
        {tokens.map((line, index) => {
          const { className: lineClassName } = getLineProps({
            className:
              highlightLine && highlightLine(index) ? 'highlight-line' : '',
            key: index,
            line,
          });

          return (
            <div key={index} className={`${lineClassName} ${styles.line}`}>
              <span className={styles.lineNo}>{index + 1}</span>
              <span className={styles.spanContent}>
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
