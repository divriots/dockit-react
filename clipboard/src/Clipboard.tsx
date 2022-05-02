import '@divriots/dockit-core/clipboard/dockit-clipboard.define.js';
import React from 'react';

/**
  Building block used to provide a copy-able design token.
 */
export const Clipboard = (props: JSX.IntrinsicAttributes & Partial<any>) => (
  <dockit-clipboard {...props} />
);
