import '@divriots/dockit-core/box/dockit-box.define.js';
import '@divriots/dockit-core/style.css';
import React, { CSSProperties, ReactNode } from 'react';

interface BoxProps {
  checkeredBackground?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

export const Box = ({
  checkeredBackground,
  className,
  style = {},
  children,
}: BoxProps) => (
  <dockit-box
    class-name={className}
    style={style}
    checkered-background={checkeredBackground}
  >
    {children}
  </dockit-box>
);
