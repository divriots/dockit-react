import React from 'react';
import path from 'path';

const relativeUrl = (url: string) =>
  path.join(
    Array(url.split('/').length - 1)
      .fill('..')
      .join('/'),
    url
  );

export const NavLink = ({ page }) =>
  page.url && (
    <a
      className="layout-nav-page"
      href={relativeUrl(page.url)}
      {...(location.href.endsWith(page.url) && {
        'aria-current': 'location',
      })}
    >
      {(page.nav && page.nav.key) || page.url}
    </a>
  );
