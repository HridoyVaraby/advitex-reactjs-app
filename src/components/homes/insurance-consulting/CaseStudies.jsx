import { caseStudies4 } from "@/data/caseStudies";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCreative,
  Navigation,
  Pagination,
  Controller,
} from "swiper/modules";
import { brandData } from "@/data/brands";
const filters = [
  "All",
  "Health Insurance",
  "Property Insurance",
  "Business Insurance",
];

export default function CaseStudies() {
  const [controllerSwiper, setControllerSwiper] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filtered, setFiltered] = useState(caseStudies4);
  useEffect(() => {
    if (activeFilter == "All") {
      setFiltered(caseStudies4);
    } else {
      setFiltered(
        caseStudies4.filter((elm) => elm.categories.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  return (
    <div className="section-case-studies">
      <div className="tf-container">
        <div className="heading-section text-center mb_50">
          <div className="point text-body-1 justify-content-center mb_6">
            <span className="item" />
            Case Studies
          </div>
          <h2 className="heading-title text_primary split-text effect-right">
            Flexible Coverage Options
          </h2>
        </div>
        <div className="projectCarousel">
          <div className="thumbs">
            <div className="sw-pagination-project h2" />
            <div className="swiper-container">
              <Swiper
                controller={{ control: controllerSwiper }}
                className="swiper project-carousel-layout"
                {...{
                  slidesPerView: 1,
                  loop: false,
                  speed: 550,
                  spaceBetween: 50,
                  direction: "horizontal",
                  grabCursor: true,
                  effect: "creative",
                  creativeEffect: {
                    prev: { opacity: 0, rotate: [0, 0, -10] },
                    next: { opacity: 0, rotate: [0, 0, 10] },
                  },
                  //   navigation: {
                  //     nextEl: navNext.length > 0 ? navNext[0] : null,
                  //     prevEl: navPrev.length > 0 ? navPrev[0] : null,
                  //   },
                  pagination: {
                    el: ".sw-pagination-project",
                    type: "fraction",
                    formatFractionCurrent: (number) =>
                      number.toString().padStart(2, "0"),
                    formatFractionTotal: (number) =>
                      number.toString().padStart(2, "0"),
                  },
                }}
                navigation={{
                  prevEl: ".snbp8",
                  nextEl: ".snbn8",
                }}
                modules={[EffectCreative, Navigation, Pagination, Controller]}
              >
                <div className="bg position-absolute">
                  <img
                    alt="background"
                    src="/images/item/bg-project.png"
                    width={774}
                    height={574}
                  />
                </div>
                <div className="shape position-absolute">
                  <img
                    alt="shape"
                    src="/images/item/shape-4.png"
                    width={1129}
                    height={768}
                  />
                </div>
                {filtered.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide"
                    data-categories={slide.categories}
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imageSrc}
                      alt={slide.alt}
                      src={slide.imageSrc}
                      width={slide.width}
                      height={slide.height}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-filter">
              <ul className="filter-list">
                {filters.map((filter) => (
                  <li
                    key={filter}
                    className={`filter-list-item ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="content flex-wrap-sm gap_16">
            <Swiper
              className="swiper project-carousel-layout-extra"
              onSwiper={setControllerSwiper}
              {...{
                slidesPerView: 1,
                loop: true,
                simulateTouch: false,
                speed: 950,
                effect: "creative",
                creativeEffect: {
                  prev: { opacity: 0, translate: [-105, 0, 0] },
                  next: { opacity: 0, translate: [105, 0, 0] },
                },
              }}
              modules={[EffectCreative, Controller]}
            >
              {filtered.map((elm, i) => (
                <SwiperSlide className="swiper-slide">
                  <h2 className="mb_15">{elm.title}</h2>
                  <p
                    className="text-body-2 text_mono-gray-7"
                    dangerouslySetInnerHTML={{ __html: elm.description }}
                  ></p>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="wrap-sw-button d-flex gap_15">
              <div className="sw-button style-default has-bg sw-project-prev snbp8">
                <i className="icon-long-arrow-alt-left-solid" />
              </div>
              <div className="sw-button style-default has-bg sw-project-next snbn8">
                <i className="icon-long-arrow-alt-right-solid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infiniteslide_wrap" style={{ overflow: "hidden" }}>
        <div className="infiniteslide tf-marquee style-1 infiniteSlide">
          {[...brandData, ...brandData, ...brandData].map((brand, index) => (
            <div
              key={index}
              className={`marquee-item ${
                index >= brandData.length ? "infiniteslide_clone" : ""
              }`}
              style={{ flex: "0 0 auto", display: "block" }}
            >
              <div className="partner">
                <img
                  alt="brands"
                  src={brand.src}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
