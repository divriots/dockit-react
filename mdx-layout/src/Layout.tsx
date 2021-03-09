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
    <main>
      <NavBar graph={graph} {...props} />
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        {children}
      </article>
    </main>
  );
};
