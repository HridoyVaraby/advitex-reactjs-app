import React from "react";
import { Link } from "react-router-dom";

import { services2 } from "@/data/services";
export default function Services() {
  return (
    <div className="section tf-spacing-22 pb-0">
      <div className="tf-container">
        <div className="heading-section d-flex gap_12 justify-content-between align-items-end flex-wrap-md mb_57">
          <div className="left">
            <div className="point text-body-1 mb_7">
              <span className="item" />
              Our Services
            </div>
            <h2 className="heading-title text_primary split-text effect-right">
              Flexible Coverage Options
            </h2>
            <p
              className="text_mono-gray-7 text-body-1 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              With our customizable approach, you can select the specific
              coverages that matter most <br />
              to you, avoiding unnecessary expenses
            </p>
          </div>
          <div className="right">
            <Link
              to={`/services`}
              className="tf-btn height-3 rounded-12 btn-px-28"
            >
              <span>See our services</span>
              <span className="bg-effect" />
            </Link>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-3">
          {services2.map((service, index) => (
            <div
              key={index}
              className={`tf-box-icon style-6 effect-icon ${service.bgColor} wow animate__fadeInRight animate__animated`}
              data-wow-delay={service.delay}
            >
              <div className="icon">
                <img alt="icon" src={service.icon} width={33} height={32} />
              </div>
              <div className="content">
                <h3 className="text_primary">
                  <Link
                    to={`/service-details/${service.id}`}
                    className="link-white mb_11"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-body-1 mb_23">{service.description}</p>
                <Link
                  to={`/service-details/${service.id}`}
                  className="tf-btn-link"
                >
                  <span> Learn more </span>
                  <i className="icon-arrow-top-right"> </i>
                </Link>
              </div>
              <div
                className="item scroll-tranform"
                data-direction="right"
                data-distance="20%"
              >
                <img
                  alt="item"
                  src="/images/item/ellipse-1.png"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
