import { caseStudies5 } from "@/data/caseStudies";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
export default function CaseStudies() {
  return (
    <div className="section-case-studies style-1 tf-spacing-36 pb-0">
      <div className="tf-container">
        <div className="heading-section gap_12 text-center">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-book-bookmark-02" />
            </div>
            <p className="text-body-3">Case studies</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
            Our <span className="text-gradient">case</span> studies reveal
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_28 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Helping you streamline operations, reduce costs, and achieve
            measurable <br />
            success with proven methodologies.
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
                <h6 className="title text_white">
                  <Link to={`/single-project/${study.id}`} className="link">
                    {study.title}
                  </Link>
                </h6>
                <Link
                  to={`/single-project/${study.id}`}
                  className="tf-btn btn-white"
                >
                  <span>
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 5.25009L4.5 13.5001"
                        stroke="#121416"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.25 4.59864C8.25 4.59864 12.4752 4.24246 13.1164 4.88365C13.7575 5.52483 13.4013 9.75 13.4013 9.75"
                        stroke="#121416"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="bg-effect" />
                </Link>
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
