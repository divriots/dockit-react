import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground/dist/Playground.js';
import { Showcases } from '~/showcases/dist/Showcases.js';
import { Props } from '~/props/dist/Props.js';
import { Layout as LayoutComponent } from './Layout';
import { StylesheetSwitch } from './StylesheetSwitch';

export const Layout = (props) => (
  <MDXProvider components={{ Playground, Props, Showcases }}>
    <StylesheetSwitch
      colorSchemes={{
        light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.css',
        dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.css',
        auto: 'https://cdn.jsdelivr.net/npm/water.css/out/water.css',
      }}
    />
    <LayoutComponent {...props} />
  </MDXProvider>
);
