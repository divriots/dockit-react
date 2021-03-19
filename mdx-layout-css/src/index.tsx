import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';

export const CssLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <StylesheetSwitch
      stylesheets={{
        light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
        dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
      }}
      onSwitch={onSwitch}
    />
    <link rel="stylesheet" href={'../dist/commons.css'} />
    <CoreLayout {...rest} />
  </MDXProvider>
);
