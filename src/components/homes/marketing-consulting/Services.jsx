import React, { useState } from "react";
import { Link } from "react-router-dom";

import { services3 } from "@/data/services";
export default function Services() {
  const [activeService, setActiveService] = useState(1);
  return (
    <div className="section-service style-1">
      <div className="tf-container-2">
        <div className="heading-section d-flex gap_12 justify-content-between flex-wrap-md mb_59">
          <div className="left">
            <div className="heading-tag d-flex gap_12 mb_20 text_mono-dark-8 fw-5">
              <div className="icon">
                <i className="icon-customer-service" />
              </div>
              <p className="text-body-3 fw-5">Services</p>
            </div>
            <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
              Getting start is <span className="text-gradient">easy</span>
            </h2>
          </div>
          <div className="right">
            <p className="text-body-1 text_mono-gray-7 split-text split-lines-transform">
              Explore our range of expert services designed to <br />
              elevate your business. From strategic planning to <br />
              execution, we deliver solutions.
            </p>
          </div>
        </div>
        <div className="top mb_48">
          <div className="navigation-bar overflow-x-auto">
            <div
              className={`nav-item  ${activeService == 1 ? "is-active" : ""} `}
              onClick={() => setActiveService(1)}
            >
              Market Research &amp; Analysis
            </div>
            <div
              className={`nav-item  ${activeService == 2 ? "is-active" : ""} `}
              onClick={() => setActiveService(2)}
            >
              Brand Development &amp; Positioning
            </div>
            <div
              className={`nav-item  ${activeService == 3 ? "is-active" : ""} `}
              onClick={() => setActiveService(3)}
            >
              Digital Marketing
            </div>
          </div>
          <div className="navigation-arrows">
            <div
              className="arrow"
              onClick={() =>
                setActiveService((pre) => (pre == 1 ? 3 : pre - 1))
              }
              id="prevButton"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 11.9998L20 11.9998"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="arrow"
              onClick={() =>
                setActiveService((pre) => (pre == 3 ? 1 : pre + 1))
              }
              id="nextButton"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11.9998L4 11.9998"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="service-accordion" style={{ "--main-width": "100%" }}>
          <div className="wrap">
            <div className="slider-wrap">
              {services3.map((service, index) => (
                <div
                  className={`service-accordion-item ${
                    index + 1 == activeService ? "is-active" : ""
                  } `}
                  id={service.id}
                  key={service.id}
                  onClick={() => setActiveService(index + 1)}
                >
                  <div className="item-inner">
                    <div className="naming-list">
                      <span className="text_mono-gray-5">{service.number}</span>
                      <div className="title text-body-3 text_mono-dark-9">
                        {service.title}
                      </div>
                    </div>
                    <div className="box-service style-3">
                      <div className="left">
                        <h5 className="fw-5 title">{service.title}</h5>
                        <div className="bot">
                          <p className="text-body-1 text_mono-gray-7 mb_29">
                            {service.description}
                          </p>
                          <Link
                            to={`/service-details/${service.id}`}
                            className="btn_link text-body-1 text_mono-dark-9 link"
                          >
                            <span>Learn More</span>
                            <i className="icon-long-arrow-alt-right-solid" />
                          </Link>
                        </div>
                      </div>
                      <div className="right">
                        <div className="img-style">
                          <img
                            className="lazyload"
                            data-src={service.image}
                            alt="service"
                            src={service.image}
                            width={393}
                            height={417}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
