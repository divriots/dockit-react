import './markdown-github.scss';
import { NavBar } from './NavBar';
import React from 'react';
import { FooterNav } from './FooterNav';
import { DepGraph } from 'dependency-graph';

const buildGraph = (pages: any[]) => {
  const graph = new DepGraph();
  for (const page of pages) {
    graph.addNode((page.nav && page.nav.key) || page.url, page);
    if (page.nav && page.nav.parent) {
      if (!graph.hasNode(page.nav.parent)) graph.addNode(page.nav.parent);
      graph.addDependency(page.nav.key, page.nav.parent);
    }
  }
  return graph;
};

export const Layout = ({ __context, children, ...props }) => {
  const graph = buildGraph(__context.pages);
  return (
    <main style={{ display: 'flex' }} className="markdown-body">
      <NavBar graph={graph} />
      <div role="document" style={{ flexGrow: 1 }}>
        {children}
        <FooterNav graph={graph} />
      </div>
    </main>
  );
};
// TODO inEditor
