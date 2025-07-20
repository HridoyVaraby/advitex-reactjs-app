import { bannerSlides2 } from "@/data/heroSlides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="page-title style-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-title d-flex flex-wrap-lg mb_40 justify-content-between">
              <div className="left">
                <p className="sub text-body-1 text_primary point">
                  <span className="item" /> Ultimate Peace Of Mind
                </p>
                <div className="text_primary text-display-3 title">
                  Shaping{" "}
                  <img
                    className="icon animate__rollIn animate__animated"
                    data-wow-delay="0s"
                    alt="icon"
                    src="/images/box-icon/check-verified-01.svg"
                  />{" "}
                  Futures <br />
                  With{" "}
                  <img
                    className="icon heart animate__rollIn animate__animated"
                    alt="icon"
                    src="/images/box-icon/heart-circle.svg"
                  />{" "}
                  Insurance Solutions
                </div>
              </div>
              <div className="right">
                <p className="sub-heading text_mono-dark-9 mb_24 split-text split-lines-transform">
                  Maximize your coverage, minimize your worries. We're committed
                  to providing exceptional customer service and comprehensive
                  insurance solutions that exceed your expectations.
                </p>
                <div className="d-flex gap_10 wrap-btn flex-wrap-sm">
                  <Link
                    to={`/about`}
                    className="tf-btn btn-border border-1 rounded-12 height-3"
                  >
                    <span className="text-body-1 text_primary">
                      Book a Free Consulting
                    </span>
                    <span className="bg-effect" />
                  </Link>
                  <Link
                    to={`/contact-us`}
                    className="tf-btn rounded-12 height-3"
                  >
                    <span className="text-body-1">Find your plan</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper style-pagination sw-layout"
        centeredSlides
        spaceBetween={12}
        loop
        initialSlide={1}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          575: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 1.67,
          },
        }}
      >
        {bannerSlides2.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="img-wrap">
              <img
                className="lazyload"
                data-src={`images/page-title/${slide.src}`}
                alt={slide.alt}
                src={`/images/page-title/${slide.src}`}
                width={1142}
                height={744}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
