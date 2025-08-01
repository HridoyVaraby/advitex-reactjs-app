import React from "react";

import ServiceInfo from "./ServiceInfo";
export default function ServiceDetails() {
  return (
    <>
      <div className="text-with-img-2 v2 tf-spacing-11">
        <div className="tf-container">
          <div className="row">
            <div className="col-xl-6">
              <div className="content">
                <h2 className="title">
                  Tailor The Message To Resonate With Your Apecific Audience.
                </h2>
                <p className="description text-body-1 text_mono-gray-7 description-1">
                  Business strategy planning is the cornerstone of
                  organizational success. It involves a systematic process of
                  defining a company's long-term goals and objectives, and then
                  devising a plan to achieve them. A well-crafted strategy
                  provides a roadmap for the entire organization, ensuring
                  alignment and focus.
                </p>
                <p className="description text-body-1 text_mono-gray-7 description-2">
                  By investing time and effort in strategic planning,
                  organizations can position themselves for long-term success.
                  Regular review and adjustment of the strategy is crucial to
                  adapt to changing market conditions and emerging
                  opportunities.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="wrap-img mb-0">
                <div className="shape-img-bg mgl-auto">
                  <img
                    alt="shape"
                    src="/images/section/img-with-shape-6.jpg"
                    width={696}
                    height={598}
                  />
                  <div className="img-bg-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 288 288"
                    >
                      <linearGradient
                        id="imagewave"
                        x1="70.711%"
                        x2="0%"
                        y1="70.711%"
                        y2="0%"
                      >
                        <stop
                          className="stop-color"
                          offset="0%"
                          stopOpacity={1}
                        />
                        <stop
                          className="stop-color"
                          offset="100%"
                          stopOpacity={1}
                        />
                      </linearGradient>
                      <path fill="url(#imagewave)" d="">
                        <animate
                          repeatCount="indefinite"
                          attributeName="d"
                          dur="5s"
                          values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                          c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                          c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                          c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                          
                          
                          M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                          c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                          c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                          C48.9,198.6,57.8,191,51,171.3z;
                          
                          M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                          c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                          c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                          c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                        />
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-service style-3 tf-spacing-9">
        <div className="tf-container">
          <div className="heading-secion mb_88">
            <h2>Comprehensive Service Information</h2>
            <p className="text-body-1 text_mono-gray-7 mt_18">
              Our comprehensive service offerings are designed to elevate your
              business and <br />
              drive sustainable growth.
            </p>
          </div>
          <ServiceInfo />
        </div>
      </div>
    </>
  );
}
