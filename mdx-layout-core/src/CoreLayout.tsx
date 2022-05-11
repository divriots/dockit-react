import type { Context } from '@divriots/studio-doc-compiler';
import { PageGraph, buildGraph } from './PageGraph';
import { NavBar } from './NavBar';
import React, { CSSProperties, ReactNode } from 'react';
// @ts-ignore
import prismcss from 'prismjs/themes/prism-tomorrow.css?raw';

const styles = {
  main: {
    display: 'grid',
    justifyContent: 'stretch',
  } as CSSProperties,

  article: {
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '800px',
    padding: '0 1rem',
  } as CSSProperties,
};

/**
 Component that is the core building block of MDX layouts. No styles are applied.
 The navigation menu is integrated.
 */
export const CoreLayout = ({
  __context,
  children,
  articleClassName,
  ...props // MDX exports
}: {
  __context: Context; // Layout Context
  children: ReactNode | ReactNode[];
  articleClassName: string; // class to apply to <article>
}) => {
  const graph: PageGraph = buildGraph(__context);

  const mediaMatch = window.matchMedia('only screen and (min-width: 1024px)');
  const [matches, setMatches] = React.useState(mediaMatch.matches);
  React.useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });

  document.body.style.margin = '0';
  document.body.style.maxWidth = 'unset';

  return (
    <main
      style={{
        ...styles.main,
        ...(matches && {
          gridTemplateColumns: 'auto 1fr',
          columnGap: '2rem',
        }),
      }}
    >
      <style>{prismcss}</style>
      <NavBar
        base={__context.base}
        graph={graph}
        isDesktop={matches}
        {...props}
      />
      <article className={articleClassName} style={styles.article}>
        {children}
      </article>
    </main>
  );
};
