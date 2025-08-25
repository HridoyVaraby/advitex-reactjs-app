import { blogPostsMetadata } from "@/data/blogPostsSimple";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

export default function Blogs() {
  // Get the latest 6 blog posts for the home page
  const latestPosts = useMemo(() => {
    return [...blogPostsMetadata]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  }, []);
  return (
    <div className="section-blog style-3 sw-layout-1 tf-spacing-17">
      <div className="tf-container">
        <div className="wrap">
          <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_108">
            <div className="left">
              <h1 className="heading-title split-text effect-right">
                Insights From Our Press
              </h1>
              <p
                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
              >
                Discover the latest insights and trends in our most recent
                articles. Stay informed and <br />
                up to date on the topics that matter most to you.
              </p>
            </div>
            <div className="wrap-sw-button d-flex gap_16">
              <div className="sw-button style-default v2 has-bg nav-prev-layout-1 snbp5">
                <i className="icon-caret-left" />
              </div>
              <div className="sw-button style-default v2 has-bg nav-next-layout-1 snbn5">
                <i className="icon-caret-right" />
              </div>
            </div>
          </div>
          <Swiper
            className="swiper swiper-container wow animate__fadeInLeft animate__animated"
            data-wow-delay="0s"
            spaceBetween={15}
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
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp5",
              nextEl: ".snbn5",
            }}
          >
            {latestPosts.map((article) => (
              <SwiperSlide className="swiper-slide" key={article.id}>
                <div className="blog-article-item hover-image">
                  <Link
                    to={`/single-post/${article.id}`}
                    className="article-thumb mb_25"
                  >
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
                    <ul className="blog-article-meta mb_15 d-flex align-items-center">
                      <li className="meta-item text-body-1">
                        <Link
                          to={`/single-post/${article.id}`}
                          className="link-black"
                        >
                          {article.category}
                        </Link>
                      </li>
                      <li className="meta-item date text-body-1">
                        {article.date}
                      </li>
                    </ul>
                    <h5 className="title letter-spacing-2">
                      <Link to={`/single-post/${article.id}`} className="link">
                        {article.title}
                      </Link>
                    </h5>
                    <p className="text-body-2 text_mono-gray-6 mt_10">
                      {article.excerpt}
                    </p>
                    <div className="blog-meta mt_15 d-flex align-items-center gap_10">
                      <span className="text-body-3 text_mono-gray-5">
                        {article.readTime}
                      </span>
                      <span className="text-body-3 text_mono-gray-5">
                        {article.likes} like{article.likes !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
