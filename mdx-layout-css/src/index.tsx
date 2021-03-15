import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';

const sheets = {
  light: new URL('light.css', import.meta.url).href,
  dark: new URL('dark.css', import.meta.url).href,
};

export const CssLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ Playground, Props, Description, Showcases, ...components }}>
    <StylesheetSwitch
      stylesheets={sheets}
      onSwitch={onSwitch}
    />
    <CoreLayout {...rest} />
  </MDXProvider>
);
