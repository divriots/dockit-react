import { findPreviousNext, PageGraph } from './PageGraph';
import { NavLink } from './NavLink';
import React, { CSSProperties } from 'react';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'capitalize',
  } as CSSProperties,
};

export const FooterNav = ({ graph }: { graph: PageGraph }) => {
  const { previous, next } = findPreviousNext(graph, location.href);
  return (
    <footer style={styles.footer}>
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
