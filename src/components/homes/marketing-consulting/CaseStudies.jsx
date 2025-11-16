import { caseStudies5 } from "@/data/caseStudies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
export default function CaseStudies() {
  return (
    <div className="section-case-studies style-1 tf-spacing-36" style={{ paddingBottom: '40px' }}>
      <div className="tf-container">
        <div className="heading-section gap_12 text-center">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-book-bookmark-02" />
            </div>
            <p className="text-body-3">Case studies</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
            Our <span className="text-gradient">case</span> studies demonstrate
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_28 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Helping you in streamlining operations, cutting costs, and achieving <br />
            measurable success through proven methodologies.
          </p>
        </div>
      </div>
      <div className="wrap">
        <Swiper
          className="swiper sw-layout"
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
              slidesPerView: 3.6,
              spaceBetween: 48,
            },
            1200: {
              slidesPerView: 4.9,
              spaceBetween: 48,
            },
          }}
          loop
          centeredSlides
          spaceBetween={15}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp10",
            nextEl: ".snbn10",
          }}
        >
          {caseStudies5.map((study) => (
            <SwiperSlide
              className="swiper-slide"
              key={`case-study-${study.id}`}
            >
              <div className="case-studies-item style-3 hover-image">
                <div className="img-style">
                  <img
                    className="lazyload"
                    data-src={study.imgSrc}
                    alt="case-studies"
                    src={study.imgSrc}
                    width={study.width}
                    height={study.height}
                  />
                </div>
                <h6 className="title text_white case-study-title">
                  {study.title}
                </h6>
              </div>
            </SwiperSlide>
          ))}
          <div className="wrap-sw-button d-flex gap_16 justify-content-center">
            <div className="sw-button style-default has-bg nav-prev-layout snbp10">
              <i className="icon-arrow-left-02-sharp" />
            </div>
            <div className="sw-button style-default has-bg nav-next-layout snbn10">
              <i className="icon-arrow-right-02-sharp" />
            </div>
          </div>
        </Swiper>
        <div className="shape scroll-tranform">
          <img
            alt="shape"
            src="/images/item/shape-10.png"
            width={1280}
            height={624}
          />
        </div>
      </div>
      <div className="shape-1">
        <img
          alt="shape"
          src="/images/item/shape-11.png"
          width={1920}
          height={483}
        />
      </div>
    </div>
  );
}
