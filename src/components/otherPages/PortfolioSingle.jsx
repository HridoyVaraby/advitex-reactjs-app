import React from "react";

import { counterItems6 } from "@/data/facts";
import OdometerComponent from "../common/OdometerComponent";
export default function PortfolioSingle() {
  return (
    <div className="single-post tf-spacing-26">
      <div className="tf-container">
        <p className="description text-body-1">
          The tech startup is facing significant financial hurdles, struggling
          to secure funding and maintain operations due to a lack of market
          traction and investor confidence. The company's innovative product or
          service has yet to gain significant traction in the market, leading to
          low sales. This lack of market acceptance and revenue generation has
          made it difficult for the startup to attract investors and secure the
          necessary funding to continue operations. Additionally, the company
          may be facing challenges in effectively communicating the value
          proposition of its product or service to potential customers and
          investors. This lack of market understanding and communication could
          be hindering the startup's ability to gain traction and secure
          funding.
        </p>
        <div className="thumbs-main">
          <img
            className="lazyload parallax-img"
            data-src="/images/section/single-project-1.jpg"
            alt="single-project"
            src="/images/section/single-project-1.jpg"
            width={1696}
            height={720}
          />
        </div>
        <div className="row">
          <div className="col-lg-3 col-6 text-center">
            <div className="info-item">
              <span className="text-body-1 text_mono-gray-6">Client</span>
              <h6 className="fw-5 mt_6">NovaTech</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <div className="info-item">
              <span className="text-body-1 text_mono-gray-6">Location</span>
              <h6 className="fw-5 mt_6">San Francisco, USA</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <div className="info-item">
              <span className="text-body-1 text_mono-gray-6">Services</span>
              <h6 className="fw-5 mt_6">Business Strategy Planning</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <div className="info-item">
              <span className="text-body-1 text_mono-gray-6">Duration</span>
              <h6 className="fw-5 mt_6">9 Months</h6>
            </div>
          </div>
        </div>
        <div className="unique-features">
          <div className="row">
            <div className="col-lg-6">
              <div className="left d-flex flex-column justify-content-between h-full">
                <h2 className="title">What makes Advitex unique?</h2>
                <div>
                  <div className="text-body-1 text_color-text-2">
                    Member of the project
                  </div>
                  <div className="facts style-1">
                    <div className="avatar-wrap d-flex">
                      <div className="avatar item-1">
                        <img
                          alt="facts"
                          src="/images/avatar/facts-7.png"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="avatar item-2">
                        <img
                          alt="facts"
                          src="/images/avatar/facts-8.png"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="avatar item-3">
                        <img
                          alt="facts"
                          src="/images/avatar/facts-9.png"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-grid gap_12 right">
                <div className="content-item">
                  <h6 className="title">Strategic Planning</h6>
                  <p className="text-body-1 text_mono-gray-6">
                    We conducted a SWOT analysis and developed a strategic plan
                    to prioritize core offerings, define target markets, and set
                    performance metrics.
                  </p>
                </div>
                <div className="content-item">
                  <h6 className="title">Operational Improvement</h6>
                  <p className="text-body-1 text_mono-gray-6">
                    We analyzed the company's operations and identified areas
                    for improvement, such as streamlining workflows, automating
                    processes, and implementing lean methodologies.
                  </p>
                </div>
                <div className="content-item">
                  <h6 className="title">Financial Analysis</h6>
                  <p className="text-body-1 text_mono-gray-6">
                    We developed detailed financial models to project future
                    revenue, expenses, and cash flow. We also provided
                    recommendations on cost-cutting measures and
                    revenue-generating strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap_24 flex-wrap-md group-img">
          <div className="hover-image">
            <div className="img-style">
              <img
                className="lazyload"
                data-src="/images/section/single-project-2.jpg"
                alt="single-project"
                src="/images/section/single-project-2.jpg"
                width={836}
                height={560}
              />
            </div>
          </div>
          <div className="hover-image">
            <div className="img-style">
              <img
                className="lazyload"
                data-src="/images/section/single-project-3.jpg"
                alt="single-project"
                src="/images/section/single-project-3.jpg"
                width={836}
                height={560}
              />
            </div>
          </div>
        </div>
        <div className="wrap-text">
          <div className="row">
            <div className="col-md-6">
              <h2>We have a clear winner.</h2>
            </div>
            <div className="col-md-6">
              <p className="text-body-1 text_mono-gray-6">
                By refocusing on its core products and services, the company was
                able to streamline operations, reduce costs, and enhance
                customer satisfaction through a combination of process
                improvements, technological advancements, and strategic
                partnerships. These efforts ultimately led to increased revenue
                and profitability.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {counterItems6.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="counter-item style-default">
                <div className="sub-heading text_black text-uppercase mb_21">
                  {item.title}
                </div>
                <div className="counter-number mb_17">
                  <span className="sub text_primary">{item.prefix}</span>
                  <div className="odometer text_primary">
                    <OdometerComponent max={item.value} />
                  </div>
                  <span className="sub text_primary">{item.suffix}</span>
                </div>
                <p className="sub-heading text_mono-gray-5">
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
