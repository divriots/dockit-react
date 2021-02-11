import "./NavBar.css";
import React from "react";
import { NavLink } from "./NavLink";
import { NavGroup } from "./NavGroup";

export const NavBar = ({ pages, packages }) => {
  const childrenProps = { pages, packages };
  return (
    <nav>
      {packages?.menu ? (
        packages.menu.map((i: any) =>
          typeof i === "string" ? (
            <NavLink key={i} pkg={i} {...childrenProps} />
          ) : (
            <NavGroup key={i} group={i[0]} items={i[1]} {...childrenProps} />
          )
        )
      ) : (
        <NavGroup items={pages.map((p) => p.url)} {...childrenProps} />
      )}
    </nav>
  );
};
