import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground/dist/Playground.js';
import { Showcases } from '~/showcases/dist/Showcases.js';
import { Props } from '~/props/dist/Props.js';
import { Layout as LayoutComponent } from '~/mdx-layout-core/dist/Layout';
import { StylesheetSwitch } from '~/mdx-layout-core/dist/StylesheetSwitch';

export const Layout = (props) => (
  <MDXProvider components={{ Playground, Props, Showcases }}>
    <StylesheetSwitch
      stylesheets={{
        light: new URL('light.css', import.meta.url).href,
        dark: new URL('dark.css', import.meta.url).href,
      }}
      onSwitch={props.onSwitch}
    />
    <LayoutComponent {...props} />
  </MDXProvider>
);
