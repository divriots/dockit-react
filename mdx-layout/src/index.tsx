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
  const { stylesheet } = props as any;
  return (
    <main>
      <NavBar graph={graph} {...props} />
      <article>
        {children}
        <FooterNav graph={graph} />
      </article>
    </main>
  );
};
// TODO inEditor
