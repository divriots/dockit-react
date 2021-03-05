import React, { ReactNode } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import toJSXString from 'react-element-to-jsx-string';

const styles = {
  preview: {
    padding: '1rem',
    border: '1px solid #e1e4e8',
  },
};

export interface PlaygroundProps {
  /**
  The jsx to edit and render, as string.
  */
  code: string;
  /**
  Specifies globals to use inside the live editor.
  */
  scope: object;
}

/**
  Used to render your component inside a live-editable playground and directly see the output of the code used.
*/
export const Playground = ({ code, scope }: PlaygroundProps) => (
  <LiveProvider
    code={code.trim()}
    scope={scope}
    theme={dracula}
    transformCode={(code) => `<>${code}</>`}
  >
    <div>
      <div style={styles.preview}>
        <LivePreview />
      </div>
      <LiveEditor style={{ height: 'auto', overflow: 'auto' }} />
      <LiveError />
    </div>
  </LiveProvider>
);
