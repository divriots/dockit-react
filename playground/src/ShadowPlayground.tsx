import * as React from 'react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Playground } from './Playground';
import './dockit-react-playground';
import type { DockitReactPlayground } from './dockit-react-playground';

type ShadowPlaygroundProps = {
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
   * The styles to include in the shadow root.
   */
  styles?: string | CSSStyleSheet;
};

/**
 * Encapsulated version of Playground component with support for shadow root styles.
 */
export const ShadowPlayground = ({
  code,
  scope,
  noInline,
  styles,
  ...props
}: ShadowPlaygroundProps) => {
  const playgroundRef = useRef();

  useEffect(() => {
    const playgroundElement = playgroundRef.current as DockitReactPlayground;
    playgroundElement.styles = styles;
    ReactDOM.render(
      <Playground {...{ code, scope, noInline, ...props }} />,
      playgroundElement.$renderRoot
    );
  });

  return (
    <dockit-react-playground ref={playgroundRef}></dockit-react-playground>
  );
};

ShadowPlayground.defaultProps = {
  noInline: false,
};
