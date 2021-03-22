import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '~/mdx-layout-core';

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
