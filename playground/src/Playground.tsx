import React, { CSSProperties } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

const patchStyleTrueAttribute = (code) =>
  // `style` should not be `true` for React-Native + Vite.JS
  // because it throws "Uncaught Invariant Violation: style may be false but not true"
  // which, even though gets caught by the ErrorBoundary, gets also caught by the HRM compiler
  // and gets shown as a fullscreen error modal
  code
    .replaceAll('style={true}', 'style={{}}')
    .replaceAll('style ', 'style={{}} ')
    .replaceAll('style>', 'style={{}}>');

const styles = {
  preview: {
    padding: '1rem',
    border: '1px solid #80808033',
  } as CSSProperties,
  editorContainer: {
    overflowX: 'auto',
    display: 'grid',
    borderRadius: '0px',
  } as CSSProperties,
  editor: {
    height: 'auto',
    width: 'max-content',
    minWidth: '100%',
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
   * The jsx to edit and render, as string.
   */
  code: string;

  /**
   * Specifies globals to use inside the live editor.
   */
  scope?: object;

  /**
   * Allows to render multiple components.
   */
  noInline?: boolean;

  /**
   * ClassName(s) to pass to inner blocks
   */
  innerClassName?: string;
};

/**
 * Renders your code inside a live-editable playground and directly shows the output of the code used.
 */
export const Playground = ({
  code,
  scope,
  noInline,
  innerClassName,
  ...props
}: PlaygroundProps) => {
  const commentsRegex = /([^http:|https:]\/\/.*)|(\/\*(.|\n)*?\*\/)/gm;
  return (
    <LiveProvider
      code={code.trim()}
      scope={scope}
      noInline={noInline}
      theme={oceanicNext}
      transformCode={(code) => {
        const codeWithoutComments = code.replaceAll(commentsRegex, '').trim();

        const codeWithPatchedStyle =
          patchStyleTrueAttribute(codeWithoutComments);

        return codeWithPatchedStyle.startsWith('<')
          ? `<>${codeWithPatchedStyle}</>`
          : codeWithPatchedStyle;
      }}
    >
      <div {...props}>
        <div
          style={styles.preview}
          className={`${innerClassName} live-preview`}
        >
          <LivePreview />
        </div>
        <div
          style={styles.editorContainer}
          className={`${innerClassName} live-editor`}
        >
          <LiveEditor style={styles.editor} />
        </div>
        <LiveError style={styles.error} />
      </div>
    </LiveProvider>
  );
};

Playground.defaultProps = {
  noInline: false,
};
