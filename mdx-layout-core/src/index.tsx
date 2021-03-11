import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground/dist/Playground.js';
import { Showcases } from '~/showcases/dist/Showcases.js';
import { Props } from '~/props/dist/Props.js';
import { Layout as LayoutComponent } from './Layout';

export const Layout = (props) => (
  <MDXProvider components={{ Playground, Props, Showcases }}>
    <LayoutComponent {...props} />
  </MDXProvider>
);
