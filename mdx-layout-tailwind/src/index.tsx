import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Layout as CoreLayout } from '~/mdx-layout-core/dist/Layout';
import './styles.css';
import { setup } from 'twind/shim';
import typography from '@twind/typography';

// Setup tailwind
setup({ plugins: { ...typography() } });

export const Layout = (props) => (
  <MDXProvider components={{}}>
    <CoreLayout
      {...props}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
