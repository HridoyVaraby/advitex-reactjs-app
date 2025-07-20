import {
  blogPages,
  homepages,
  otherPages,
  servicePages,
  shopPages,
} from "@/data/menu";

import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Mobilemenu() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];
  const isActiveParent = (links) => links.some((link) => isActive(link.href));

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="menu-mobile">
      <div className="offcanvas-header top-nav-mobile justify-content-between">
        <Link to={`/`} className="logo">
          <img
            alt="logo"
            src="/images/logo/footer-logo.png"
            width={390}
            height={80}
          />
        </Link>
        <div className="close-menu" data-bs-dismiss="offcanvas">
          <i className="icon-times-solid" />
        </div>
      </div>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li
                className={`nav-mb-item ${
                  isActiveParent(homepages) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-home"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-home"
                >
                  <span>Home</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-home"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {homepages.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(otherPages) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-pages"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-pages"
                >
                  <span>Pages</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-pages"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {otherPages.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(servicePages) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-services"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-services"
                >
                  <span>Serivce</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-services"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {servicePages.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(blogPages) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-blog"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-blog"
                >
                  <span>Blog</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-blog"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {blogPages.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(shopPages) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-shop"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-shop"
                >
                  <span>Shop</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-shop"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {shopPages.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActive("/contact-us") ? "active" : ""
                }`}
              >
                <Link to={`/contact-us`} className="mb-menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-other-content">
            <ul className="mb-info mb_20">
              <li>
                <p className="text_mono-gray">
                  Address:
                  <a
                    target="_blank"
                    href="https://www.google.com/maps?q=16/9,ScotlandUnitedKingdom"
                  >
                    <span className="fw-5 text_mono-gray-5">
                      16/9, Scotland United Kingdom
                    </span>
                  </a>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Email:
                  <a href="mailto:themesflat@gmail.com">
                    <span className="fw-5 text_mono-gray-5">
                      themesflat@gmail.com
                    </span>
                  </a>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Phone:
                  <a href="tel:+11635565389">
                    <span className="fw-5 text_mono-gray-5">
                      +1 16355 65389
                    </span>
                  </a>
                </p>
              </li>
            </ul>
            <div className="mb-wrap-btn d-flex gap_12">
              <Link to={`/pricing`} className="tf-btn">
                <span>Get Started</span>
                <span className="bg-effect" />
              </Link>
              <Link to={`/contact-us`} className="tf-btn">
                <span>Contact Us</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
