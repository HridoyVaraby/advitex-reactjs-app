import {
  blogPages,
  homepages,
  otherPages,
  servicePages,
  shopPages,
} from "@/data/menu";

import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];
  const isActiveParent = (links) => links.some((link) => isActive(link.href));
  return (
    <>
      {" "}
      <li
        className={`has-child ${
          isActiveParent(homepages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Home</a>
        <div className="submenu mega-menu">
          <div className="wrap-demo-item tf-grid-layout-lg lg-col-3">
            {homepages.map((item, index) => (
              <div
                key={index}
                className={`demo-item ${
                  isActive(item.href) ? "current-menu-item" : ""
                }`}
              >
                <Link to={item.href}>
                  <div className="demo-image">
                    <img
                      className="lazyload"
                      data-src={item.src}
                      src={item.src}
                      alt={item.alt}
                      width={480}
                      height={228}
                    />
                  </div>
                  <h6 className="demo-name fw-4">{item.title}</h6>
                </Link>
              </div>
            ))}
            <div className="comming-soon">
              <Link to={`/coming-soon`} className="wrap">
                <h5 className="demo-name">Coming Soon</h5>
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(otherPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Pages</a>
        <ul className="submenu">
          {otherPages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(servicePages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Serivce</a>
        <ul className="submenu">
          {servicePages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(blogPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Blog</a>
        <ul className="submenu">
          {blogPages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={` ${isActive("/contact-us") ? "current-menu" : ""} `}>
        <Link to={`/contact-us`}>Contact</Link>
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(shopPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Shop</a>
        <ul className="submenu">
          {shopPages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
