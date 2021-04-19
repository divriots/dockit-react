import React, { CSSProperties } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

const styles = {
  preview: {
    padding: '1rem',
    border: '1px solid #80808033',
  } as CSSProperties,
  editor: {
    height: 'auto',
  } as CSSProperties,
  error: {
    padding: '0.5rem',
    background: '#FF5555E6',
    color: '#F8F8F2',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '0.8em',
    fontFamily: '"Source Code Pro", monospace',
  } as CSSProperties,
};

type PlaygroundProps = {
  /**
  The jsx to edit and render, as string.
  */
  code: string;
  /**
  Specifies globals to use inside the live editor.
  */
  scope: object;
  /**
  Allows to render multiple components
  */
  noInline?: boolean;
}

/**
  Used to render your component inside a live-editable playground and directly see the output of the code used.
*/
export const Playground = ({ code, scope, noInline }: PlaygroundProps) => {
  const firstCharacterNotCommentRegex = /^[^\/\s].*/gm;

  return (
    <LiveProvider
      code={code.trim()}
      scope={scope}
      noInline={noInline}
      theme={oceanicNext}
      transformCode={(code) => {
        if (code.trim().startsWith('<')) {
          return `<>${code.trim()}</>`;
        }

        const [firstCharacter = ''] = code.trim().match(firstCharacterNotCommentRegex) || [];
        return firstCharacter.startsWith('<') ? `<> ${code.trim().match(firstCharacterNotCommentRegex)} </>` : code;
      }}
    >
      <div>
        <div style={styles.preview}>
          <LivePreview />
        </div>
        <LiveEditor style={styles.editor} />
        <LiveError style={styles.error} />
      </div>
    </LiveProvider>
  )
};

Playground.defaultProps = {
  noInline: false,
}