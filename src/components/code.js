import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
// import '../styles/code-formater.css'
import theme from 'prism-react-renderer/themes/oceanicNext'

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={false}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="gatsby-highlight" data-language={language}>
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    )
  }
}
