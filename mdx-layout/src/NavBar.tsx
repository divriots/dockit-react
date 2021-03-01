import './NavBar.scss';
import React from 'react';
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
  name,
  logo = '/assets/logo/dsd.svg',
}: {
  graph: PageGraph;
  name?: string;
  logo?: string;
}) => (
  <nav>
    <h3>
      {logo && <img src={logo} />}
      <span>{name}</span>
      <label htmlFor="navexpander" aria-label="show nav" tabIndex={0}>
        <ThreeBars />
      </label>
    </h3>
    <input
      type="checkbox"
      id="navexpander"
      defaultChecked={true}
      style={{ display: 'none' }}
    />
    <NavGroup items={graph.overallOrder(true)} graph={graph} />
  </nav>
);
