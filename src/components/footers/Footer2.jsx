import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { services } from "@/data/services";
export default function Footer2() {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer id="footer" className="footer style-1">
      <div className="footer-wrap">
        <div className="tf-container">
          <div className="footer-body">
            <div className="row">
              <div className="col-xl-6">
                <div className="left">
                  <div className="content flex-md-row">
                    <div className="footer-col-block">
                      <div className="text-body-1 footer-heading text_white footer-heading-mobile">
                        Services
                      </div>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          {services.map((service, index) => (
                            <li
                              key={index}
                              className="text-body-3 text_mono-gray-8"
                            >
                              <Link
                                to={`/service-details/${service.id}`}
                                className="link footer-menu_item"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                          <li className="text-body-3 text_mono-gray-8" />
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col-block home">
                      <div className="text-body-1 footer-heading text_white footer-heading-mobile">
                        Home
                      </div>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li className="text-body-3 text_mono-gray-8">
                            <Link
                              to={`/about`}
                              className="link footer-menu_item"
                            >
                              Page
                            </Link>
                          </li>
                          <li className="text-body-3 text_mono-gray-8">
                            <Link
                              to={`/blog`}
                              className="link footer-menu_item"
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="text-body-3 text_mono-gray-8">
                            <Link
                              to={`/portfolio`}
                              className="link footer-menu_item"
                            >
                              Project
                            </Link>
                          </li>
                          <li className="text-body-3 text_mono-gray-8">
                            <Link
                              to={`/contact-us`}
                              className="link footer-menu_item"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col-block contact">
                      <div className="text-body-1 footer-heading text_white footer-heading-mobile">
                        Contact
                      </div>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li className="text_mono-gray-6">
                            <span className="text-body-3 text_mono-gray-8">
                              Address
                            </span>
                            <p className="text-body-3 text_white">
                              58 Howard, San Francisco CA 411
                            </p>
                          </li>
                          <li className="text_mono-gray-6">
                            <span className="text-body-3 text_mono-gray-8">
                              Email
                            </span>
                            <a href="#" className="text-body-3 text_white link">
                              themesflat@gmail.com
                            </a>
                          </li>
                          <li className="text_mono-gray-6">
                            <span className="text-body-3 text_mono-gray-8">
                              Fax
                            </span>
                            <a href="#" className="text-body-3 text_white link">
                              themesflat@gmail.com
                            </a>
                          </li>
                          <li className="text_mono-gray-6">
                            <span className="text-body-3 text_mono-gray-8">
                              Work Hour
                            </span>
                            <p className="text-body-3 text_white">
                              Mon - Sat: 9:00 - 18:00
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-logo mb-0">
                    <img
                      alt="logo"
                      src="/images/logo/footer-logo-2.1.png"
                      width={160}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="right">
                  <div className="content">
                    <h5 className="text_mono-dark-9 mb_11">
                      We’re here to help
                    </h5>
                    <p className="text_mono-gray-7 mb_25 text-body-3">
                      Have questions or need guidance? Our team is always
                      available to provide the support and expertise you need to
                      move forward with confidence.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="form-help d-grid gap_24"
                    >
                      <fieldset>
                        <input
                          className="rounded-0"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          className="rounded-0"
                          type="email"
                          placeholder="Email address"
                          required
                        />
                      </fieldset>
                      <fieldset className="mb_8">
                        <textarea
                          className="message rounded-0"
                          placeholder="Write something for us"
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        type="submit"
                        className="tf-btn btn-dark height-2 rounded-0 w-full"
                      >
                        <span>Get started</span>
                        <span className="bg-effect" />
                      </button>
                    </form>
                  </div>
                  <div className="image hide-sm">
                    <img
                      className="lazyload"
                      data-src="/images/section/banner-form-help.jpg"
                      alt="banner"
                      src="/images/section/banner-form-help.jpg"
                      width={406}
                      height={611}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper d-flex align-items-center flex-wrap gap_12">
                <p className="text-body-3 text_mono-gray-5">
                  © {new Date().getFullYear()}{" "}
                  <a href="#" className="link text_mono-gray-5 text-body-3">
                    Themesflat
                  </a>{" "}
                  . All Right Reserved.
                </p>
                <ul className="right d-flex align-items-center">
                  <li>
                    <Link
                      to={`/pricing`}
                      className="link text_mono-gray-5 text-body-3"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/service-details/1`}
                      className="link text_mono-gray-5 text-body-3"
                    >
                      Terms of Services
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="link text_mono-gray-5 text-body-3">
                      Virtual Reality
                    </a>
                  </li>
                </ul>
                <ul className="social d-flex gap_12 align-items-center">
                  <li>
                    <a href="#" className="icon-twitter text_white link" />
                  </li>
                  <li>
                    <a href="#" className="icon-facebook-f text_white link" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
