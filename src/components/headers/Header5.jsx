import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
export default function Header5() {
  return (
    <header className="header style-4">
      <div className="header-inner">
        <div className="tf-container-2">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link to={`/`} className="site-logo">
                    <img
                      src="/images/logo/spread_logo.png"
                      alt="Spread Logo"
                      width={180}
                      height={50}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <Nav />
                  </ul>
                </nav>
                <div className="header-right d-flex align-items-center">
                  {/*<Link
                    to={`/pricing`}
                    className="tf-btn btn-border hide-sm h36"
                  >
                    <span className="text-body-4">Get Started</span>
                    <span className="bg-effect" />
                    </Link> */}
                  <Link
                    to={`/contact-us`}
                    className="tf-btn btn-dark hide-sm h36"
                  >
                    <span className="text-body-4">Contact Us</span>
                    <span className="bg-effect" />
                  </Link>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <div className="burger">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
