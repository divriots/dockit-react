import { NavLink } from './NavLink';
import React from 'react';

const findPrevious = (itemIndex: number, graph, items) => {
  if (itemIndex < 1) return null;
  const previous = graph.getNodeData(items[itemIndex - 1]);
  return previous.url ? previous : findPrevious(itemIndex - 1, graph, items);
};

const findNext = (itemIndex: number, graph, items) => {
  if (itemIndex >= items.length - 1) return null;
  const next = graph.getNodeData(items[itemIndex + 1]);
  return next.url ? next : findNext(itemIndex + 1, graph, items);
};

export const FooterNav = ({ graph }) => {
  const items = graph.overallOrder();
  const itemIndex = items.findIndex((i) =>
    location.href.endsWith(graph.getNodeData(i).url)
  );
  const next = findNext(itemIndex, graph, items);
  const previous = findPrevious(itemIndex, graph, items);
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {previous ? <NavLink page={previous} /> : <span></span>}
      {next ? <NavLink page={next} /> : <span></span>}
    </footer>
  );
};
