import { products } from "@/data/products";
import React, { useEffect, useReducer } from "react";

import FilteringOptions from "./FilteringOptions";
import { Link } from "react-router-dom";
import { initialState, reducer } from "@/reducer/FilterReducer";
import { useContextElement } from "@/context/Context";
export default function Shop() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    price,

    brands,

    filtered,
    sortingOption,
    sorted,

    currentPage,
    itemPerPage,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),

    setBrands: (newBrand) => {
      let newBrands = [...brands];
      if (newBrands.includes(newBrand)) {
        newBrands = newBrands.filter((brand) => brand != newBrand);
      } else {
        newBrands = [...newBrands, newBrand];
      }
      console.log(newBrands);
      dispatch({ type: "SET_BRANDS", payload: newBrands });
    },

    setSortingOption: (value) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),

    setCurrentPage: (value) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }),
        dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
    },
    clearFilter: () => {
      dispatch({ type: "CLEAR_FILTER" });
    },
  };

  useEffect(() => {
    let filteredArrays = [];

    if (brands.length) {
      const filteredByBrands = [...products].filter((elm) =>
        brands.every((brand) => elm.filterBrands.includes(brand))
      );
      filteredArrays = [...filteredArrays, filteredByBrands];
    }

    const filteredByPrice = [...products].filter(
      (elm) => elm.price >= price[0] && elm.price <= price[1]
    );
    filteredArrays = [...filteredArrays, filteredByPrice];

    const commonItems = [...products].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    dispatch({ type: "SET_FILTERED", payload: commonItems });
  }, [price, brands]);

  useEffect(() => {
    if (sortingOption === "Price Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.price - b.price),
      });
    } else if (sortingOption === "Price Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.price - a.price),
      });
    } else if (sortingOption === "Title Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.title.localeCompare(b.title)),
      });
    } else if (sortingOption === "Title Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.title.localeCompare(a.title)),
      });
    } else {
      dispatch({ type: "SET_SORTED", payload: filtered });
    }
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);
  return (
    <div className="tf-spacing-41">
      <div className="tf-container">
        <div className="wrap-shop">
          <div className="row">
            <div className="col-xl-8">
              <div className="left">
                <div className="top mb_92">
                  <div className="text_mono-gray-8 text-body-1 result-count">
                    Showing 1–6 of 8 results
                  </div>
                  <div className="wrap d-flex">
                    <div className="wrap-sort">
                      <div className="text_mono-gray-8 text-body-1">
                        Sort by
                      </div>
                      <div
                        className="tf-dropdown-sort"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="btn-select">
                          <span className="text-body-3 text-sort-value">
                            {sortingOption}
                          </span>
                          <span className="icon icon-angle-down-solid" />
                        </div>
                        <div className="dropdown-menu">
                          {[
                            "Sort by (Default)",
                            "Title Ascending",
                            "Title Descending",
                            "Price Ascending",
                            "Price Descending",
                          ].map((elm, i) => (
                            <div
                              key={i}
                              className={`select-item ${
                                sortingOption == elm ? "active" : ""
                              }`}
                              onClick={() => allProps.setSortingOption(elm)}
                              data-sort-value="best-selling"
                            >
                              <span className="text-body-3 text-value-item">
                                {elm}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="wrap-layout">
                      <ul
                        className="nav-tab-filter group-layout"
                        role="tablist"
                      >
                        <li className="nav-tab-item" role="presentation">
                          <a
                            href="#gridLayout"
                            className="btn-layout grid nav-link-item active"
                            data-bs-toggle="tab"
                          >
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.611328 7.94444H21.3891M21.3891 14.6667H0.611328"
                                stroke="black"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width={21}
                                height={21}
                                stroke="black"
                              />
                              <path d="M7.33398 0V20.7778" stroke="black" />
                              <path d="M14.666 0V20.7778" stroke="black" />
                            </svg>
                          </a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                          <a
                            href="#listLayout"
                            className="nav-link-item btn-layout list"
                            data-bs-toggle="tab"
                          >
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.88867 4.8889H21.3887"
                                stroke="black"
                              />
                              <circle
                                cx="1.22222"
                                cy="4.88889"
                                r="0.722222"
                                fill="#D9D9D9"
                                stroke="black"
                              />
                              <path d="M4.88867 11H21.3887" stroke="black" />
                              <path
                                d="M1.94444 11C1.94444 11.3989 1.62109 11.7222 1.22222 11.7222C0.82335 11.7222 0.5 11.3989 0.5 11C0.5 10.6011 0.82335 10.2778 1.22222 10.2778C1.62109 10.2778 1.94444 10.6011 1.94444 11Z"
                                fill="#D9D9D9"
                                stroke="black"
                              />
                              <path
                                d="M4.88867 17.1111H21.3887"
                                stroke="black"
                              />
                              <path
                                d="M1.94444 17.1111C1.94444 17.51 1.62109 17.8333 1.22222 17.8333C0.82335 17.8333 0.5 17.51 0.5 17.1111C0.5 16.7122 0.82335 16.3889 1.22222 16.3889C1.62109 16.3889 1.94444 16.7122 1.94444 17.1111Z"
                                fill="#D9D9D9"
                                stroke="black"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flat-animate-tab">
                  <div className="tab-content">
                    <div
                      className="tab-pane active show"
                      id="gridLayout"
                      role="tabpanel"
                    >
                      <div className="tf-grid-layout-2 md-col-3">
                        {sorted.map((product) => (
                          <div
                            className="product-item hover-image"
                            key={product.id}
                          >
                            <Link
                              to={`/product-details/${product.id}`}
                              className="img-style"
                            >
                              <img
                                className="lazyload"
                                data-src={product.imgSrc}
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
                                <div className="h6 price d-flex gap_10">
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
                                </div>
                              </div>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addProductToCart(product.id);
                                }}
                                className={`add-cart ${
                                  isAddedToCartProducts(product.id)
                                    ? "cart-added"
                                    : ""
                                }`}
                              >
                                <i className="icon-shopping-cart-solid" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                      <ul className="wg-pagination d-flex justify-content-center gap_12 mt_58">
                        <li>
                          <a href="#">
                            <i className="icon-angle-left-solid" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">...</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-angle-right-solid" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="listLayout" role="tabpanel">
                      <div className="wrap-list d-flex gap-16 flex-direction-column">
                        {sorted.map((product, i) => (
                          <div
                            key={i}
                            className="product-item hover-image style-list"
                          >
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
                                <div className="h6 price d-flex gap_10">
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
                                </div>
                              </div>
                              <div className="list-product-btn">
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addProductToCart(product.id);
                                  }}
                                  className="add-cart"
                                  href="#"
                                >
                                  {isAddedToCartProducts(product.id)
                                    ? "Already Added"
                                    : "Add to Cart"}
                                </a>
                                <a
                                  href="#"
                                  className="box-icon wishlist btn-icon-action"
                                >
                                  <span className="icon icon-heart" />
                                  <span className="tooltip">Wishlist</span>
                                </a>
                                <a
                                  href="#"
                                  className="box-icon quickview tf-btn-loading"
                                >
                                  <span className="icon icon-eye" />
                                  <span className="tooltip">Quick View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <ul className="wg-pagination d-flex justify-content-center gap_12 mt_58">
                        <li>
                          <a href="#">
                            <i className="icon-angle-left-solid" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">...</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-angle-right-solid" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="right">
                <div className="sildebar-fiiler canvas-filter">
                  <div className="canvas-wrapper">
                    <div className="canvas-header d-flex d-xl-none">
                      <h5 className="">
                        <span className="icon icon-filter" />
                        Filters
                      </h5>
                      <div className="close-filter">
                        <span className="icon-times-solid" />
                      </div>
                    </div>
                    <div className="canvas-body">
                      <FilteringOptions allProps={allProps} />
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
