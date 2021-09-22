import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout, StylesheetSwitch, ColorScheme } from '~/mdx-layout-core';
import styles from './common-styles';

export const CssLayout = ({
  components = {},
  onSwitch = () => {},
  ...rest
}) => {
  const stylesheets = {
    light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
    dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
  };

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  return (
    <MDXProvider components={{ ...components }}>
      <style>{styles}</style>
      <link rel="stylesheet" href={stylesheets[colorScheme]} />
      <CoreLayout
        stylesheetSwitch={
          <StylesheetSwitch
            colorScheme={colorScheme}
            onSwitch={(scheme) => {
              onSwitch(scheme);
              setColorScheme(scheme);
            }}
          />
        }
        {...rest}
      />
    </MDXProvider>
  );
};
