import React from "react";
import { Link } from "react-router-dom";

import { counterItems4 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function Figures() {
  return (
    <div className="section-figures position-relative">
      <div className="tf-container-2">
        <div className="heading-section d-flex gap_12 justify-content-between flex-wrap-md mb_59">
          <div className="left">
            <div className="heading-tag d-flex gap_12 v2 mb_20 fw-5">
              <div className="icon">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10160_68)">
                    <circle
                      cx="4.6875"
                      cy="4.6875"
                      r="3.1875"
                      stroke="#7E8995"
                      strokeWidth="1.125"
                    />
                    <circle
                      cx="13.3125"
                      cy="13.3125"
                      r="3.1875"
                      stroke="#7E8995"
                      strokeWidth="1.125"
                    />
                    <circle
                      cx="4.6875"
                      cy="13.3125"
                      r="3.1875"
                      stroke="#7E8995"
                      strokeWidth="1.125"
                    />
                    <path
                      d="M13.5 1.5V7.5M16.5 4.5L10.5 4.5"
                      stroke="#7E8995"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10160_68">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-body-3 text_mono-gray-5 fw-5">Figures</p>
            </div>
            <h2 className="title text_white fw-5 split-text split-lines-transform">
              Where data <span className="text-gradient">tells</span> our storys
            </h2>
          </div>
          <div className="right">
            <p className="text-body-1 text_mono-gray-5 mb_23 split-text split-lines-transform">
              Empowering businesses with data-driven strategies to <br />
              achieve sustainable growth and lasting impact.
            </p>
            <Link
              to={`/about`}
              className="btn_link text-body-1 text_white link d-flex align-items-center gap_8"
            >
              <span>Explore</span>
              <i className="icon-long-arrow-alt-right-solid" />
            </Link>
          </div>
        </div>
        <div className="wrap-counter style-2 tf-grid-layout lg-col-4 sm-col-2 gap-0">
          {counterItems4.map((item, index) => (
            <div key={index} className="counter-item style-2">
              <div className="icon mb_18">
                <i className={item.icon} />
              </div>
              <p className="text-body-2 mb_6 text_mono-gray-5">{item.label}</p>
              <div className="counter-number">
                <div className="odometer text_white">
                  <OdometerComponent max={item.value} />
                </div>
                <span className="sub text_white">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-2 position-absolute hide-lg">
        <img
          alt="item"
          src="/images/item/shape-3.png"
          width={742}
          height={223}
        />
      </div>
      <div className="shape position-absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
          />
        </svg>
      </div>
    </div>
  );
}
