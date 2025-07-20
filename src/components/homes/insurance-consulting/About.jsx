import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="section">
      <div className="tf-container">
        <div className="box-about style-2">
          <div className="left">
            <div className="heading-section mb_50">
              <div className="point text-body-1 mb_14">
                <span className="item" />
                About Us
              </div>
              <h3 className="heading-title text_mono-dark-9">
                We’re A Trusted And Professional Insurance Company,{" "}
                <img
                  alt="item"
                  className="wow animate__rollIn animate__animated"
                  data-wow-delay="0.4s"
                  src="/images/item/item-title.png"
                  width={48}
                  height={48}
                />{" "}
                Committed To Your Financial Security.
              </h3>
            </div>
            <div className="bot">
              <div className="clutch-rating-item style-1 d-flex align-items-center mb_16">
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
              <p className="text-body-1 text_mono-gray-6 mb_31">
                As a trusted and professional insurance company, we are
                committed to providing comprehensive coverage and exceptional
                service to our <br />
                valued clients.
              </p>
              <Link
                to={`/about`}
                className="tf-btn height-2 rounded-12 btn-px-28"
              >
                <span>View Details</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img
                alt="item"
                src="/images/section/section-about-1.jpg"
                width={760}
                height={760}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
