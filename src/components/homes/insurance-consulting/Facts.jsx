import OdometerComponent from "@/components/common/OdometerComponent";
import { counterData } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="section-hard-data">
      <div className="tf-container">
        <div className="heading-section d-flex gap_12 justify-content-between flex-wrap-md mb_86">
          <div className="left">
            <div className="point text-body-1 mb_12">
              <span className="item" />
              Hard Data
            </div>
            <h6 className="text_primary split-text split-lines-transform">
              As a trusted and professional insurance company, we are committed{" "}
              <br />
              to providing exceptional service and comprehensive coverage to our{" "}
              <br />
              valued clients.
            </h6>
          </div>
          <div className="right">
            <a href="#" className="tf-btn-link">
              <span className="h6"> Find Your Plan </span>
              <i className="icon-arrow-top-right"> </i>
            </a>
          </div>
        </div>
        <div className="wrap-counter style-3 gap_12">
          <div className="left">
            {counterData.left.map((item, index) => (
              <div key={`left-${index}`} className="counter-item style-3">
                <div className="counter-number">
                  <div className="odometer text_primary">
                    <OdometerComponent max={item.value} />
                  </div>
                  {item.units.map((unit, i) => (
                    <span key={i} className="sub text_primary">
                      {unit}
                    </span>
                  ))}
                </div>
                <p className="h6 text_primary">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="right">
            {counterData.right.map((item, index) => (
              <div key={`right-${index}`} className="counter-item style-3">
                <div className="counter-number">
                  <div className="odometer text_primary">
                    <OdometerComponent max={item.value} />
                  </div>
                  {item.units.map((unit, i) => (
                    <span key={i} className="sub text_primary">
                      {unit}
                    </span>
                  ))}
                </div>
                <p className="h6 text_primary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
