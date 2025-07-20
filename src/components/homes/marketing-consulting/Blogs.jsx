import { blogArticles3 } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="section-blog style-1 sw-layout-1 tf-spacing-44">
      <div className="tf-container-2">
        <div className="heading-section d-flex gap_12 justify-content-between align-items-end flex-wrap-md mb_59">
          <div className="left">
            <div className="heading-tag v2 d-flex gap_12 mb_20 text_mono-gray-5 fw-5">
              <div className="icon">
                <i className="icon-blogger text_mono-gray-5" />
              </div>
              <p className="text-body-3 fw-5">Blogs</p>
            </div>
            <h2 className="title text_white fw-5 split-text effect-right">
              Our precious <span className="text-gradient">blogs</span>
            </h2>
          </div>
          <div className="right">
            <div className="wrap-sw-button d-flex gap_16">
              <div className="sw-button style-default has-bg nav-prev-layout-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sw-button style-default has-bg nav-next-layout-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12L4 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container-2 slider-layout-right">
        <Swiper
          className="swiper"
          breakpoints={{
            0: { slidesPerView: 1.2 },
            575: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3.6,
              spaceBetween: 72,
            },
          }}
          spaceBetween={15}
        >
          {blogArticles3.map((article) => (
            <SwiperSlide
              className="swiper-slide"
              key={`blog-article-${article.id}`}
            >
              <div className="blog-article-item style-3 hover-image-3">
                <Link
                  to={`/single-post/${article.id}`}
                  className="article-thumb mb_30"
                >
                  <img
                    className="lazyload"
                    data-src={article.imageSrc}
                    alt="blog"
                    src={article.imageSrc}
                    width={article.width}
                    height={article.height}
                  />
                  <img
                    className="lazyload"
                    data-src={article.imageSrc}
                    alt="blog"
                    src={article.imageSrc}
                    width={article.width}
                    height={article.height}
                  />
                </Link>
                <div className="article-content">
                  <p className="text-body-1 text_mono-gray-5 mb_8">
                    {article.date}
                  </p>
                  <h6 className="title fw-5 letter-spacing-2 text_white">
                    <Link to={`/single-post/${article.id}`} className="link">
                      {article.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
