import { findPreviousNext, PageGraph } from './PageGraph';
import { NavLink } from './NavLink';
import * as React from 'react';
import { CSSProperties } from 'react';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'capitalize',
  } as CSSProperties,
};

export const FooterNav = ({
  base,
  graph,
}: {
  base: string;
  graph: PageGraph;
}) => {
  const { previous, next } = findPreviousNext(graph, location.href);
  return (
    <footer style={styles.footer}>
      {previous ? (
        <span>
          &lt; <NavLink base={base} page={previous} />
        </span>
      ) : (
        <span></span>
      )}
      {next ? (
        <span>
          <NavLink base={base} page={next} /> &gt;
        </span>
      ) : (
        <span></span>
      )}
    </footer>
  );
};
