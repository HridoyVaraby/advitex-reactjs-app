import React from "react";

import { Link } from "react-router-dom";
export default function Features() {
  return (
    <div className="section-about tf-spacing-19">
      <div className="tf-container-3">
        <div className="box-choose style-1">
          <div className="content">
            <div className="heading-section">
              <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_15">
                Why Choose Us
              </div>
              <h3 className="split-text effect-right">
                Turn your vision into a financially sound strategy
              </h3>
              <p className="text-body-1 mt_23 split-text split-lines-transform">
                Their expert guidance in streamlining our cash flow processes
                and optimizing operational costs has saved us 18% in annual
                expenditures.
              </p>
            </div>
            <div className="bot">
              <ul className="list-check">
                <li
                  className="text-body-1 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  <i className="icon-check-solid" />
                  Customized financial roadmaps
                </li>
                <li
                  className="text-body-1 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  <i className="icon-check-solid" />
                  Cash flow forecasting and budgeting
                </li>
                <li
                  className="text-body-1 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  <i className="icon-check-solid" />
                  Long-term growth and sustainability strategies
                </li>
              </ul>
              <Link
                to={`/about`}
                className="tf-btn btn-dark rounded-0 btn-px-28 height-2 wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
              >
                <span>View Details</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="img-style img-custom-anim-right wow">
            <img
              className="lazyload"
              data-src="/images/section/section-choose.jpg"
              alt="testimonial"
              src="/images/section/section-choose.jpg"
              width={510}
              height={698}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
