import React from "react";
import { NavLink } from "./NavLink";

export const NavGroup = ({ items, ...props }) => (
  <ul className="navgroup">
    {items.map((i: string) =>
      typeof i === "string" ? (
        <li key={i} className="navitem">
          <NavLink pkg={i} {...props} />
        </li>
      ) : (
        <li key={i}>
          <h4>{i[0]}</h4>
          <NavGroup group={i[0]} items={i[1]} {...props} />
        </li>
      )
    )}
  </ul>
);
