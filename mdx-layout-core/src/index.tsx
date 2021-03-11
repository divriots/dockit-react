import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import { Layout as LayoutComponent } from './Layout';

export const Layout = (props) => (
  <MDXProvider components={{ Playground, Props, Description, Showcases }}>
    <LayoutComponent {...props} />
  </MDXProvider>
);
