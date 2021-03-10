import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Layout } from '../src/index';

export const DefaultLayout = (props) => (
  <MDXProvider components={{}}>
    <Layout
      logo={
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          style={{ height: '64px' }}
        />
      }
      {...props}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
