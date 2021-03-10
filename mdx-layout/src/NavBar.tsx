import './NavBar.scss';
import React, { ReactElement } from 'react';
import { NavGroup } from './NavGroup';
import { PageGraph } from './PageGraph';

const ThreeBars = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="icon for navigation expander"
  >
    <path
      aria-label="three horizontal bars stacked"
      d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const NavBar = ({
  graph,
  logo = '/assets/logo/dsd.svg',
}: {
  graph: PageGraph;
  logo?: string | ReactElement;
}) => {
  const Logo = () =>
    typeof logo === 'string' ? <img src={logo} width="32" height="32" /> : logo;
  return (
    <nav>
      <header>
        <Logo />
        <label htmlFor="navexpander" aria-label="show nav" tabIndex={0}>
          <ThreeBars />
        </label>
      </header>
      <input
        type="checkbox"
        id="navexpander"
        defaultChecked={true}
        style={{ display: 'none' }}
      />
      <NavGroup items={graph.overallOrder(true)} graph={graph} />
    </nav>
  );
};
