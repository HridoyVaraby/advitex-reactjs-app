import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    icon: "icon-Performance-Increase-1",
    title: "Strategic Brand Building",
    description:
      "We craft unique brand identities that connect, inspire, and stand out in crowded markets.",
  },
  {
    icon: "icon-Analytics-Board-Bars",
    title: "Creative Excellence",
    description:
      "From visuals to storytelling, our content is designed to engage audiences and elevate your presence.",
  },
  {
    icon: "icon-Exceeding-Expectations",
    title: "End-to-End Solutions",
    description:
      "Everything you need — from brand launches to digital campaigns — all under one roof.",
  },
  {
    icon: "icon-professional-development",
    title: "Results-Driven Approach",
    description:
      "Our strategies focus on real outcomes: visibility, engagement, and measurable growth.",
  },
];

export default function ServiceAdvantages() {
  return (
    <div className="section tf-spacing-10">
      <div className="tf-container">
        <div className="heading-section mb_100">
          <h2>Advantages Of Our Service</h2>
          <p className="text-body-1 text_mono-gray-7 mt_20">
          Our full-range branding and marketing solutions with Complete branding and marketing support.
          </p>
        </div>
        <Swiper
          className="swiper sw-layout"
          data-preview={4}
          data-tablet={3}
          data-mobile={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd12",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="tf-box-icon style-7 v2 effect-icon">
                <div className="icon mb_32">
                  <i className={slide.icon} />
                </div>
                <h5 className="mb_24">{slide.title}</h5>
                <p className="text-body-1 text_mono-gray-7">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots sw-pagination-layout d-flex justify-content-center mt_22 spd12" />
        </Swiper>
      </div>
    </div>
  );
}
