import './NavBar.css';
import React from 'react';
import { NavGroup } from './NavGroup';

export const NavBar = ({ graph }) => (
  <aside>
    <nav className="menu">
      <NavGroup items={graph.overallOrder(true)} graph={graph} />
    </nav>
  </aside>
);
