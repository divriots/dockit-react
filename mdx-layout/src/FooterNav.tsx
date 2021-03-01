import { findPreviousNext, PageGraph } from './PageGraph';
import { NavLink } from './NavLink';
import React from 'react';

export const FooterNav = ({ graph }: { graph: PageGraph }) => {
  const { previous, next } = findPreviousNext(graph, location.href);
  return (
    <footer>
      {previous ? (
        <span>
          &lt; <NavLink page={previous} />
        </span>
      ) : (
        <span></span>
      )}
      {next ? (
        <span>
          <NavLink page={next} /> &gt;
        </span>
      ) : (
        <span></span>
      )}
    </footer>
  );
};
