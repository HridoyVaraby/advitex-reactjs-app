import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { counterItems2 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function Testimonials() {
  return (
    <div className="section-testimonial style-5 tf-spacing-16 pb-0">
      <div className="heading-section text-center mb_63">
        <h3 className="text_white split-text effect-right">
          Our client’s journeys to success
        </h3>
      </div>
      <Swiper
        className="swiper sw-layout"
        loop
        initialSlide={1}
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          575: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 1.3,
            spaceBetween: 72,
          },
          1200: {
            slidesPerView: 1.98,
            spaceBetween: 72,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            className="swiper-slide"
            key={`${testimonial.id}-${index}`}
          >
            <div className="testimonial style-4">
              <div className="img-style mb_40">
                <img
                  className="lazyload"
                  data-src={testimonial.imageSrc}
                  alt="testimonial"
                  src={testimonial.imageSrc}
                  width={908}
                  height={652}
                />
              </div>
              <div className="content">
                <div className="left">
                  <p className="text-body-2 text_white mb_12">
                    {testimonial.quote}
                  </p>
                  <p className="text-body-3 text_mono-gray-5">
                    {testimonial.author}
                  </p>
                </div>
                <div className="logo">
                  <img
                    alt="logo"
                    src={testimonial.logoSrc}
                    width={testimonial.logoWidth}
                    height={testimonial.logoHeight}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bot">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="wrap-counter styel-1">
                {counterItems2.map((item, index) => (
                  <div key={index} className="counter-item style-1">
                    <div className="counter-number">
                      <h2 className="odometer text_mono-dark-9">
                        <OdometerComponent max={item.value} />
                      </h2>
                      <span className="sub text_mono-dark-9">{item.unit}</span>
                    </div>
                    <p
                      className="text-body-2 text_mono-gray-7"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
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
