import * as React from 'react';
import { CSSProperties } from 'react';
import { NavLink } from './NavLink';
import { PageGraph } from './PageGraph';

export const styles = {
  list: {
    paddingTop: '1em',
    listStyleType: 'none',
    paddingInlineStart: '0',
  } as CSSProperties,
  listItem: {
    display: 'flex',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    opacity: '0.9',
  } as CSSProperties,
  layoutNavChapter: {
    textTransform: 'uppercase',
    marginTop: '1rem',
    opacity: '0.5',
    fontSize: '80%',
  } as CSSProperties,
};

export const NavGroup = ({
  items,
  base,
  graph,
  isDesktop,
  isClosed,
}: {
  items: string[];
  base: string;
  graph: PageGraph;
  isDesktop?: boolean;
  isClosed?: boolean;
}) => (
  <ul
    style={{
      ...styles.list,
      ...(isClosed && {
        display: 'none',
      }),
      ...(isDesktop && {
        display: 'block',
      }),
    }}
  >
    {items.map((item: string) => {
      const deps = graph.directDependantsOf(item);
      return !deps.length ? (
        <li key={item}>
          <NavLink base={base} page={graph.getNodeData(item)} />
        </li>
      ) : (
        <li key={item}>
          <span style={{ ...styles.listItem, ...styles.layoutNavChapter }}>
            {item}
          </span>
          <NavGroup
            items={deps}
            base={base}
            graph={graph}
            isDesktop={isDesktop}
          />
        </li>
      );
    })}
  </ul>
);
