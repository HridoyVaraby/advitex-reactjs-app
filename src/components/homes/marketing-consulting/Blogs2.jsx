import { blogPostsMetadata } from "@/data/blogPostsSimple";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Blogs2() {
  // Get the latest 6 blog posts for the marketing consulting page
  const latestPosts = useMemo(() => {
    return [...blogPostsMetadata]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  }, []);
  return (
    <div className="section-blog style-1 sw-layout-1 tf-spacing-44">
      <div className="tf-container-2">
        <div className="heading-section d-flex gap_12 justify-content-between align-items-end flex-wrap-md mb_59">
          <div className="left">
            <div className="heading-tag v2 d-flex gap_12 mb_20 text_mono-dark-8 fw-5">
              <div className="icon">
                <i className="icon-blogger text_mono-dark-8" />
              </div>
              <p className="text-body-3 fw-5 text_mono-dark-8">Blogs</p>
            </div>
            <h2 className="title text_mono-dark-9 fw-5">
              Our worthwhile <span className="text-gradient">blogs</span>
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
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                    stroke="#333"
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
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                    stroke="#333"
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
          modules={[Navigation]}
          navigation={{
            prevEl: ".nav-prev-layout-1",
            nextEl: ".nav-next-layout-1",
          }}
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
          {latestPosts.map((article) => (
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
                    data-src={article.featuredImage}
                    alt={article.title}
                    src={article.featuredImage}
                    width={550}
                    height={380}
                  />
                  <img
                    className="lazyload"
                    data-src={article.featuredImage}
                    alt={article.title}
                    src={article.featuredImage}
                    width={550}
                    height={380}
                  />
                </Link>
                <div className="article-content">
                  <p className="text-body-1 text_mono-gray-7 mb_8">
                    {article.date}
                  </p>
                  <h6 className="title fw-5 letter-spacing-2 text_mono-dark-9">
                    <Link to={`/single-post/${article.id}`} className="link text_mono-dark-9">
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