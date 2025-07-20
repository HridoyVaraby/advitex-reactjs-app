import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="page-title style-3">
      <div className="tf-container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="heading-title">
              <div className="text-display-2 fw-6 text_white mb_29 split-text effect-rotate">
                Secure your financial future with expert guidance
              </div>
              <p className="sub-heading text_white mb_41 split-text split-lines-transform">
                Providing expert financial consulting services to help you grow,{" "}
                <br />
                optimize, and thrive in today's competitive landscape
              </p>
              <Link
                to={`/pricing`}
                className="tf-btn btn-white2 btn-px-28 height-2"
              >
                <span className="fw-5">Get Started</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-md-8">
            <div className="position-relative right">
              <img
                alt="shape"
                className="shape"
                src="/images/item/shape.png"
                width={693}
                height={620}
              />
              <img
                alt="person"
                className="position-absolute person"
                src="/images/page-title/person.png"
                width={435}
                height={563}
              />
              <img
                alt="item"
                className="position-absolute item left-right"
                src="/images/item/item-1.png"
                width={146}
                height={147}
              />
              <img
                alt="item-finance"
                className="position-absolute item-finance up-down"
                src="/images/item/item-finance.png"
                width={260}
                height={203}
              />
              <img
                alt="item-accounting"
                className="position-absolute item-accounting up-down"
                src="/images/item/item-accounting.png"
                width={236}
                height={158}
              />
              <img
                alt="item-expert"
                className="position-absolute item-expert up-down-2"
                src="/images/item/item-expert.png"
                width={260}
                height={174}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="infiniteslide_wrap" style={{ overflow: "hidden" }}>
        <div className="infiniteslide tf-marquee infiniteSlide">
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-1-1.png"
                width={162}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-2-1.png"
                width={168}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-3-1.png"
                width={213}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-4-1.png"
                width={187}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-5-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-6-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-7-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-8-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-9-1.png"
                width={136}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-1-1.png"
                width={162}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-2-1.png"
                width={168}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-3-1.png"
                width={213}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-4-1.png"
                width={187}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-5-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-6-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-7-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-8-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-9-1.png"
                width={136}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-1-1.png"
                width={162}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-2-1.png"
                width={168}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-3-1.png"
                width={213}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-4-1.png"
                width={187}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-5-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-6-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-7-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-8-1.png"
                width={169}
                height={56}
              />
            </div>
          </div>
          <div
            className="marquee-item infiniteslide_clone"
            style={{ flex: "0 0 auto", display: "block" }}
          >
            <div className="partner style-2">
              <img
                alt="brands"
                src="/images/brands/brand-9-1.png"
                width={136}
                height={56}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
