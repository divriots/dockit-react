import React from 'react';
import * as path from 'path';

const relativeUrl = (url: string) =>
  path.join(
    Array(url.split('/').length - 1)
      .fill('..')
      .join('/'),
    url
  );

export const NavLink = ({ page }) => {
  const name = (page.nav && page.nav.key) || page.url;
  return page.url ? (
    <a
      className={location.href.endsWith(page.url) ? 'selected' : ''}
      href={relativeUrl(page.url)}
    >
      {name}
    </a>
  ) : (
    <span>{name}</span>
  );
};
