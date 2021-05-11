import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';

const styles = `
h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.85rem;
}

h3 {
  font-size: 1.55rem;
}

h4 {
  font-size: 1.25rem;
}

h5 {
  font-size: 1rem;
}

ol {
  list-style-type: decimal;
  padding-inline-start: 2rem;
}

ul {
  padding-inline-start: 2rem;
  list-style-type: disc;
}
`;

export const CssLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <StylesheetSwitch
      stylesheets={{
        light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
        dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
      }}
      onSwitch={onSwitch}
    />
    <style>{styles}</style>
    <CoreLayout {...rest} />
  </MDXProvider>
);
