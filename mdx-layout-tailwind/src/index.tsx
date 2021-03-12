import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '~/mdx-layout-core';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import './styles.css';
import { setup } from 'twind/shim';
import typography from '@twind/typography';

const Ol = (props) => <ol className="list-decimal" {...props} />;
const Ul = (props) => <ul className="list-disc" {...props} />;
const Li = (props) => <li className="ml-4" {...props} />;

// Setup tailwind
setup({ plugins: { ...typography() } });

export const setupTwind = (args) => setup({ ...args, plugins: { ...typography(), ...args?.plugins } });

export const TailwindLayout = ({ components: {}, ...rest }) => (
  <MDXProvider
    components={{
      ol: Ol,
      ul: Ul,
      li: Li,
      Playground,
      Showcases,
      Props,
      Description,
      ...components,
    }}
  >
    <CoreLayout
      {...rest}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
