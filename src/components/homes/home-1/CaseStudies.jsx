import { caseStudies } from "@/data/caseStudies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
export default function CaseStudies() {
  return (
    <div className="section sw-layout-1 tf-spacing-13 pt-0">
      <div className="tf-container">
        <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_88">
          <div className="left">
            <h2 className="heading-title split-text effect-right">
              Feature Case Studies
            </h2>
            <p
              className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              Discover the transformative power of our solutions. Learn how
              we've helped businesses of all sizes overcome challenges.
            </p>
          </div>
          <div className="wrap-sw-button d-flex gap_16">
            <div className="sw-button style-default v2 has-bg nav-prev-layout-1 snbp6">
              <i className="icon-caret-left" />
            </div>
            <div className="sw-button style-default v2 has-bg nav-next-layout-1 snbn6">
              <i className="icon-caret-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container slider-layout-right w-xl">
        <Swiper
          className="swiper"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.1,
            },
            992: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.81,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp6",
            nextEl: ".snbn6",
          }}
        >
          {caseStudies.map((study) => (
            <SwiperSlide className="swiper-slide" key={study.id}>
              <div className="case-studies-item style-1 hover-image hover-border border-element h-full">
                <Link to={`/single-project/${study.id}`} className="img-style">
                  <img
                    className="lazyload"
                    data-src={study.imageSrc}
                    alt="case-studies"
                    src={study.imageSrc}
                    width={382}
                    height={502}
                  />
                </Link>
                <div className="content">
                  <div className="top d-flex align-items-center justify-content-between mb_31">
                    <div className="brand">
                      <img
                        alt="brand"
                        src={study.brandSrc}
                        width={study.brandWidth}
                        height={study.brandHeight}
                      />
                    </div>
                    <a href="#" className="tf-btn">
                      <span className="icon-arrow-top-right" />
                      <span className="bg-effect" />
                    </a>
                  </div>
                  <div className="heading mb_65">
                    <h4 className="mb_15 title">
                      <Link to={`/single-project/${study.id}`} className="link">
                        {study.title}
                      </Link>
                    </h4>
                    <p className="text_mono-gray-7 text-body-2">
                      {study.description}
                    </p>
                  </div>
                  <div className="group-number">
                    {study.stats.map((stat, index) => (
                      <div className="wrap-number" key={index}>
                        <h3 className="number fw-5">{stat.value}</h3>
                        <p className="font2 text-body-1 lh-20">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
