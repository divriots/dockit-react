import * as React from 'react';
import { ReactElement, CSSProperties } from 'react';
import { NavGroup } from './NavGroup';
import { PageGraph } from './PageGraph';
import { DefaultLogo } from './DefaultLogo';

const styles = {
  nav: {
    padding: '1rem',
  } as CSSProperties,
  header: {
    width: 'calc(100% - 1rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as CSSProperties,
  headerLabel: {
    width: '2rem',
    height: '2rem',
  } as CSSProperties,
  headerActions: {
    display: 'flex',
  } as CSSProperties,
};

const ThreeBars = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="icon for navigation expander"
  >
    <path
      aria-label="three horizontal bars stacked"
      d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const NavBar = ({
  base,
  graph,
  isDesktop,
  logo = (
    <div style={{ width: '150px', height: 'auto' }}>
      <DefaultLogo />
    </div>
  ),
  stylesheetSwitch = <></>,
}: {
  base: string;
  graph: PageGraph;
  isDesktop?: boolean;
  logo?: ReactElement;
  stylesheetSwitch?: ReactElement;
}) => {
  const Logo = () => logo;
  const StylesheetSwitch = () => stylesheetSwitch;
  const [checked, setChecked] = React.useState(true);
  return (
    <nav style={styles.nav}>
      <header style={styles.header}>
        <Logo />
        <div style={styles.headerActions}>
          <label
            htmlFor="navexpander"
            aria-label="show nav"
            tabIndex={0}
            style={{
              ...styles.headerLabel,
              ...(isDesktop && {
                display: 'none',
              }),
            }}
          >
            <ThreeBars />
          </label>
          <StylesheetSwitch />
        </div>
      </header>
      <input
        type="checkbox"
        id="navexpander"
        onChange={() => setChecked(!checked)}
        defaultChecked={checked}
        style={{ display: 'none' }}
      />
      <NavGroup
        items={graph.overallOrder(true)}
        base={base}
        graph={graph}
        isDesktop={isDesktop}
        isClosed={checked}
      />
    </nav>
  );
};
