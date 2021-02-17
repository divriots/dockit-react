import { DepGraph } from 'dependency-graph';
import type { Page, Context } from '@divriots/studio-doc-compiler';

export type PageGraph = DepGraph<Page>;

export const buildGraph = (context: Context): PageGraph => {
  const graph: PageGraph = new DepGraph<Page>();
  for (const page of context.pages) {
    graph.addNode((page.nav && page.nav.key) || page.url, page);
    if (page.nav && page.nav.parent) {
      if (!graph.hasNode(page.nav.parent)) graph.addNode(page.nav.parent);
      graph.addDependency(page.nav.key, page.nav.parent);
    }
  }
  return graph;
};

const findPrevious = (
  itemIndex: number,
  graph: PageGraph,
  items: string[]
): Page => {
  if (itemIndex < 1) return null;
  const previous = graph.getNodeData(items[itemIndex - 1]);
  return previous.url ? previous : findPrevious(itemIndex - 1, graph, items);
};

const findNext = (
  itemIndex: number,
  graph: PageGraph,
  items: string[]
): Page => {
  if (itemIndex >= items.length - 1) return null;
  const next = graph.getNodeData(items[itemIndex + 1]);
  return next.url ? next : findNext(itemIndex + 1, graph, items);
};

export const findPreviousNext = (graph: PageGraph, url: string) => {
  const items = graph.overallOrder();
  const itemIndex = items.findIndex((i) =>
    url.endsWith(graph.getNodeData(i).url)
  );
  return {
    next: findNext(itemIndex, graph, items),
    previous: findPrevious(itemIndex, graph, items),
  };
};
