import type { Context } from '@divriots/studio-doc-compiler';
import { PageGraph, buildGraph } from './PageGraph';
import './Layout.scss';
import { NavBar } from './NavBar';
import React, { ReactChildren, ReactChild } from 'react';

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
    <div className="layout-wrapper">
      <main>
        <NavBar graph={graph} {...props} />
        <article>{children}</article>
      </main>
    </div>
  );
};
