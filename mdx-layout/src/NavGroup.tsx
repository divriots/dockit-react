import React from "react";
import { NavLink } from "./NavLink";

export const NavGroup = ({ items, ...props }) => (
  <div>
    {props.group ? <h4 className="navitem">{props.group}</h4> : ""}
    <ul className="navlist">
      {items.map((pkg: string) => (
        <li key={pkg} style={{ padding: 0, margin: 0 }}>
          <NavLink pkg={pkg} {...props} />
        </li>
      ))}
    </ul>
  </div>
);
