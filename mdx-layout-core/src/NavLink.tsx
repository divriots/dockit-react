import type { Page } from '@divriots/studio-doc-compiler';
import React from 'react';
import { styles } from './NavGroup';

export const NavLink = ({ base, page }: { base: string; page: Page }) => {
  if (!page.url) {
    return null;
  }
  const [hover, setHover] = React.useState(false);
  const pageUrlWithoutOrigin = base + page.url;
  const isCurrentPage = location.pathname === pageUrlWithoutOrigin;

  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="layout-nav-page"
      href={pageUrlWithoutOrigin}
      style={{
        ...styles.listItem,
        ...(isCurrentPage && {
          fontWeight: 'bold',
        }),
        ...((isCurrentPage || hover) && {
          opacity: '1',
          backgroundColor: 'hsla(0, 0%, 50%, 0.15)',
        }),
      }}
      {...(isCurrentPage && {
        'aria-current': 'location',
      })}
    >
      {(page.nav && page.nav.key) || page.url}
    </a>
  );
};
