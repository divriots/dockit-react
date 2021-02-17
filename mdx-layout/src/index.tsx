import type { Page, Context } from '@divriots/studio-doc-compiler';
import { PageGraph, buildGraph, findPreviousNext } from './PageGraph';
import './markdown-github.scss';
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
    <main style={{ display: 'flex' }} className="markdown-body">
      <NavBar graph={graph} />
      <div role="document" style={{ flexGrow: 1 }}>
        {children}
        <FooterNav {...findPreviousNext(graph, location.href)} />
      </div>
    </main>
  );
};
// TODO inEditor
