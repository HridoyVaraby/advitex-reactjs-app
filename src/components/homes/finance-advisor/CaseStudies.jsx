import { caseStudies3 } from "@/data/caseStudies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
export default function CaseStudies() {
  return (
    <div className="section-case-studies sw-layout-1 tf-spacing-28">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section d-flex justify-content-between mb_59">
              <h2 className="fw-6 split-text effect-right">
                Explore how we’ve helped people
              </h2>
              <div className="wrap-sw-button d-flex gap_16">
                <div className="sw-button style-default has-bg nav-prev-layout-1 snbp1">
                  <i className="icon-caret-left" />
                </div>
                <div className="sw-button style-default has-bg nav-next-layout-1 snbn1">
                  <i className="icon-caret-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-container-2 slider-layout-right wow animate__fadeInLeft animate__animated"
        data-wow-delay="0s"
      >
        <Swiper
          className="swiper"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            575: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4.73,
              spaceBetween: 48,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp1",
            nextEl: ".snbn1",
          }}
        >
          {caseStudies3.map((study) => (
            <SwiperSlide className="swiper-slide" key={study.id}>
              <div className="case-studies-item style-3 hover-image">
                <div className="img-style">
                  <img
                    className="lazyload"
                    data-src={study.imageSrc}
                    alt={study.title}
                    src={study.imageSrc}
                    width={study.width}
                    height={study.height}
                  />
                </div>
                <h6 className="title text_white">
                  <Link to={`/single-project/${study.id}`} className="link">
                    {study.title}
                  </Link>
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
