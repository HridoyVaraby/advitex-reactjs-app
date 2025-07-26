import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { services } from "@/data/services";
export default function Footer5() {
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
    <footer id="footer" className="footer style-4">
      <div className="footer-wrap">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="footer-top">
                <div className="footer-newsletter">
                  <h6 className="footer-heading text_white fw-5">
                    Our Newsletter
                  </h6>
                  <div className="tf-collapse-content">
                    <div className="wrap-newsletter">
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
                        className="form-newsletter style-1 subscribe-form"
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
                              className="subscribe-button tf-btn"
                              type="submit"
                            >
                              <span>Subcribe Now</span>
                              <span className="bg-effect" />
                            </button>
                          </div>
                          <div className="icon">
                            <i className="icon-envelope-solid" />
                          </div>
                        </div>
                        <div id="subscribe-msg" className="subscribe-msg" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="wrap-social">
                  <h6 className="footer-heading text_white text_white fw-5">
                    Our Social
                  </h6>
                  <div className="tf-social">
                    <a href="https://www.linkedin.com/company/spreadcommunications/" className="icon-linkedin-in" />
                    <a href="https://www.behance.net/spread360" className="icon-behance" />
                    <a href="https://www.facebook.com/spreadcommunicationsnet/" className="icon-facebook-f" />
                  </div>
                </div>
              </div>
              <div className="footer-body">
                <div className="left flex-md-row">
                  <div className="footer-col-block">
                    <div className="text-body-1 footer-heading footer-heading-mobile text_white fw-5">
                      Useful Links
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
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col-block">
                    <div className="text-body-1 footer-heading footer-heading-mobile text_white fw-5">
                      Company
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-3 text_mono-gray-8">
                          <Link to={`/about`} className="link footer-menu_item">
                            About Us
                          </Link>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <Link
                            to={`/contact-us`}
                            className="link footer-menu_item"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <Link
                            to={`/blog`}
                            className="link footer-menu_item"
                          >
                            Blog/News Updates
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col-block">
                    <div className="text-body-1 footer-heading footer-heading-mobile text_white fw-5">
                      Our Concerns
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-3 text_mono-gray-8">
                          <Link to={`#`} className="link footer-menu_item">
                            WezappsTech
                          </Link>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <Link to={`#`} className="link footer-menu_item">
                            The Station
                          </Link>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <Link to={`#`} className="link footer-menu_item">
                            Taxolution
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="footer-about">
                    <div className="footer-info mb_51">
                      <a href="#" className="link text-body-2 text_white">
                        spread360.live@gmail.com
                      </a>
                      <div className="text-body-2 text_white">
                        House - 73, Road - 2, Block - A, Niketan, <br />
                        Gulshan 1, Dhaka - 1213, Bangladesh
                      </div>
                      <div className="text-body-2 text_white">
                        +880 1701-000654
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="wrapper d-flex align-items-end flex-wrap gap_12">
                  <ul className="left d-flex align-items-center">
                    <li>
                      <Link
                        to={`/pricing`}
                        className="link text_mono-gray-5 text-body-3"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="link text_mono-gray-5 text-body-3">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link text_mono-gray-5 text-body-3">
                        Cookies
                      </a>
                    </li>
                  </ul>
                  <div className="footer-logo mb-0">
                    <img
                      alt="Spread Logo"
                      src="/images/logo/spread_logo_white.png"
                      width={256}
                      height={50}
                    />
                  </div>
                </div>
                <p className="text-body-3 text-center text_mono-gray-5">
                  © {new Date().getFullYear()} Copyright by -{" "}
                  <a href="#" className="link text_mono-gray-5 text-body-3">
                    Spread Communications.
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
