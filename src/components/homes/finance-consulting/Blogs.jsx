import { blogArticles2 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <div className="section-blog style-1 sw-layout-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_63">
              <div className="left">
                <div className="heading-tag style-1 text_mono-gray-5 text-body-2 mb_15">
                  Blogs
                </div>
                <h3 className="split-text split-lines-rotation-x">
                  Stay informed with expert insights, tips, and <br />
                  strategies designed to help you navigate
                </h3>
              </div>
              <div className="right">
                <div className="sw-progress swiper-pagination sw-progress-layout-1 spd2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-container slider-layout-right w-xl wow animate__fadeInRight animate__animated"
        data-wow-delay="0s"
      >
        <Swiper
          className="swiper"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            575: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3.4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.9,
              spaceBetween: 72,
            },
          }}
          modules={[Pagination]}
          pagination={{
            type: "progressbar",
            clickable: true,
            el: ".spd2",
          }}
          data-pagination-type="progressbar"
        >
          {blogArticles2.map((article) => (
            <SwiperSlide className="swiper-slide" key={article.id}>
              <div className="blog-article-item style-1 hover-image-3">
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
                  <div className="tag text-body-3 text_white d-flex flex-column">
                    <h6 className="text_white">{article.day}</h6>
                    <span>{article.month}</span>
                  </div>
                </Link>
                <div className="article-content mb_25">
                  <h6 className="title fw-5 letter-spacing-2 mb_8">
                    <Link to={`/single-post/${article.id}`} className="link">
                      {article.title}
                    </Link>
                  </h6>
                  <p className="text-body-1 text_mono-gray-5">
                    {article.description}
                  </p>
                </div>
                <Link
                  to={`/single-post/${article.id}`}
                  className="btn_link text-body-1 link-black"
                >
                  Read it
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
