import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '~/mdx-layout-core';

/**
 Component used for styling the layout of Tailwind docs.
 It's built on top of CoreLayout and applies `prose` Tailwind typography class.
 */
export const TailwindLayout = ({ components = {}, ...rest }) => (
  <MDXProvider
    components={{
      ...components,
    }}
  >
    <CoreLayout
      {...rest}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
