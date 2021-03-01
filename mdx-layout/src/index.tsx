import type { Context } from '@divriots/studio-doc-compiler';
import { PageGraph, buildGraph } from './PageGraph';
import './Layout.scss';
import { NavBar } from './NavBar';
import React, { ReactChildren, ReactChild } from 'react';
import { FooterNav } from './FooterNav';

export const Layout = ({
  __context,
  children,
  ...props // MDX exports
}: {
  __context: Context; // Layout Context
  children: ReactChild | ReactChildren; // MDX Content
}) => {
  const graph: PageGraph = buildGraph(__context);
  return (
    <main>
      <link
        rel="stylesheet"
        href={'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'}
        type="text/css"
      />
      <NavBar graph={graph} {...props} />
      <article>
        {children}
        <FooterNav graph={graph} />
      </article>
    </main>
  );
};
// TODO inEditor
