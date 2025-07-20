import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="section-work style-2 tf-spacing-23">
      <div className="tf-container">
        <div className="box-inner position-relative">
          <div className="heading-section text-center mb_56">
            <div className="point text-body-1 mb_17 justify-content-center">
              <span className="item" />
              Works With Us
            </div>
            <h1 className="heading-title text_primary mb_36 split-text split-lines-rotation-x">
              Customize{" "}
              <img
                className="item-1 item"
                alt=""
                src="/images/box-icon/settings-02.svg"
              />{" "}
              Your Coverage To <br />
              Fit Your Specific{" "}
              <img
                className="item-2 item"
                alt=""
                src="/images/box-icon/check-verified-02.svg"
              />{" "}
              Needs
            </h1>
            <p className="text-body-1 text_primary">
              Tailored insurance solutions for your unique circumstances.
            </p>
          </div>
          <div className="d-flex gap_10 wrap-btn justify-content-center">
            <Link to={`/contact-us`} className="tf-btn rounded-12 height-4">
              <span className="text-body-1">Contact Us Online</span>
              <span className="bg-effect" />
            </Link>
            <Link
              to={`/about`}
              className="tf-btn btn-border border-1 height-4 rounded-12"
            >
              <span className="text-body-1 text_primary">
                Request A Call Back
              </span>
              <span className="bg-effect" />
            </Link>
          </div>
          <div
            className="shape-1 position-absolute scroll-tranform"
            data-direction="right"
          >
            <img
              alt="ellipse"
              src="/images/item/ellipse-1.png"
              width={400}
              height={400}
            />
          </div>
          <div
            className="shape-2 position-absolute scroll-tranform"
            data-direction="left"
          >
            <img
              alt="ellipse"
              src="/images/item/ellipse-2.png"
              width={640}
              height={640}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
