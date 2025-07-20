import React, { useEffect, useRef, useState } from "react";

import Drift from "drift-zoom";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { useContextElement } from "@/context/Context";
const colorOptions = [
  {
    id: "blue-sapphire",
    label: "Blue Sapphire",
    price: null,
    defaultChecked: false,
  },
  {
    id: "seafoam-green",
    label: "Seafoam Green",
    price: "79.99",
    defaultChecked: true,
  },
  {
    id: "dusty-rose",
    label: "Dusty Rose",
    price: "89.99",
    defaultChecked: false,
  },
  {
    id: "light-gray",
    label: "Light Gray",
    price: "59.99",
    defaultChecked: false,
  },
];
export default function ShopDetails({ product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [value, setValue] = useState(1);
  const slides = [
    {
      color: "blue-sapphire",
      image: product.imgSrc,
    },
    {
      color: "dusty-rose",
      image: "/images/shop/thumbs-main-2.jpg",
    },
    {
      color: "light-gray",
      image: "/images/shop/thumbs-main-3.jpg",
    },
    {
      color: "seafoam-green",
      image: "/images/shop/thumbs-main-4.jpg",
    },
  ];
  const [activeColor, setActiveColor] = useState(
    colorOptions.find((opt) => opt.defaultChecked)?.id || ""
  );
  const [swiperThumb, setSwiperThumb] = useState(null);
  const lightboxRef = useRef(null);

  useEffect(() => {
    // Initialize PhotoSwipeLightbox
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    // Store the lightbox instance in the ref for later use
    lightboxRef.current = lightbox;

    // Cleanup: destroy the lightbox when the component unmounts
    return () => {
      lightbox.destroy();
    };
  }, []);
  useEffect(() => {
    // Function to initialize Drift
    // Function to check window width
    const checkWindowSize = () => window.innerWidth >= 1200;

    // Only proceed if window is wide enough
    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only once on mount
  return (
    <div className="tf-spacing-1">
      <div className="tf-container">
        <div className="shop-details">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <div className="tf-product-media-wrap">
                  <div className="thumbs-slider">
                    <Swiper
                      dir="ltr"
                      className="swiper tf-product-media-main mb_20"
                      id="gallery-swiper-started"
                      modules={[Thumbs]}
                      thumbs={{ swiper: swiperThumb }}
                    >
                      {slides.map((slide, index) => (
                        <SwiperSlide
                          key={index}
                          className="swiper-slide"
                          data-color={slide.color}
                        >
                          <a
                            href={slide.image}
                            target="_blank"
                            className="item"
                            data-pswp-width="400px"
                            data-pswp-height="400px"
                          >
                            <img
                              className="tf-image-zoom lazyload"
                              data-zoom={slide.image}
                              data-src={slide.image}
                              alt=""
                              src={slide.image}
                              width={836}
                              height={718}
                            />
                          </a>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      dir="ltr"
                      modules={[Thumbs, FreeMode]}
                      onSwiper={setSwiperThumb}
                      className="swiper tf-product-media-thumbs other-image-zoom"
                      {...{
                        spaceBetween: 24,
                        slidesPerView: "auto",
                        freeMode: true,
                        watchSlidesProgress: true,
                        observer: true,
                        observeParents: true,
                      }}
                    >
                      {slides.map((elm, i) => (
                        <SwiperSlide
                          key={i}
                          className="swiper-slide stagger-item"
                        >
                          <div className="item">
                            <img
                              className="lazyload"
                              alt=""
                              src={elm.image}
                              width={191}
                              height={160}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <div className="tf-product-info-wrap position-relative">
                  <div className="tf-zoom-main" />
                  <div className="tf-product-info-list other-image-zoom">
                    <div className="tf-product-info-heading">
                      <div className="tf-product-info-name mb_24">
                        <h3 className="name mb_11">{product.title}</h3>
                        <div className="sub">
                          <div className="tf-product-info-rate">
                            <div className="ratings d-flex gap_8">
                              <i className="icon-star-solid" />
                              <i className="icon-star-solid" />
                              <i className="icon-star-solid" />
                              <i className="icon-star-half-alt-solid" />
                              <i className="icon-star1" />
                            </div>
                            <div className="text text-body-2 text_color-text-2 fw-5">
                              3 Review
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-desc mb_12">
                        <div className="tf-product-info-price">
                          <h2 className="price-on-sale">
                            ${product.price.toFixed(2)}
                          </h2>
                          {product.oldPrice && (
                            <h3 className="compare-at-price text_mono-gray-5">
                              ${product.oldPrice.toFixed(2)}
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-info-choose-option gap-19">
                      <div className="variant-picker-item mb_58">
                        <div className="variant-picker-label text-body-2 text_color-text-2 mb_6">
                          Select Color
                        </div>
                        <div className="variant-picker-values">
                          {colorOptions.map((color) => {
                            const inputId = `values-${color.id}`;
                            const isActive = activeColor === color.id;

                            return (
                              <React.Fragment key={color.id}>
                                <input
                                  id={inputId}
                                  type="radio"
                                  name="color1"
                                  checked={isActive}
                                  onChange={() => setActiveColor(color.id)}
                                />
                                <label
                                  className={`hover-tooltip tooltip-bot radius-60 color-btn ${
                                    isActive ? "active" : ""
                                  }`}
                                  htmlFor={inputId}
                                  data-value={color.id}
                                  data-color={color.id}
                                  {...(color.price
                                    ? { "data-price": color.price }
                                    : {})}
                                >
                                  <span
                                    className={`btn-checkbox bg-color-${color.id}`}
                                  />
                                  <span className="tooltip">{color.label}</span>
                                </label>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>

                      <ul className="list mb_57">
                        <li className="text-body-2">
                          Condition: Machine Body. + 143W Power Supply
                        </li>
                        <li className="text-body-2">
                          Display : 24" 4.5K (4480x2520) , 500 nits , wide color
                          P3
                        </li>
                        <li className="text-body-2">
                          CPU: Apple M3 8-Core CPU 4.0Ghz
                        </li>
                        <li className="text-body-2">
                          GPU: 8-Core GPU ,16-Core Neural Engine
                        </li>
                        <li className="text-body-2">
                          RAM: 8GB of onboard " Unified "
                        </li>
                        <li className="text-body-2">Storage: 256GB PCIe</li>
                        <li className="text-body-2">
                          Connect : x2 Thunderbolt 3 | USB 4 ports , Jack 3.5,
                          Weight : 4,43kg
                        </li>
                        <li className="text-body-2">
                          Accessory : Mouse,Keyboard, Power Adapter, Cable C to
                          lightning.
                        </li>
                      </ul>
                      <div className="d-flex tf-product-wrap-btn gap_12 mb_23">
                        <div className="tf-product-info-quantity d-flex align-items-center">
                          <div className="title text-body-2 text_mono-gray-8">
                            QTY
                          </div>
                          <div className="wg-quantity">
                            <span
                              onClick={() =>
                                setValue((pre) => (pre == 1 ? 1 : pre - 1))
                              }
                              className="btn-quantity btn-decrease"
                            >
                              -
                            </span>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              readOnly
                              value={value}
                            />
                            <span
                              onClick={() => setValue((pre) => pre + 1)}
                              className="btn-quantity btn-increase"
                            >
                              +
                            </span>
                          </div>
                        </div>
                        <div className="tf-product-info-by-btn d-flex align-items-center w-full">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              addProductToCart(product.id, value);
                            }}
                            className="tf-btn w-full show-shopping-cart"
                          >
                            <span className="text-body-2 fw-4">
                              {isAddedToCartProducts(product.id)
                                ? "Already Added"
                                : "Add To Cart"}
                            </span>
                            <span className="bg-effect" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
