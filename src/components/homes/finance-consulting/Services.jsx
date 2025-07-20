import { serviceBoxes } from "@/data/services";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
export default function Services() {
  return (
    <div className="section-service style-2 tf-spacing-18">
      <div className="tf-container-3">
        <div className="heading-section d-flex gap_12 justify-content-between align-items-end flex-wrap-md mb_62">
          <div className="left">
            <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_15">
              Service
            </div>
            <h3 className="split-text effect-right">
              Strategic services for you to maintain <br />
              sustainable growth
            </h3>
          </div>
          <div className="right">
            <Link
              to={`/services`}
              className="tf-btn btn-dark rounded-0 btn-px-28 height-2 mb_10"
            >
              <span>See our services</span>
              <span className="bg-effect" />
            </Link>
          </div>
        </div>
        <div
          className="sw-layout-1 position-relative wow animate__fadeInRight animate__animated"
          data-wow-delay="0s"
        >
          <Swiper
            className="swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            spaceBetween={15}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spd4",
            }}
            navigation={{
              prevEl: ".snbp4",
              nextEl: ".snbn4",
            }}
          >
            {serviceBoxes.map((service) => (
              <SwiperSlide className="swiper-slide" key={service.id}>
                <div className="tf-box-icon style-2 effect-icon">
                  <span className="number">{service.number}</span>
                  <div className="content">
                    <div className="icon mb_16">
                      <img
                        alt=""
                        src={service.iconSrc}
                        width={48}
                        height={48}
                      />
                    </div>
                    <h6 className="fw-5 mb_11">
                      <a href="#" className="link">
                        {service.title}
                      </a>
                    </h6>
                    <p className="text-body-2 text_mono-gray-5">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="text-body-1 text_primary link-black btn_link"
                    >
                      Book a call
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-button style-default nav-prev-layout-1 xl-hide snbp4">
            <i className="icon-arrow-left-01" />
          </div>
          <div className="sw-button style-default nav-next-layout-1 xl-hide snbn4">
            <i className="icon-arrow-right-01" />
          </div>
          <div className="sw-dots style-default sw-pagination-layout-1 mt_20 justify-content-center d-flex d-xl-none spd4" />
        </div>
      </div>
    </div>
  );
}
