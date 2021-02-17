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
  <ul className="navgroup">
    {items.map((item: string) => {
      const deps = graph.directDependantsOf(item);
      return !deps.length ? (
        <li key={item} className="navitem">
          <NavLink page={graph.getNodeData(item)} />
        </li>
      ) : (
        <li key={item}>
          <h5>{item}</h5>
          <NavGroup items={deps} graph={graph} />
        </li>
      );
    })}
  </ul>
);
