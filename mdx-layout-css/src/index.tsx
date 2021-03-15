import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';


export const CssLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ Playground, Props, Description, Showcases, ...components }}>
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
