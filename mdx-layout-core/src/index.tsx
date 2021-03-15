import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import { CoreLayout } from './CoreLayout';
import { StylesheetSwitch } from './StylesheetSwitch';

export const Layout = (props) => (
  <MDXProvider components={{ Playground, Props, Description, Showcases }}>
    <CoreLayout {...props} />
  </MDXProvider>
);

export { CoreLayout, StylesheetSwitch };
