import { bannerSlides } from "@/data/heroSlides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const brands = [
  { id: 1, src: "/images/brands/brand-1.png", width: 169, height: 56 },
  { id: 2, src: "/images/brands/brand-2.png", width: 169, height: 56 },
  { id: 3, src: "/images/brands/brand-3.png", width: 213, height: 56 },
  { id: 4, src: "/images/brands/brand-4.png", width: 187, height: 56 },
  { id: 5, src: "/images/brands/brand-5.png", width: 169, height: 56 },
  { id: 6, src: "/images/brands/brand-6.png", width: 169, height: 56 },
  { id: 7, src: "/images/brands/brand-7.png", width: 169, height: 56 },
  { id: 8, src: "/images/brands/brand-8.png", width: 168, height: 56 },
];
export default function Hero() {
  const allBrands = [...brands, ...brands, ...brands];
  return (
    <div className="page-title style-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-title d-flex mb_66">
              <div className="left">
                <h4 className="sub text_mono-gray-5 mb_11 split-text effect-left">
                  Lost in Financial Planning?
                </h4>
                <h1 className="title split-text effect-right">
                  Let us managing your future
                </h1>
              </div>
              <div className="right">
                <p className="text_mono-gray-6 sub-heading mb_17 split-text split-lines-transform">
                  Providing expert financial consulting services to help you
                  grow, <br />
                  optimize, and thrive in today's competitive landscape
                </p>
                <div className="wrap-btn d-flex gap_20">
                  <Link
                    to={`/services`}
                    className="tf-btn btn-primary2 btn-px-28 height-2 rounded-0"
                  >
                    <span>Our Services</span>
                    <span className="bg-effect" />
                  </Link>
                  <Link
                    to={`/contact-us`}
                    className="tf-btn btn-border btn-px-28 height-2 rounded-0"
                  >
                    <span>Book a Free Consulting</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
            <Swiper className="swiper sw-single" data-effect="fade">
              {bannerSlides.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="slide-inner">
                    <img
                      className="lazyload"
                      data-src={slide.imageSrc}
                      alt="banner"
                      src={slide.imageSrc}
                      width={slide.width}
                      height={slide.height}
                    />
                    <h3 className="title text_white">{slide.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-line sw-pagination-single" />
            </Swiper>
            <div className="infiniteslide_wrap" style={{ overflow: "hidden" }}>
              <div
                className="infiniteslide tf-marquee infiniteSlide"
                data-clone={2}
              >
                {allBrands.map((elm, i) => (
                  <div
                    key={i}
                    className="marquee-item style-2"
                    style={{ flex: "0 0 auto", display: "block" }}
                  >
                    <div className="partner style-1">
                      <img
                        alt=""
                        src={elm.src}
                        width={elm.width}
                        height={elm.height}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
