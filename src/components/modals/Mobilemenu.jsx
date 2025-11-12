import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Mobilemenu() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="menu-mobile">
      <div className="offcanvas-header top-nav-mobile justify-content-between">
        <Link to={`/`} className="logo">
          <img
            alt="logo"
            src="/images/logo/spread_logo.png"
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
                className={`nav-mb-item ${isActive("/") ? "active" : ""
                  }`}
              >
                <Link to="/" className="mb-menu-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-mb-item ${isActive("/about") ? "active" : ""
                  }`}
              >
                <Link to="/about" className="mb-menu-link">
                  About
                </Link>
              </li>
              <li
                className={`nav-mb-item ${isActive("/services") ? "active" : ""
                  }`}
              >
                <Link to="/services" className="mb-menu-link">
                  Service
                </Link>
              </li>
              <li
                className={`nav-mb-item ${isActive("/testimonials") ? "active" : ""
                  }`}
              >
                <Link to="/testimonials" className="mb-menu-link">
                  Clients
                </Link>
              </li>
              <li className="nav-mb-item">
                <a 
                  href="#" 
                  className="mb-menu-link" 
                  onClick={(e) => e.preventDefault()} 
                  style={{ cursor: 'default', pointerEvents: 'none' }}
                >
                  Case Study
                </a>
              </li>
              <li
                className={`nav-mb-item ${isActive("/blog") ? "active" : ""
                  }`}
              >
                <Link to="/blog" className="mb-menu-link">
                  Blog
                </Link>
              </li>
              <li
                className={`nav-mb-item ${isActive("/contact-us") ? "active" : ""
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
                  <span className="fw-5 text_mono-gray-5">
                    Flat 4B, House 94/2, Road 10, Block D, Niketan Society, Dhaka 1212, Bangladesh
                  </span>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Email:
                  <span className="fw-5 text_mono-gray-5">
                    spread360.live@gmail.com
                  </span>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Phone:
                  <span className="fw-5 text_mono-gray-5">
                    +880 1701-000654
                  </span>
                </p>
              </li>
            </ul>
            {/* <div className="mb-wrap-btn d-flex gap_12">
              <Link to={`/pricing`} className="tf-btn">
                <span>Get Started</span>
                <span className="bg-effect" />
              </Link>
              <Link to={`/contact-us`} className="tf-btn">
                <span>Contact Us</span>
                <span className="bg-effect" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
