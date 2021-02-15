import './markdown-github.scss';
import { NavBar } from './NavBar';
import React from 'react';

export const Layout = ({ __config, children, ...props }) => {
  const navbarProps = { ...__config, ...props };
  return (
    <main style={{ display: 'flex' }} className="markdown-body">
      <NavBar {...navbarProps} />
      <div role="document">{children}</div>
    </main>
  );
};

// TODO next, previous, inEditor,
