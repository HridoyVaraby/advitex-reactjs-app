import React from "react";

import { slideItems } from "@/data/benefits";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Benefits() {
  return (
    <div className="unique-benefits tf-spacing-37">
      <div className="tf-container">
        <div className="heading-section mb_88">
          <h2>Options Highlighting Unique Benefits</h2>
          <p className="text-body-1 text_mono-gray-7 mt_20">
            We offer a comprehensive benefits package designed to support your
            professional and personal well-being. <br />
            Here are some of the perks and benefits you can expect:
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-mobile bg_1 swiper-active-768"
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd15",
          }}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="tf-box-icon style-7 v2 effec-icon">
                <div className="icon mb_23">
                  <i className={item.iconClass} />
                </div>
                <h5 className="mb_12 title">{item.title}</h5>
                <p className="text-body-1 text_mono-gray-7">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none spd15" />
        </Swiper>
        <div className="swiper tf-sw-mobile bg_1 swiper-inActive-768">
          <div className="swiper-wrapper tf-grid-layout-md lg-col-3 gap_25 md-col-2">
            {slideItems.map((item, index) => (
              <div key={index} className="swiper-slide">
                <div className="tf-box-icon style-7 v2 effec-icon">
                  <div className="icon mb_23">
                    <i className={item.iconClass} />
                  </div>
                  <h5 className="mb_12 title">{item.title}</h5>
                  <p className="text-body-1 text_mono-gray-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="img-thumbs">
          <img
            className="lazyload parallax-img"
            data-src="/images/section/career-1.jpg"
            alt="career"
            src="/images/section/career-1.jpg"
            width={1696}
            height={640}
          />
        </div>
      </div>
    </div>
  );
}
