import type { Context } from '@divriots/studio-doc-compiler';
import { PageGraph, buildGraph } from './PageGraph';
import './Layout.scss';
import { NavBar } from './NavBar';
import React, { ReactChildren, ReactChild } from 'react';

export const Layout = ({
  __context,
  children,
  articleClassName,
  ...props // MDX exports
}: {
  __context: Context; // Layout Context
  children: ReactChild | ReactChildren; // MDX Content
  articleClassName: string; // class to apply to <article>
}) => {
  const graph: PageGraph = buildGraph(__context);
  return (
    <main>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-tsx.min.js"
        integrity="sha512-ueCte/ZwNI460xA3ipwvMk/emlgFYNZGBLlc3EMqZqJbQoLaOhoCpY1l6dHbfNz2p+A9E/sQoUdNRVvu/cqQEw=="
        crossorigin="anonymous"
      />
      <NavBar graph={graph} {...props} />
      <article className={articleClassName}>{children}</article>
    </main>
  );
};
