import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as path from "path";
import { Playground } from "../../playground/dist/index.js";
import { Props } from '../../props/dist/index.js';
import { Showcases } from '../../showcases/dist/index.js';
import { Space } from '../../space/dist/index.js';
import "@divriots/markdown-github/dist/index.css";

const navItemStyle = {
  display: "flex",
  padding: ".5rem 2rem .5rem 0",
  margin: 0,
  textTransform: "capitalize",
} as any;

export const NavHeading = ({ children }) => (
  <h4 style={navItemStyle}>{children}</h4>
);

const NavLink = ({ pkg, ...props }) => {
  const { pages, packages = {} } = props;
  const page = pages.find(
    (p) =>
      p.url === pkg ||
      p.url.startsWith(`${path.join(packages.dir || "", pkg, "doc")}`)
  );
  return page ? (
    <a
      style={{ ...navItemStyle, color: "currentcolor", userSelect: "none" }}
      href={path.join(
        Array(page.url.split("/").length - 1)
          .fill("..")
          .join("/"),
        page.url
      )}
    >
      {page.slug || pkg}
    </a>
  ) : (
    <span style={{ ...navItemStyle, opacity: ".3" }}>{pkg}</span>
  );
};

export const NavList = ({ children }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>{children}</ul>
);

export const NavGroup = ({ items, ...props }) => {
  return (
    <div>
      {props.group ? <NavHeading>{props.group}</NavHeading> : ""}
      <NavList>
        {items.map((pkg: string) => (
          <li key={pkg} style={{ padding: 0, margin: 0 }}>
            <NavLink pkg={pkg} {...props} />
          </li>
        ))}
      </NavList>
    </div>
  );
};

const NavBar = ({ pages, packages }) => {
  const childrenProps = { pages, packages };
  return packages?.menu ? (
    <div>
      {packages.menu.map((i: any) =>
        typeof i === "string" ? (
          <NavLink key={i} pkg={i} {...childrenProps} />
        ) : (
          <NavGroup key={i} group={i[0]} items={i[1]} {...childrenProps} />
        )
      )}
    </div>
  ) : (
    <NavGroup items={pages.map((p) => p.url)} {...childrenProps} />
  );
};

export default ({ __staticProps, ...props }) => {
  const navbarProps = { ...__staticProps, ...props };
  return (
    <MDXProvider components={{ Playground,Props,Showcases,Space }}>
      <div
        style={{ display: "flex", boxSizing: "border-box" }}
        className="markdown-body"
      >
        <NavBar {...navbarProps} />
        <main>{props.children}</main>
      </div>
    </MDXProvider>
  );
};

// TODO next, previous, inEditor,
