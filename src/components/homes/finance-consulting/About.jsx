import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="section-about tf-spacing-7 pt-0">
      <div className="tf-container-3">
        <div className="box-about style-1">
          <div className="img-style img-custom-anim-left wow">
            <img
              className="lazyload"
              data-src="/images/section/section-about.jpg"
              alt="testimonial"
              src="/images/section/section-about.jpg"
              width={510}
              height={698}
            />
          </div>
          <div className="content">
            <div className="heading-section">
              <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_13">
                About Us
              </div>
              <h3 className="split-text split-lines-rotation-x">
                Welcome to Advitex – driving your financial success with
                strategic expertise and solutions
              </h3>
            </div>
            <div className="bot">
              <div className="clutch-rating-item style-1 d-flex align-items-center">
                <div className="logo">
                  <svg
                    width={34}
                    height={38}
                    viewBox="0 0 34 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.363 31.4385C29.8792 35.4578 24.7365 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C24.7364 0 29.879 2.54213 33.3628 6.56127L27.8911 11.2998C25.7345 8.81185 22.551 7.23818 19 7.23818C12.5041 7.23818 7.23807 12.5042 7.23807 19.0001C7.23807 25.496 12.5041 30.762 19 30.762C22.5512 30.762 25.7348 29.1882 27.8914 26.7L33.363 31.4385Z"
                      fill="black"
                    />
                    <ellipse
                      cx="19.0003"
                      cy="19.0003"
                      rx="6.33333"
                      ry="6.33333"
                      fill="#EF2B10"
                    />
                  </svg>
                </div>
                <div>
                  <div className="wrap-ratings d-flex gap_13 align-items-center">
                    <div className="text-body-1 fw-6 font2 fw-6">4.9/5</div>
                    <div className="ratings">
                      <i className="icon-star-solid" />
                      <i className="icon-star-solid" />
                      <i className="icon-star-solid" />
                      <i className="icon-star-solid" />
                      <i className="icon-star-solid" />
                    </div>
                  </div>
                  <p className="text-body-4">Based on 24 reviews</p>
                </div>
              </div>
              <p className="text-body-1 text_mono-gray-7 mb_31">
                Their expert guidance in streamlining our cash flow processes
                and optimizing operational costs has saved us 18% in annual
                expenditures.
              </p>
              <Link
                to={`/about`}
                className="tf-btn btn-dark rounded-0 btn-px-28 height-2"
              >
                <span>View Details</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
