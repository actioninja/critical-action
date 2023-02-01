import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import * as React from 'react';
import * as codeStyle from './CodeContainer.module.scss';
import theme from 'prism-react-renderer/themes/dracula';

type CodeContainerProps = {
  className?: string;

  children: string;
};

const InlineMode = ({ code }: { code: string }) => {
  const backgroundColor = theme.plain.backgroundColor;
  const style = {
    backgroundColor,
  };
  return <code style={style}>{code}</code>;
};

const CodeContainer = ({ className, children }: CodeContainerProps) => {
  const trimmed: Language = className?.substring('language-'.length) as Language;

  const inline = !children.includes('\n');
  if (inline) {
    return <InlineMode code={children} />;
  }
  const lastLineEndRemoved = children.substring(0, children.length - 1);

  return (
    <Highlight {...defaultProps} language={trimmed} code={lastLineEndRemoved} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${codeStyle.container} ${className}`} style={style}>
          <div>{trimmed}</div>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            const modifiedProps = {
              ...lineProps,
              className: `${codeStyle.line} ${lineProps.className}`,
            };
            return (
              <div key={i} {...modifiedProps}>
                <span className={codeStyle.lineNo}>{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeContainer;
