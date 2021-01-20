import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula';

const styles = {
  wrapper: {
    border: '1px solid #e1e4e8',
  },
  preview: {
    padding: '1rem'
  }
}

export interface PlaygroundProps {
  code: string;
  scope: object;
};
 
export const Playground = ({ code, scope }: PlaygroundProps) => (
  <LiveProvider code={code} scope={scope} theme={dracula}>
    <div style={styles.wrapper}>
      <div style={styles.preview}>
        <LivePreview />
      </div>
      <LiveEditor style={{ width: '30rem', height: '10rem', overflow: 'scroll'}} />
      <LiveError />
    </div>
  </LiveProvider>
);