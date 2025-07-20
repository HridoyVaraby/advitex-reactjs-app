import React from "react";

export default function Faqs({
  parentClass = "section-faqs style-1 tf-spacing-8 pt-0",
  headingClass = "heading-title split-text effect-right",
  header2 = false,
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container">
        <div
          className={`heading-section text-center ${
            header2 ? "mb_86" : "mb_92"
          } `}
        >
          {header2 ? (
            <h2 className={headingClass}>Got a question? Get your answer</h2>
          ) : (
            <h1 className={headingClass}>Got a question? Get your answer</h1>
          )}
          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            We revolutionize industries with dynamic digital solutions, tailored
            to meet contemporary demands and <br />
            drive impactful transformations for businesses of all sectors.
          </p>
        </div>
        <ul
          className="accordion-wrap gap-16 style-faqs d-grid gap_16"
          id="accordion-faq-1"
        >
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-1"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-1"
            >
              <div className="heading">
                <h5 className="title">
                  How benefit that We got when choose Basic plan?
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-1"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom active style-default v2">
            <a
              href="#accordion-2"
              className="accordion-title action current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2"
            >
              <div className="heading">
                <h5 className="title">Our project will 100% Secure?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-2"
              className="collapse show"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-3"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-3"
            >
              <div className="heading">
                <h5 className="title">NDA Agreement will include?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-3"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-4"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-4"
            >
              <div className="heading">
                <h5 className="title">
                  Can my premium license be used for all devices?
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-4"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-5"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-5"
            >
              <div className="heading">
                <h5 className="title">
                  What things that we need provide when choose your service
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-5"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-6"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-6"
            >
              <div className="heading">
                <h5 className="title">How long for a standard project?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-6"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Through the collaboration with customers in discussing needs
                  and demand, we’re able to attain <br />
                  mutual understand again customer trust to offer appropriate
                  advice.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
