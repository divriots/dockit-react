import type { Clipboard } from '@divriots/dockit-core/clipboard/src/Clipboard';
import type { Box } from '@divriots/dockit-core/box/src/Box';
import { DOMAttributes } from 'react';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['dockit-clipboard']: CustomElement<Clipboard>;
      ['dockit-box']: CustomElement<Box>;
    }
  }
}
