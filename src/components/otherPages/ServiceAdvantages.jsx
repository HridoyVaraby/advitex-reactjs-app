import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    icon: "icon-Performance-Increase-1",
    title: "Enhanced Efficiency",
    description:
      "Through the implementation of our innovative solutions, your organization can streamline operations, reduce costs, and significantly boost productivity, leading to increased profitability and long-term success.",
  },
  {
    icon: "icon-Analytics-Board-Bars",
    title: "Data-Driven Insights",
    description:
      "By utilizing advanced analytics, organizations can delve deep into their data to uncover hidden patterns, trends, and correlations, enabling them to make more informed, data driven decisions that drive business growth and innovation.",
  },
  {
    icon: "icon-Exceeding-Expectations",
    title: "Exceeding Expectations",
    description:
      "By consistently delivering exceptional customer experiences, organizations can cultivate a loyal customer base, increase customer satisfaction, and ultimately drive long-term business growth and profitability.",
  },
];

export default function ServiceAdvantages() {
  return (
    <div className="section tf-spacing-10">
      <div className="tf-container">
        <div className="heading-section mb_100">
          <h2>Advantages Of Our Service</h2>
          <p className="text-body-1 text_mono-gray-7 mt_20">
            Our service streamlines your processes, saving you time and
            resources.
          </p>
        </div>
        <Swiper
          className="swiper sw-layout"
          data-preview={3}
          data-tablet={2}
          data-mobile={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
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
