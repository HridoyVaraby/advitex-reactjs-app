import React from "react";

export default function Faqs() {
  return (
    <div className="section-faqs style-3 tf-spacing-22">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading-section sticky-element">
              <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_12">
                FAQs
              </div>
              <h2 className="split-text split-lines-rotation-x">
                Have questions? Explore our FAQs for clear insights and quick
                solutions
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}
