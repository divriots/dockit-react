import '@divriots/dockit-core/box/dockit-box.define.js';
import '@divriots/dockit-core/style.css';
import React, { CSSProperties, ReactNode } from 'react';

type BoxProps = {
  checkeredBackground?: boolean;
  className?: string;
} & JSX.IntrinsicAttributes &
  Partial<any>;

export const Box = ({ checkeredBackground, className, ...rest }: BoxProps) => (
  <dockit-box
    class-name={className}
    checkered-background={checkeredBackground}
    {...rest}
  />
);
