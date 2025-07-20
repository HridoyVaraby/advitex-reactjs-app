import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];

  return (
    <>
      {" "}
      <li className={`${isActive("/") ? "current-menu" : ""}`}>
        <Link to="/">Home</Link>
      </li>
      <li className={`${isActive("/about") ? "current-menu" : ""}`}>
        <Link to="/about">About</Link>
      </li>
      <li className={`${isActive("/services") ? "current-menu" : ""}`}>
        <Link to="/services">Service</Link>
      </li>
      <li className={`${isActive("/portfolio") ? "current-menu" : ""}`}>
        <Link to="/portfolio">Case Study</Link>
      </li>
      <li className={`${isActive("/blog") ? "current-menu" : ""}`}>
        <Link to="/blog">Blog</Link>
      </li>
      <li className={` ${isActive("/contact-us") ? "current-menu" : ""} `}>
        <Link to={`/contact-us`}>Contact</Link>
      </li>

    </>
  );
}
