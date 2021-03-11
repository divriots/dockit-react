import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '~/mdx-layout-core';
import './styles.css';
import { setup } from 'twind/shim';
import typography from '@twind/typography';

// Setup tailwind
setup({ plugins: { ...typography() } });

export const TailwindLayout = (props) => (
  <MDXProvider components={{}}>
    <CoreLayout
      {...props}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
