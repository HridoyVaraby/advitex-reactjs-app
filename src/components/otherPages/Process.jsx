import React from "react";

export default function Process() {
  return (
    <div className="section-process style-1 tf-spacing-5 pb-0">
      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div className="col-xl-6">
              <div className="left">
                <div className="heading-secion mb_86">
                  <h1 className="heading-title split-text effect-right">
                    Our Approach
                  </h1>
                  <p
                    className="text-body-1 text_mono-gray-7 mt_20 mt_20 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    We rely on datadriven analysis and rigorous methodologies{" "}
                    <br />
                    to inform our decisions and ensure accuracy.
                  </p>
                </div>
                <ul
                  className="accordion-wrap gap-16 style-faqs"
                  id="accordion-approach"
                >
                  <li className="accordion-item action_click scrolling-effect effectBottom style-default">
                    <a
                      href="#accordion-approach-1"
                      className="accordion-title action collapsed current"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="accordion-approach-1"
                    >
                      <div className="heading">
                        <h3 className="text_mono-gray-5 title">
                          <span className="text_primary">1.</span>Story &amp;
                          Reserach
                        </h3>
                      </div>
                      <span className="icon" />
                    </a>
                    <div
                      id="accordion-approach-1"
                      className="collapse"
                      data-bs-parent="#accordion-approach"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-1">
                          The research gathered to inform the development of the
                          story provides the foundation for a product or
                          service, shaping its direction and purpose.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item action_click scrolling-effect effectBottom active style-default">
                    <a
                      href="#accordion-approach-2"
                      className="accordion-title action current"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="accordion-approach-2"
                    >
                      <div className="heading">
                        <h3 className="text_mono-gray-5 title">
                          <span className="text_primary">2.</span> Strategy
                          &amp; Concept
                        </h3>
                      </div>
                      <span className="icon" />
                    </a>
                    <div
                      id="accordion-approach-2"
                      className="collapse show"
                      data-bs-parent="#accordion-approach"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-1">
                          The research gathered to inform the development of the
                          story provides the foundation for a product or
                          service, shaping its direction and purpose.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item action_click scrolling-effect effectBottom style-default">
                    <a
                      href="#accordion-approach-3"
                      className="accordion-title action collapsed current"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="accordion-approach-3"
                    >
                      <div className="heading">
                        <h3 className="text_mono-gray-5 title">
                          <span className="text_primary">3.</span>
                          Implementation
                        </h3>
                      </div>
                      <span className="icon" />
                    </a>
                    <div
                      id="accordion-approach-3"
                      className="collapse"
                      data-bs-parent="#accordion-approach"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-1">
                          The research gathered to inform the development of the
                          story provides the foundation for a product or
                          service, shaping its direction and purpose.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item action_click scrolling-effect effectBottom style-default">
                    <a
                      href="#accordion-approach-4"
                      className="accordion-title action collapsed current"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="accordion-approach-4"
                    >
                      <div className="heading">
                        <h3 className="text_mono-gray-5 title">
                          <span className="text_primary">4.</span>Usability
                          Testing
                        </h3>
                      </div>
                      <span className="icon" />
                    </a>
                    <div
                      id="accordion-approach-4"
                      className="collapse"
                      data-bs-parent="#accordion-approach"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-1">
                          To place an order, browse our We differentiate
                          ourselves through our commitment to innovation,
                          personalized solutions, and client satisfaction. We
                          differentiate ourselves through our commitment to
                          innovation, personalized solutions, and client
                          satisfaction.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item action_click scrolling-effect effectBottom style-default">
                    <a
                      href="#accordion--approach-5"
                      className="accordion-title action collapsed current"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="accordion--approach-5"
                    >
                      <div className="heading">
                        <h3 className="text_mono-gray-5 title">
                          <span className="text_primary">5.</span>Guide &amp;
                          Hand Over
                        </h3>
                      </div>
                      <span className="icon" />
                    </a>
                    <div
                      id="accordion--approach-5"
                      className="collapse"
                      data-bs-parent="#accordion-approach"
                    >
                      <div className="accordion-faqs-content">
                        <p className="text-body-1">
                          To place an order, browse our We differentiate
                          ourselves through our commitment to innovation,
                          personalized solutions, and client satisfaction. We
                          differentiate ourselves through our commitment to
                          innovation, personalized solutions, and client
                          satisfaction.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 right">
              <div className="shape-img-bg shape-border style-2 scroll-tranform">
                <img
                  alt="img"
                  className="wow img-custom-anim-right"
                  src="/images/section/img-with-shape-5.jpg"
                  width={682}
                  height={535}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
