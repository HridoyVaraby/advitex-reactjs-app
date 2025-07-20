import React from "react";
import { Link } from "react-router-dom";
export default function Faq() {
  return (
    <div className="section-faqs style-2 tf-spacing-20">
      <div className="tf-container">
        <div className="heading-section text-center mb_64">
          <div className="heading-tag style-2 text_mono-gray-5 text-body-3 mx-auto mb_12">
            FAQs
          </div>
          <h1 className="heading-title fw-6 split-text effect-right">
            Have questions? Explore our FAQs
          </h1>
          <p
            className="text-body-1 text_mono-gray-7 mt_21 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Providing expert financial consulting services to help you grow,
            optimize, and <br />
            thrive in today's competitive landscape
          </p>
        </div>
        <ul
          className="accordion-wrap style-faqs d-grid gap_24"
          id="accordion-faq-2"
        >
          <li className="accordion-item action_click style-1 scrolling-effect effectRight">
            <a
              href="#accordion-2-1"
              className="action accordion-title collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2-1"
            >
              <div className="heading">
                <div className="text_mono-dark-9 text-body-1 title fw-5">
                  Do you provide personalized financial plans?
                </div>
              </div>
              <div className="icon" />
            </a>
            <div
              id="accordion-2-1"
              className="collapse"
              data-bs-parent="#accordion-faq-2"
            >
              <div className="accordion-faqs-content">
                <p className="text_mono-dark-9 text-body-2">
                  Advitex offers a range of financial consulting services,
                  including personal financial planning, corporate strategy,
                  investment advisory, and risk compliance. We tailor our
                  solutions to help individuals, businesses, and investors
                  achieve their financial goals efficiently.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click active style-1 scrolling-effect effectRight">
            <a
              href="#accordion-2-2"
              className="action accordion-title current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2-2"
            >
              <div className="heading">
                <div className="text_mono-dark-9 text-body-1 title fw-5">
                  How can financial consulting benefit my business?
                </div>
              </div>
              <div className="icon" />
            </a>
            <div
              id="accordion-2-2"
              className="collapse show"
              data-bs-parent="#accordion-faq-2"
            >
              <div className="accordion-faqs-content">
                <p className="text_mono-dark-9 text-body-2">
                  Advitex offers a range of financial consulting services,
                  including personal financial planning, corporate strategy,
                  investment advisory, and risk compliance. We tailor our
                  solutions to help individuals, businesses, and investors
                  achieve their financial goals efficiently.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click style-1 scrolling-effect effectRight">
            <a
              href="#accordion-2-3"
              className="action accordion-title collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2-3"
            >
              <div className="heading">
                <div className="text_mono-dark-9 text-body-1 title fw-5">
                  What services does Advitex offer?
                </div>
              </div>
              <div className="icon" />
            </a>
            <div
              id="accordion-2-3"
              className="collapse"
              data-bs-parent="#accordion-faq-2"
            >
              <div className="accordion-faqs-content">
                <p className="text_mono-dark-9 text-body-2">
                  Advitex offers a range of financial consulting services,
                  including personal financial planning, corporate strategy,
                  investment advisory, and risk compliance. We tailor our
                  solutions to help individuals, businesses, and investors
                  achieve their financial goals efficiently.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click style-1 scrolling-effect effectRight">
            <a
              href="#accordion-2-4"
              className="action accordion-title collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2-4"
            >
              <div className="heading">
                <div className="text_mono-dark-9 text-body-1 title fw-5">
                  What industries do you specialize in?
                </div>
              </div>
              <div className="icon" />
            </a>
            <div
              id="accordion-2-4"
              className="collapse"
              data-bs-parent="#accordion-faq-2"
            >
              <div className="accordion-faqs-content">
                <p className="text_mono-dark-9 text-body-2">
                  Advitex offers a range of financial consulting services,
                  including personal financial planning, corporate strategy,
                  investment advisory, and risk compliance. We tailor our
                  solutions to help individuals, businesses, and investors
                  achieve their financial goals efficiently.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click style-1 scrolling-effect effectRight">
            <a
              href="#accordion-2-5"
              className="action accordion-title collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2-5"
            >
              <div className="heading">
                <div className="text_mono-dark-9 text-body-1 title fw-5">
                  How long does the consultation process take?
                </div>
              </div>
              <div className="icon" />
            </a>
            <div
              id="accordion-2-5"
              className="collapse"
              data-bs-parent="#accordion-faq-2"
            >
              <div className="accordion-faqs-content">
                <p className="text_mono-dark-9 text-body-2">
                  Advitex offers a range of financial consulting services,
                  including personal financial planning, corporate strategy,
                  investment advisory, and risk compliance. We tailor our
                  solutions to help individuals, businesses, and investors
                  achieve their financial goals efficiently.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="bot text-center">
          <div className="text-body-1 text_mono-gray-7">
            If you can't find your answer, please{" "}
            <Link
              to={`/contact-us`}
              className="link text_black fw-5 text-decoration-underline"
            >
              Contact Us
            </Link>
          </div>
          <Link to={`/faqs`} className="tf-btn btn-primary2 height-2 mx-auto">
            <span>All questions</span>
            <span className="bg-effect" />
          </Link>
        </div>
      </div>
    </div>
  );
}
