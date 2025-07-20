import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("simple-parallax-js/vanilla").then(
        ({ default: SimpleParallax }) => {
          const elements = document.querySelectorAll(".parallaxie");

          if (elements.length > 0) {
            elements.forEach((element) => {
              new SimpleParallax(element, {
                delay: 0.5,
                orientation: "up",
                scale: 1.7,
                transition: "cubic-bezier(0.2, 0.8, 1, 1)",
                customContainer: "",
                customWrapper: "",
              });
            });
          }
        }
      );
    }
  }, []);
  return (
    <>
      <div className="section-CTA tf-spacing-21">
        <div className="tf-container">
          <div className="box-inner">
            <div className="row">
              <div className="col-lg-7">
                <div className="left d-flex flex-column justify-content-between">
                  <div className="heading-section">
                    <h1 className="text_white split-text effect-right">
                      Let Us Guide You Toward Clarity
                    </h1>
                    <p
                      className="text-body-2 text_mono-gray-3 mt_13 wow animate__fadeInUp animate__animated"
                      data-wow-delay="0s"
                    >
                      Firms using legacy systems experience 30% slower
                      decision-making <br />
                      processes and up to 40% higher operational costs.
                    </p>
                  </div>
                  <Link
                    to={`/contact-us`}
                    className="tf-btn btn-white rounded-0 btn-px-28 height-2 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    <span>Get in touch</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="list d-flex flex-column gap_17">
                  <li
                    className="text-body-1 text_white d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    <i className="icon-check-solid" />
                    We offering customized strategies that truly work for you
                  </li>
                  <li
                    className="text-body-1 text_white d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0.1s"
                  >
                    <i className="icon-check-solid" />
                    Brings the knowledge and insights you need to make informed
                    decisions that drive success.
                  </li>
                  <li
                    className="text-body-1 text_white d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0.2s"
                  >
                    <i className="icon-check-solid" />
                    Cancel anytime you want
                  </li>
                  <li
                    className="text-body-1 text_white d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0.3s"
                  >
                    <i className="icon-check-solid" />
                    Proven Results and Client Satisfaction
                  </li>
                  <li
                    className="text-body-1 text_white d-flex align-items-center gap_24 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0.4s"
                  >
                    <i className="icon-check-solid" />
                    Comprehensive package for all stages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="wrap parallaxie"
            style={{ background: 'url("/images/section/cta.jpg")' }}
          />
        </div>
      </div>
    </>
  );
}
