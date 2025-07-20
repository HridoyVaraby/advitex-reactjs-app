import { caseStudies2 } from "@/data/caseStudies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
export default function CaseStudies() {
  return (
    <div className="section-case-studies style-2 tf-spacing-20">
      <div className="tf-container">
        <div className="heading-section text-center mb_61">
          <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_16 mx-auto">
            Case Study
          </div>
          <h3 className="split-text effect-right">
            Explore real-life examples of how our solutions have driven results
          </h3>
        </div>
        <Swiper
          className="swiper sw-single effect-content-slide"
          effect="fade"
          modules={[EffectFade, Navigation, Pagination]}
          pagination={{
            el: ".csp1",
          }}
          navigation={{
            prevEl: ".snbpc1",
            nextEl: ".snbnc1",
          }}
        >
          {caseStudies2.map((study) => (
            <SwiperSlide className="swiper-slide" key={study.id}>
              <div className="case-studies-item style-2">
                <div className="tf-grid-layout md-col-2">
                  <div className="content d-flex flex-column justify-content-between">
                    <div className="heading">
                      <p className="text-body-1 text-uppercase text_mono-gray-6 mb_20 effect-item effect-left effect-1">
                        {study.tags}
                      </p>
                      <h1 className="effect-item effect-left effect-2">
                        {study.title}
                      </h1>
                    </div>
                    <div className="bot">
                      <div className="wrap-sw-button d-flex mb_22 hide-md">
                        <div className="sw-button style-1 sw-single-prev snbpc1">
                          <i className="icon-caret-left" />
                        </div>
                        <div className="sw-button style-1 sw-single-next snbnc1">
                          <i className="icon-caret-right" />
                        </div>
                      </div>
                      <p className="text_mono-gray-6 text-body-1 mb_40">
                        {study.description}
                      </p>
                      <a
                        href="#"
                        className="tf-btn btn-dark height-2 btn-px-30 rounded-0"
                      >
                        <span className="">View Details</span>
                        <span className="bg-effect" />
                      </a>
                    </div>
                  </div>
                  <div className="right overflow-hidden position-relative">
                    <div className="img-style effect-img-zoom effect-item effect-right effect-3">
                      <img
                        className="lazyload img-zoom"
                        data-src={study.imageSrc}
                        alt="case-studies"
                        src={study.imageSrc}
                        width={787}
                        height={826}
                      />
                    </div>
                    <div className="highlight effect-item effect-right effect-4">
                      <h6 className="text_primary">{study.highlightText}</h6>
                      <div className="icon">
                        <img
                          alt="icon"
                          src={study.highlightIcon}
                          width={study.highlightIconWidth}
                          height={study.highlightIconHeight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots style-default sw-pagination-single justify-content-center d-flex d-md-none csp1" />
        </Swiper>
      </div>
    </div>
  );
}
