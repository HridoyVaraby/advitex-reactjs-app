import React from "react";
import { Link } from "react-router-dom";

import { useContextElement } from "@/context/Context";
import DropdownSelect from "../common/DropdownSelect";
export default function ShopCart() {
  const {
    cartProducts,
    setCartProducts,
    totalPrice,

    updateQuantity,
  } = useContextElement();

  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="cart-product tf-spacing-39">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-8">
            <div className="left">
              <h2 className="title">Products</h2>
              <div className="tf-product-cart-wrap tf-cart-item">
                {cartProducts.length ? (
                  <>
                    {cartProducts.map((product, i) => (
                      <div key={i} className="tf-cart-item_product file-delete">
                        <div className="product-item style-cart hover-image">
                          <fieldset className="fieldset-item">
                            <input
                              type="checkbox"
                              name="brand"
                              className="tf-check"
                            />
                          </fieldset>
                          <Link
                            to={`/product-details/${product.id}`}
                            className="img-style"
                          >
                            <img
                              className="lazyload"
                              alt="item"
                              src={product.imgSrc}
                              width={263}
                              height={220}
                            />
                          </Link>
                          <div className="content">
                            <div className="info">
                              <div className="h5 product-name line-clamp-2 mb_16">
                                <Link
                                  to={`/product-details/${product.id}`}
                                  className="link"
                                >
                                  {product.title}
                                </Link>
                              </div>
                              <div className="price d-flex gap_10 mb_33">
                                <span className="new-price h5">
                                  ${product.price.toFixed(2)}
                                </span>
                                {product.oldPrice && (
                                  <span className="old-price h6">
                                    ${product.oldPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                              <div className="tf-product-info-quantity">
                                <div className="wg-quantity">
                                  <span
                                    className="btn-quantity btn-decrease"
                                    onClick={() =>
                                      updateQuantity(
                                        product.id,
                                        product.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <input
                                    className="quantity-product"
                                    type="text"
                                    name="number"
                                    readOnly
                                    value={product.quantity}
                                  />
                                  <span
                                    className="btn-quantity btn-increase"
                                    onClick={() =>
                                      updateQuantity(
                                        product.id,
                                        product.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => removeItem(product.id)}
                          className="remove-cart"
                        >
                          <span className="remove icon-times-solid" />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="">
                    <div className="col-4">
                      Your Cart is empty. Start adding favorite products to
                      cart!{" "}
                    </div>
                    <Link
                      className="tf-btn mt-4 mb-3 text-white"
                      style={{ width: "fit-content" }}
                      href="/shop"
                    >
                      Explore Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cart-totals">
              <h2 className="title">Cart totals</h2>
              {cartProducts.map((product, i) => (
                <div key={i} className="info sub-heading d-flex">
                  <div className="name">{product.title}</div>
                  <span>x{product.quantity}</span>{" "}
                  <div className="price sub-heading">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                </div>
              ))}

              <DropdownSelect
                defaultOption={"Add a coupon"}
                options={["coupon 10%", "coupon 20%"]}
                addtionalParentClass="h6 text_black px-0"
              />
              <div className="sub-total d-flex justify-content-between align-items-center h6">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="total h4 d-flex justify-content-between align-items-center">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link
                to={`/checkout`}
                className="tf-btn w-full btn-primary2 height-3"
              >
                <span className="text-body-1">Check Out</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
