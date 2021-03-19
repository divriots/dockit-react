import React from 'react';
import { NavLink } from './NavLink';
import { PageGraph } from './PageGraph';

export const NavGroup = ({
  items,
  graph,
}: {
  items: string[];
  graph: PageGraph;
}) => (
  <ul>
    {items.map((item: string) => {
      const deps = graph.directDependantsOf(item);
      return !deps.length ? (
        <li key={item}>
          <NavLink page={graph.getNodeData(item)} />
        </li>
      ) : (
        <li key={item}>
          <span className="layout-nav-chapter">{item}</span>
          <NavGroup items={deps} graph={graph} />
        </li>
      );
    })}
  </ul>
);
