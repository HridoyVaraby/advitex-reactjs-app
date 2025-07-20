import { pricingPlans } from "@/data/pricing";
import React from "react";

export default function Pricing({
  parentClass = "section-pricing style-1 tf-spacing-6",
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container">
        <div className="wrap">
          <div className="heading-section mb_88">
            <h2>Choose A Plan, Start Now.</h2>
            <p className="text-body-1 text_mono-gray-7 mt_20">
              Whether you’re just getting started with rapid testing or scaling
              across the <br />
              organization, we’ve got you covered
            </p>
          </div>
          <div className="tf-grid-layout lg-col-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-item${plan.isHighlighted ? " center" : ""}`}
              >
                <div className="content">
                  <div className="heading">
                    <h5 className="title mb_4">{plan.title}</h5>
                    <p className="text-body-2 text_mono-gray-7">
                      {plan.description}
                    </p>
                  </div>
                  <div className="price d-flex align-items-end">
                    <h3 className="text_primary price-value">{plan.price}</h3>
                    <span className="text_mono-gray-7 sub-heading">/month</span>
                  </div>
                  <ul className="list d-grid gap_16">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="sub-heading d-flex gap_16 align-items-center"
                      >
                        <i className="icon-check-solid text_primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className={plan.buttonStyle}>
                  <span className="text-body-3">Get Started Now</span>
                  <span className="bg-effect" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
