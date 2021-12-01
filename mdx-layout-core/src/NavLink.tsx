import React from 'react';
import path from 'path';
import { styles } from './NavGroup';

const relativeUrl = (url: string) =>
  path.join(
    Array(url.split('/').length - 1)
      .fill('..')
      .join('/'),
    url
  );

export const NavLink = ({ page }) => {
  const [hover, setHover] = React.useState(false);

  return (
    page.url && (
      <a
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="layout-nav-page"
        href={relativeUrl(page.url)}
        style={{
          ...styles.listItem,
          ...(location.href.endsWith(page.url) && {
            fontWeight: 'bold',
          }),
          ...((location.href.endsWith(page.url) || hover) && {
            opacity: '1',
            backgroundColor: 'hsla(0, 0%, 50%, 0.15)',
          }),
        }}
        {...(location.href.endsWith(page.url) && {
          'aria-current': 'location',
        })}
      >
        {(page.nav && page.nav.key) || page.url}
      </a>
    )
  );
};
