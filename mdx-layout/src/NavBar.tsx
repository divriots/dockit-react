import './NavBar.css';
import React from 'react';
import { NavGroup } from './NavGroup';

export const NavBar = ({ pages, packages }) => {
  const childrenProps = { pages, packages };
  return (
    <aside>
      <nav className="menu">
        <NavGroup
          items={(packages && packages.menu) || pages.map((p) => p.url)}
          {...childrenProps}
        />
      </nav>
    </aside>
  );
};
