import './NavBar.css';
import React from 'react';
import { NavGroup } from './NavGroup';

export const NavBar = ({ graph }) => {
  const rootItems = graph
    .overallOrder()
    .filter((i: string) => !graph.dependenciesOf(i).length);
  return (
    <aside>
      <nav className="menu">
        <NavGroup items={rootItems} graph={graph} />
      </nav>
    </aside>
  );
};
