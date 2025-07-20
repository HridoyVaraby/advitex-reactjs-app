import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer4() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
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
    <footer id="footer" className="footer style-3">
      <div className="footer-wrap">
        <div className="tf-container">
          <div className="footer-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-about">
                  <Link to={`/`} className="footer-logo">
                    <img
                      alt="logo"
                      src="/images/logo/footer-logo-2.png"
                      width={390}
                      height={80}
                    />
                  </Link>
                  <div className="footer-info mb_51">
                    <a href="#" className="link text-body-2 text_white">
                      themesflat@gmail.com
                    </a>
                    <div className="text-body-2 text_white">
                      152 Thatcher Road St, Mahattan, NY 10463,
                      <br />
                      United States
                    </div>
                    <div className="text-body-2 text_white">
                      (+068) 568 9696
                    </div>
                  </div>
                  <div className="tf-social">
                    <a href="#" className="icon-twitter-x" />
                    <a href="#" className="icon-facebook-f" />
                    <a href="#" className="icon-github" />
                    <a href="#" className="icon-instagram" />
                    <a href="#" className="icon-youtube" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-col-block">
                  <h6 className="footer-heading footer-heading-mobile text_white">
                    Company
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li className="text-body-2 text_mono-gray-4">
                        <Link to={`/about`} className="link footer-menu_item">
                          About Advitex
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-4">
                        <Link
                          to={`/contact-us`}
                          className="link footer-menu_item"
                        >
                          Contact us
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-4">
                        <Link
                          to={`/portfolio`}
                          className="link footer-menu_item"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-4">
                        <Link to={`/faqs`} className="link footer-menu_item">
                          How We Work
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-4">
                        <Link to={`/career`} className="link footer-menu_item">
                          Career
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-4">
                        <Link to={`/team`} className="link footer-menu_item">
                          Our Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div>
                  <div className="footer-col-block">
                    <h6 className="footer-heading footer-heading-mobile text_white">
                      Links
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-4">
                          <Link
                            to={`/contact-us`}
                            className="link footer-menu_item"
                          >
                            Help Center
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-4">
                          <Link
                            to={`/pricing`}
                            className="link footer-menu_item"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-4">
                          <a href="#" className="link footer-menu_item">
                            Term &amp; Conditon
                          </a>
                        </li>
                        <li className="text-body-2 text_mono-gray-4">
                          <Link to={`/FAQs`} className="link footer-menu_item">
                            FAQs
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-newsletter">
                  <h6 className="footer-heading text_white">
                    Subscribe Our Newseltter
                  </h6>
                  <div className="tf-collapse-content">
                    <div className="wrap-newsletter">
                      <p className="text-body-2 text_mono-gray-4 mb_29">
                        Sign up to get first dibs on new arrivals, sales
                        exclusive content, events and more!
                      </p>
                      <div
                        className={`tfSubscribeMsg  footer-sub-element ${
                          showMessage ? "active" : ""
                        }`}
                      >
                        {success ? (
                          <p style={{ color: "rgb(52, 168, 83)" }}>
                            You have successfully subscribed.
                          </p>
                        ) : (
                          <p style={{ color: "red" }}>Something went wrong</p>
                        )}
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          sendEmail(e);
                        }}
                        id="subscribe-form"
                        className="form-newsletter style-1 subscribe-form mb_10"
                      >
                        <div
                          id="subscribe-content"
                          className="subscribe-content"
                        >
                          <fieldset className="email">
                            <input
                              id="subscribe-email"
                              type="email"
                              name="email"
                              className="subscribe-email style-2"
                              placeholder="Enter your e-mail"
                              tabIndex={0}
                              aria-required="true"
                            />
                          </fieldset>
                          <div className="button-submit">
                            <button
                              id="subscribe-button"
                              className="subscribe-button tf-btn rounded-12"
                              type="submit"
                            >
                              <span>Subscribe</span>
                              <span className="bg-effect" />
                            </button>
                          </div>
                          <div className="icon">
                            <i className="icon-envelope-solid" />
                          </div>
                        </div>
                        <div id="subscribe-msg" className="subscribe-msg" />
                      </form>
                      <p className="description text-body-2 text_white">
                        By subscribing, you accepted the our{" "}
                        <a href="#" className="link-white text_primary">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
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
                <p className="text-body-2 text_mono-gray-4">
                  © {new Date().getFullYear()} Copyright by{" "}
                  <a href="#" className="link text_white text-body-3">
                    Themesflat
                  </a>{" "}
                  . All Right Reserved.
                </p>
                <ul className="right d-flex align-items-center">
                  <li>
                    <Link
                      to={`/`}
                      className="link-white text_mono-gray-5 text-body-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/about`}
                      className="link-white text_mono-gray-5 text-body-1"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/services`}
                      className="link-white text_mono-gray-5 text-body-1"
                    >
                      Serivce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/blog`}
                      className="link-white text_mono-gray-5 text-body-1"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/contact-us`}
                      className="link-white text_mono-gray-5 text-body-1"
                    >
                      Contact
                    </Link>
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
