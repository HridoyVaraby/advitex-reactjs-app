import { blogPosts } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <div className="section">
      <div className="tf-container">
        <div className="heading-section d-flex gap_12 justify-content-between align-items-end flex-wrap-md mb_56">
          <div className="left">
            <div className="point text-body-1 mb_7">
              <span className="item" />
              Latest Articles
            </div>
            <h2 className="heading-title text_primary split-text effect-right">
              Get The Latest Updates
            </h2>
            <p
              className="text_mono-gray-7 text-body-1 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              We provide timely updates on industry trends, regulatory changes,
              and <br />
              best practices to help you make informed decisions.
            </p>
          </div>
          <div className="right">
            <Link to={`/blog`} className="tf-btn height-3 rounded-12 btn-px-28">
              <span>View Details</span>
              <span className="bg-effect" />
            </Link>
          </div>
        </div>
        <Swiper
          className="swiper style-pagination sw-layout"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={12}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd7",
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide className="swiper-slide" key={`blog-${post.id}`}>
              <div className="blog-article-item style-4">
                <Link
                  to={`/single-post/${post.id}`}
                  className="article-thumb mb_11"
                >
                  <img
                    className="lazyload"
                    data-src={post.imageSrc}
                    alt={post.alt}
                    src={post.imageSrc}
                    width={415}
                    height={280}
                  />
                  <img
                    className="lazyload"
                    data-src={post.imageSrc}
                    alt={post.alt}
                    src={post.imageSrc}
                    width={415}
                    height={280}
                  />
                </Link>
                <div className="article-content">
                  <ul className="blog-article-meta mb_8 d-flex align-items-center style-2">
                    <li className="meta-item text-body-2">{post.date}</li>
                    <li className="meta-item date text-body-2">
                      {post.comments}
                    </li>
                  </ul>
                  <h6 className="title fw-5 letter-spacing-2 text_mono-dark-9 line-clamp-2">
                    <Link to={`/single-post/${post.id}`} className="link">
                      {post.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination sw-pagination-layout text-center mt_20 spd7" />
        </Swiper>
      </div>
    </div>
  );
}
