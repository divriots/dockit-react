import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '~/mdx-layout-core';
import { Playground } from '~/playground';
import { Showcases } from '~/showcases';
import { Props, Description } from '~/props';
import './styles.css';
import { setup } from 'twind/shim';
import typography from '@twind/typography';

const Ol = (props) => <ol class="list-decimal" {...props} />;
const Ul = (props) => <ul class="list-disc" {...props} />;
const Li = (props) => <li class="ml-4" {...props} />;

// Setup tailwind
setup({ plugins: { ...typography() } });

export const TailwindLayout = (props) => (
  <MDXProvider
    components={{
      ol: Ol,
      ul: Ul,
      li: Li,
      Playground,
      Showcases,
      Props,
      Description,
    }}
  >
    <CoreLayout
      {...props}
      articleClassName="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    />
  </MDXProvider>
);
