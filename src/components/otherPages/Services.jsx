import { services4 } from "@/data/services";

import { Link } from "react-router-dom";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  return (
    <div className="section-tailored-solutions tf-spacing-9">
      <div className="tf-container">
        <div className="heading-section mb_111">
          <h2>Tailored Solutions For Your Growth</h2>
          <p className="text-body-1 text_mono-gray-7 mt_20">
            With custom services, we empower the development, provide support
            from your unique vision.
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-mobile bg_1 swiper-active-576"
          data-screen={576}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd16",
          }}
        >
          {services4.map((service, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="wrap d-flex gap_7 flex-column justify-content-between h-full">
                <div
                  className="tf-box-icon style-1 hover-border"
                  style={{ animationDelay: service.delay }}
                >
                  <h5 className="mb_55 title">
                    <Link
                      to={`/service-details/${service.id}`}
                      className="link hover-line-text line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    ></Link>
                  </h5>
                  <div className="icon">
                    <img
                      alt="icon"
                      src={service.imgSrc}
                      width={160}
                      height={160}
                    />
                  </div>
                  <p className="text-body-1 text_mono-gray-7">
                    {service.description}
                  </p>
                </div>
                <ul className="list d-grid gap_9">
                  {service.items.map((item, i) => (
                    <li className="text-body-1" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots spd16 style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </Swiper>
        <div className="swiper tf-sw-mobile swiper-inActive-576 bg_1">
          <div className="swiper-wrapper tf-grid-layout-sm xl-col-4 sm-col-2 gap_24">
            {services4.map((service, index) => (
              <div className="swiper-slide" key={index}>
                <div className="wrap d-flex gap_7 flex-column justify-content-between h-full">
                  <div
                    className="tf-box-icon style-1 hover-border"
                    style={{ animationDelay: service.delay }}
                  >
                    <h5 className="mb_55 title">
                      <Link
                        to={`/service-details/${service.id}`}
                        className="link hover-line-text line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      ></Link>
                    </h5>
                    <div className="icon">
                      <img
                        alt="icon"
                        src={service.imgSrc}
                        width={160}
                        height={160}
                      />
                    </div>
                    <p className="text-body-1 text_mono-gray-7">
                      {service.description}
                    </p>
                  </div>
                  <ul className="list d-grid gap_9">
                    {service.items.map((item, i) => (
                      <li className="text-body-1" key={i}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-dots style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </div>
      </div>
    </div>
  );
}
