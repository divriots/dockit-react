import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout, StylesheetSwitch, ColorScheme } from '~/mdx-layout-core';
import { installRouter } from '~/router';
import styles from './common-styles';

export const getInitialColorScheme = () =>
  localStorage.getItem('colorScheme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
  'light';

installRouter();

/**
 Component used for styling the layout of mdx docs.
 It uses Water.css https://watercss.kognise.dev .
 It's built on top of CoreLayout and it supports Dark and Light modes.
 */
export const CssLayout = ({
  components = {},
  onSwitch = (scheme: ColorScheme) => {},
  ...rest
}) => {
  const stylesheets = {
    light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
    dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
  };

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getInitialColorScheme()
  );

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
              localStorage.setItem('colorScheme', scheme);
              setColorScheme(scheme);
            }}
          />
        }
        {...rest}
      />
    </MDXProvider>
  );
};
