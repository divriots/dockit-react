import '@divriots/dockit-core/clipboard/dockit-clipboard.define.js';
import * as React from 'react';
import { ReactNode, CSSProperties } from 'react';

export const Clipboard = ({
  children,
  style,
}: {
  children: ReactNode | ReactNode[];
  style?: CSSProperties;
}) => <dockit-clipboard style={style}>{children}</dockit-clipboard>;
