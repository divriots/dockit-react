import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props } from '~/props';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';

export const CssLayout = (props) => (
  <MDXProvider components={{ Playground, Props, Showcases }}>
    <StylesheetSwitch
      stylesheets={{
        light: new URL('light.css', import.meta.url).href,
        dark: new URL('dark.css', import.meta.url).href,
      }}
      onSwitch={props.onSwitch}
    />
    <CoreLayout {...props} />
  </MDXProvider>
);
