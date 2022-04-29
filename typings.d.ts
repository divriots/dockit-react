import { Clipboard } from '@divriots/dockit-core/clipboard/src/Clipboard';
import { DOMAttributes } from 'react';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['dockit-clipboard']: CustomElement<Clipboard>;
    }
  }
}
