import "@divriots/markdown-github/dist/index.css";
import { NavBar } from "./NavBar";
import { MDXProvider } from "@mdx-js/react";
import { Playground } from "../../playground/src/Playground";
import { Props } from "../../props/src/Props";
import { Showcases } from "../../showcases/src/Showcases";
import { Space } from "../../space/src/Space";
import React from "react";

export const Layout = ({ __staticProps, children, ...props }) => {
  const navbarProps = { ...__staticProps, ...props };
  return (
    <MDXProvider components={{ Playground, Props, Showcases, Space }}>
      <div
        style={{ display: "flex", boxSizing: "border-box" }}
        className="markdown-body"
      >
        <NavBar {...navbarProps} />
        <main>{children}</main>
      </div>
    </MDXProvider>
  );
};

// TODO next, previous, inEditor,
