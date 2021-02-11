import React from "react";
import * as path from "path";

const relativeUrl = (url: string) =>
  path.join(
    Array(url.split("/").length - 1)
      .fill("..")
      .join("/"),
    url
  );

export const NavLink = ({ pkg, ...props }) => {
  const { pages, packages = {} } = props;
  const page = pages.find(
    (p) =>
      p.url === pkg ||
      p.url.startsWith(`${path.join(packages.dir || "", pkg, "doc")}`)
  );
  return page ? (
    <a
      className={location.href.endsWith(page.url) ? "selected" : ""}
      href={relativeUrl(page.url)}
    >
      {page.slug || pkg}
    </a>
  ) : (
    <span>pkg</span>
  );
};
