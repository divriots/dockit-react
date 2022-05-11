import '@divriots/dockit-core/box/dockit-box.define.js';
import '@divriots/dockit-core/style.css';
import React from 'react';

type BoxProps = {
  checkeredBackground?: boolean;
  className?: string;
  showcaseStyle?: string;
} & JSX.IntrinsicAttributes &
  Partial<any>;

export const Box = ({
  checkeredBackground,
  className,
  showcaseStyle,
  ...rest
}: BoxProps) => (
  <dockit-box
    class-name={className}
    checkered-background={checkeredBackground}
    showcase-style={showcaseStyle}
    {...rest}
  />
);
