import React from "react";

import { testimonials3 } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <div className="section-testimonial style-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrap">
              <div className="heading-section">
                <h2 className="heading-title split-text split-lines-rotation-x">
                  Client Satisfaction, Our Reputation
                </h2>
                <p
                  className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  We’ve helped hundreds of partners, to achieve their goals and
                  stellar feedback, is our reward!
                </p>
              </div>
              <div className="item">
                <img
                  alt="item"
                  src="/images/item/item-testimonial.png"
                  width={715}
                  height={330}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tf-grid-layout md-col-2">
              <div
                className="infiniteslide_wrap"
                style={{ overflow: "hidden", height: 2370 }}
              >
                <div className="infiniteslide infiniteSlideVertical">
                  {[...testimonials3, ...testimonials3].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className={`testimonial style-default ${
                          index >= 6 ? "infiniteslide_clone" : ""
                        }`}
                        style={{ flex: "0 0 auto", display: "block" }}
                      >
                        <div className="icon mb_30">
                          <i className="icon-quote" />
                        </div>
                        <div className="text sub-heading mb_30">
                          “ {testimonial.quote} ”
                        </div>
                        <div className="box-user d-flex align-items-center">
                          <div className="avatar">
                            <img
                              alt="avatar"
                              src={testimonial.avatar}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="content">
                            <p className="text-body-3 sub font3 text_mono-gray-6">
                              {testimonial.position}
                            </p>
                            <div className="text-body-2 text_black name text-uppercase">
                              <a href="#" className="link">
                                {testimonial.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div
                className="infiniteslide_wrap"
                style={{ overflow: "hidden", height: 2370 }}
              >
                <div
                  className="infiniteslide infiniteSlideVertical"
                  style={{ animationDirection: "reverse" }}
                >
                  {[...testimonials3, ...testimonials3].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className={`testimonial style-default ${
                          index >= 6 ? "infiniteslide_clone" : ""
                        }`}
                        style={{ flex: "0 0 auto", display: "block" }}
                      >
                        <div className="icon mb_30">
                          <i className="icon-quote" />
                        </div>
                        <div className="text sub-heading mb_30">
                          “ {testimonial.quote} ”
                        </div>
                        <div className="box-user d-flex align-items-center">
                          <div className="avatar">
                            <img
                              alt="avatar"
                              src={testimonial.avatar}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="content">
                            <p className="text-body-3 sub font3 text_mono-gray-6">
                              {testimonial.position}
                            </p>
                            <div className="text-body-2 text_black name text-uppercase">
                              <a href="#" className="link">
                                {testimonial.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
