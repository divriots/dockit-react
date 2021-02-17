import './NavBar.css';
import React from 'react';
import { NavGroup } from './NavGroup';
import { PageGraph } from './PageGraph';

export const NavBar = ({ graph }: { graph: PageGraph }) => (
  <aside>
    <nav className="menu">
      <NavGroup items={graph.overallOrder(true)} graph={graph} />
    </nav>
  </aside>
);
