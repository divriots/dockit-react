import type { Page } from '@divriots/studio-doc-compiler';
import { NavLink } from './NavLink';
import React from 'react';

export const FooterNav = ({
  previous,
  next,
}: {
  previous?: Page;
  next?: Page;
}) => (
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
