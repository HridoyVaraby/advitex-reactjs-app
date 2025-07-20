import React from "react";
import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <div className="tf-container-2 tf-spacing-45 pt-0">
      <div className="banner-CTA">
        <h1 className="text_white split-text effect-right">
          Ready to start a new project?
        </h1>
        <div className="bot flex-wrap-md d-flex align-items-end justify-content-between gap_12">
          <p className="text-body-1 text_white split-text split-lines-transform">
            Our expert marketing consulting services are designed to help your
            business unlock its full potential. From identifying growth
            opportunities
          </p>
          <Link
            to={`/pricing`}
            className="tf-btn btn-white2 wow animate__fadeInRight animate__animated"
            data-wow-delay="0s"
          >
            <span className="text-body-3">Get Started</span>
            <span className="bg-effect" />
          </Link>
        </div>
      </div>
    </div>
  );
}
