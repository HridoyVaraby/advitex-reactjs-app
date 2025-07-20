import { products } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function RelatedProducts() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  return (
    <div className="section-related tf-spacing-38">
      <div className="tf-container">
        <div className="heading-section mb_32 d-flex justify-content-between mb_104">
          <h3 className="">Related products</h3>
          <Link to={`/shop`} className="tf-btn btn-primary2">
            <span>See All</span>
            <span className="bg-effect" />
          </Link>
        </div>
        <Swiper
          className="swiper sw-layout"
          breakpoints={{
            0: { slidesPerView: 2 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
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
            el: ".spd13",
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="product-item hover-image">
                <Link
                  to={`/product-details/${product.id}`}
                  className="img-style"
                >
                  <img
                    className="lazyload"
                    alt="item"
                    src={product.imgSrc}
                    width={product.width}
                    height={product.height}
                  />
                </Link>
                <div className="content">
                  <div className="info">
                    <div className="text-body-1 product-name mb_8">
                      <Link
                        to={`/product-details/${product.id}`}
                        className="link"
                      >
                        {product.title}
                      </Link>
                    </div>
                    <h6 className="price d-flex gap_10">
                      {product.oldPrice ? (
                        <>
                          <span className="new-price">
                            $
                            {product.price.toFixed(
                              product.price % 1 === 0 ? 0 : 2
                            )}
                          </span>
                          <span className="old-price sub-heading">
                            $
                            {product.oldPrice.toFixed(
                              product.oldPrice % 1 === 0 ? 0 : 2
                            )}
                          </span>
                        </>
                      ) : (
                        `$${product.price.toFixed(
                          product.price % 1 === 0 ? 0 : 2
                        )}`
                      )}
                    </h6>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      addProductToCart(product.id);
                    }}
                    className={`add-cart ${
                      isAddedToCartProducts(product.id) ? "cart-added" : ""
                    }`}
                  >
                    <i className="icon-shopping-cart-solid" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots sw-pagination-layout d-flex justify-content-center mt_22 spd13" />
        </Swiper>
      </div>
    </div>
  );
}
