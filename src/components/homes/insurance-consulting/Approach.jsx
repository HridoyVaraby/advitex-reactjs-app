import React from "react";

export default function Approach() {
  return (
    <div className="section-approach style-1">
      <div className="tf-container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="heading-section mb_54">
              <div className="point text-body-1 mb_8">
                <span className="item" />
                Approach
              </div>
              <h2 className="heading-title text_primary">
                Helping You Make Informed Decisions
              </h2>
              <p className="text-body-1 text_mono-gray-6 mt_20">
                Navigate the world of insurance with ease. A streamlined
                approach to finding <br />
                the perfect plan.
              </p>
            </div>
            <ul
              className="accordion-wrap gap-16 style-faqs"
              id="accordion-approach"
            >
              <li className="accordion-item action_click scrolling-effect effectLeft style-default v5">
                <a
                  href="#accordion-approach-1"
                  className="accordion-title action collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-approach-1"
                >
                  <div className="heading">
                    <h4 className="text_mono-gray-5 title">
                      <span className="text_primary">1.</span>Personalized
                      Consultation
                    </h4>
                  </div>
                  <span className="icon" />
                </a>
                <div
                  id="accordion-approach-1"
                  className="collapse"
                  data-bs-parent="#accordion-approach"
                >
                  <div className="accordion-faqs-content">
                    <ul className="list">
                      <li className="text-body-1">
                        Tailored advice based on individual needs and
                        circumstances.
                      </li>
                      <li className="text-body-1">
                        Comprehensive assessment of financial goals and risk
                        tolerance.
                      </li>
                      <li className="text-body-1">
                        Clear and concise explanations of complex insurance
                        concepts.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="accordion-item action_click scrolling-effect effectLeft active style-default v5">
                <a
                  href="#accordion-approach-2"
                  className="accordion-title action current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-approach-2"
                >
                  <div className="heading">
                    <h4 className="text_mono-gray-5 title">
                      <span className="text_primary">2.</span> Comprehensive
                      Product Analysis
                    </h4>
                  </div>
                  <span className="icon" />
                </a>
                <div
                  id="accordion-approach-2"
                  className="collapse show"
                  data-bs-parent="#accordion-approach"
                >
                  <div className="accordion-faqs-content">
                    <ul className="list">
                      <li className="text-body-1">
                        Tailored advice based on individual needs and
                        circumstances.
                      </li>
                      <li className="text-body-1">
                        Comprehensive assessment of financial goals and risk
                        tolerance.
                      </li>
                      <li className="text-body-1">
                        Clear and concise explanations of complex insurance
                        concepts.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="accordion-item action_click scrolling-effect effectLeft style-default v5">
                <a
                  href="#accordion-approach-3"
                  className="accordion-title action collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-approach-3"
                >
                  <div className="heading">
                    <h4 className="text_mono-gray-5 title">
                      <span className="text_primary">3.</span> Proactive Risk
                      Management
                    </h4>
                  </div>
                  <span className="icon" />
                </a>
                <div
                  id="accordion-approach-3"
                  className="collapse"
                  data-bs-parent="#accordion-approach"
                >
                  <div className="accordion-faqs-content">
                    <ul className="list">
                      <li className="text-body-1">
                        Tailored advice based on individual needs and
                        circumstances.
                      </li>
                      <li className="text-body-1">
                        Comprehensive assessment of financial goals and risk
                        tolerance.
                      </li>
                      <li className="text-body-1">
                        Clear and concise explanations of complex insurance
                        concepts.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="accordion-item action_click scrolling-effect effectLeft style-default v5">
                <a
                  href="#accordion-approach-4"
                  className="accordion-title action collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-approach-4"
                >
                  <div className="heading">
                    <h4 className="text_mono-gray-5 title">
                      <span className="text_primary">4.</span>Exceptional Client
                      Service
                    </h4>
                  </div>
                  <span className="icon" />
                </a>
                <div
                  id="accordion-approach-4"
                  className="collapse"
                  data-bs-parent="#accordion-approach"
                >
                  <div className="accordion-faqs-content">
                    <ul className="list">
                      <li className="text-body-1">
                        Tailored advice based on individual needs and
                        circumstances.
                      </li>
                      <li className="text-body-1">
                        Comprehensive assessment of financial goals and risk
                        tolerance.
                      </li>
                      <li className="text-body-1">
                        Clear and concise explanations of complex insurance
                        concepts.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="right position-relative">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src="/images/section/section-approach.jpg"
                  alt="approach"
                  src="/images/section/section-approach.jpg"
                  width={873}
                  height={873}
                />
              </div>
              <div
                className="item approach-1 scroll-tranform"
                data-direction="left"
              >
                <img
                  alt="item"
                  src="/images/item/item-approach-1.png"
                  width={252}
                  height={161}
                />
              </div>
              <div
                className="item approach-2 scroll-tranform"
                data-direction="right"
              >
                <img
                  alt="item"
                  src="/images/item/item-approach-2.png"
                  width={311}
                  height={81}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
