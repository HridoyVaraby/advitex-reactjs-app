import React from "react";
import { Link } from "react-router-dom";

import { counterItems } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function Services() {
  return (
    <div className="section-service style-4 tf-spacing-23">
      <div className="tf-container-2">
        <div className="heading-section text-center mb_65">
          <div className="heading-tag style-2 text_mono-gray-5 text-body-3 mb_12 mx-auto">
            SERVICES
          </div>
          <h1 className="heading-title text_dark fw-6 split-text effect-right">
            We committed to your financial growth
          </h1>
          <p className="text-body-1 text_mono-gray-7 mt_28 split-text split-lines-transform">
            Providing expert financial consulting services to help you grow,
            optimize, and <br />
            thrive in today's competitive landscape
          </p>
        </div>
        <div className="wrap">
          <ul
            className="nav nav-tabs-wrap overflow-x-auto style-1 mb_50"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active sub-heading text_dark"
                id="wealth-management"
                data-bs-toggle="tab"
                data-bs-target="#wealth-management-pane"
                type="button"
                role="tab"
                aria-controls="wealth-management-pane"
                aria-selected="true"
              >
                <span className="icon">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.36251 6.36417L6.03149 5.98893C3.54774 8.35662 2 11.6975 2 15.3999C2 19.7741 4.16034 23.6437 7.47226 25.9999C9.59649 27.5112 12.1945 28.3999 15 28.3999C16.2306 28.3999 17.4212 28.2289 18.5495 27.9094C19.0808 27.759 19.3451 27.18 19.154 26.6619L15.1844 15.8999H15.0026L6.36251 6.36417ZM6.36251 6.36417C3.98179 8.64058 2.5 11.8469 2.5 15.3999C2.5 19.6054 4.57637 23.326 7.76211 25.5925C9.80448 27.0455 12.3017 27.8999 15 27.8999C16.1841 27.8999 17.3289 27.7354 18.4132 27.4283C18.6393 27.3643 18.7843 27.1046 18.6849 26.8349L14.5632 15.6606L6.36251 6.36417ZM15.2257 14.8999L7.11217 5.70235C9.26378 3.95003 12.0087 2.8999 15 2.8999C21.5798 2.8999 26.9726 7.98407 27.4636 14.4378C27.4815 14.6736 27.2866 14.8999 27 14.8999H15.2257Z"
                      stroke="#3F3D2E"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19.0343 17.7002H29.5996C29.8867 17.7002 30.0811 17.9263 30.0632 18.1616C29.7115 22.7887 26.8395 26.7135 22.8148 28.5638C22.6012 28.662 22.3221 28.5586 22.2226 28.2889L18.5652 18.3732C18.4448 18.0468 18.6864 17.7002 19.0343 17.7002Z"
                      stroke="#3F3D2E"
                    />
                  </svg>
                </span>
                Wealth Management
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link sub-heading text_dark"
                id="business-strategy"
                data-bs-toggle="tab"
                data-bs-target="#business-strategy-pane"
                type="button"
                role="tab"
                aria-controls="business-strategy-pane"
                aria-selected="false"
              >
                <span className="icon">
                  <svg
                    width={33}
                    height={32}
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33301 2.80005V28.8C3.33301 28.9105 3.42255 29 3.53301 29H29.533"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M25.5332 7L25.5332 24.2"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M19.7334 11L19.7334 24.2"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.9326 15L13.9326 24.2"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.13281 19L8.13281 24.2"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Business Strategy
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link sub-heading text_dark"
                id="stock-planning"
                data-bs-toggle="tab"
                data-bs-target="#stock-planning-pane"
                type="button"
                role="tab"
                aria-controls="stock-planning-pane"
                aria-selected="false"
              >
                <span className="icon">
                  <svg
                    width={33}
                    height={32}
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6663 29V23.6M16.6663 2.80005V7.40005M12.1073 21.2V23.54C12.1073 23.5732 12.1341 23.6 12.1673 23.6H16.6663M12.1073 21.2V18.86C12.1073 18.8269 12.1341 18.8 12.1673 18.8H16.6663M12.1073 21.2H7.26631M28.4663 21.2H23.6254M23.6254 21.2V18.86C23.6254 18.8269 23.5985 18.8 23.5654 18.8H16.6663M23.6254 21.2V23.54C23.6254 23.5732 23.5985 23.6 23.5654 23.6H16.6663M8.30725 9.80005V12.14C8.30725 12.1732 8.33412 12.2 8.36725 12.2H16.6663M8.30725 9.80005V7.46005C8.30725 7.42691 8.33412 7.40005 8.36725 7.40005L16.6663 7.40005M8.30725 9.80005H3.46631M24.6663 9.80005H19.8254M19.8254 9.80005V7.46005C19.8254 7.42691 19.7985 7.40005 19.7654 7.40005H16.6663M19.8254 9.80005V12.14C19.8254 12.1732 19.7985 12.2 19.7654 12.2H16.6663M16.6663 18.8V12.2"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Stock Planning
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link sub-heading text_dark"
                id="investment-planning"
                data-bs-toggle="tab"
                data-bs-target="#investment-planning-pane"
                type="button"
                role="tab"
                aria-controls="investment-planning-pane"
                aria-selected="false"
              >
                <span className="icon">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="14.6109"
                      cy="13.8108"
                      r="8.2"
                      transform="rotate(-45 14.6109 13.8108)"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                    />
                    <path
                      d="M10.7998 13.3999L10.7998 16.7999"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.3999 11.6001L18.3999 16.8001"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.6001 10L14.6001 16.8"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M20.5503 19.7505L26.7728 25.973"
                      stroke="#3F3D2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Investment Planning
              </button>
            </li>
          </ul>
          <div
            className="tab-content flat-animate-tab effect-content-slide"
            id="myTabContent"
          >
            <div
              className="tab-pane show active"
              id="wealth-management-pane"
              role="tabpanel"
              aria-labelledby="wealth-management"
              tabIndex={0}
            >
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/section/service-1.jpg"
                    alt="service"
                    src="/images/section/service-1.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <span className="text-body-1 text_dark font2">
                      Optimization
                    </span>
                    <h3 className="text_dark fw-6">
                      Wealth management solutions
                    </h3>
                  </div>
                  <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Tailored plans based on your unique financial goals and
                      risk tolerance.
                    </li>
                    <li className="text-body-1 text_dark">
                      A holistic approach that covers asset growth, protection,
                      and long-term wealth preservation.
                    </li>
                    <li className="text-body-1 text_dark">
                      Access to experienced financial advisors who continuously
                      monitor and adjust your portfolio.
                    </li>
                  </ul>
                  <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <img
                        alt="avatar"
                        src="/images/avatar/avatar-17.jpg"
                        width={144}
                        height={144}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4">
                        “It's a comprehensive tool of Advitex that we
                        <span className="fw-6 text_dark">rely on daily</span> to
                        guide our
                        <span className="fw-6 text_dark">
                          investment decisions
                        </span>
                        and ensure we're on track”
                      </p>
                      <div className="text-body-2 fw-6">
                        John Sena - CEO of Kling
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/pricing`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Get Started</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="business-strategy-pane"
              role="tabpanel"
              aria-labelledby="business-strategy"
              tabIndex={0}
            >
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/section/service-2.jpg"
                    alt="service"
                    src="/images/section/service-2.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <span className="text-body-1 text_dark font2">
                      Optimization
                    </span>
                    <h3 className="text_dark fw-6">
                      Business Strategy solution
                    </h3>
                  </div>
                  <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Customized blueprints designed to propel your business
                      forward and enhance competitiveness.
                    </li>
                    <li className="text-body-1 text_dark">
                      A well-rounded approach that focuses on market analysis,
                      operational efficiency, and sustainable growth
                    </li>
                    <li className="text-body-1 text_dark">
                      Work closely with skilled strategists who provide ongoing
                      support and adjust plans to meet evolving market trends.
                    </li>
                  </ul>
                  <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <img
                        alt="avatar"
                        src="/images/avatar/avatar-5.jpg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4">
                        “It's a comprehensive tool of Advitex that we
                        <span className="fw-6 text_dark">rely on daily </span>
                        to guide our
                        <span className="text_dark fw-6">
                          investment decision
                        </span>
                        and ensure we're on track"
                      </p>
                      <div className="text-body-2 fw-6">
                        Elise Chrona - CEO of Minga
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/pricing`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Get Started</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="stock-planning-pane"
              role="tabpanel"
              aria-labelledby="stock-planning"
              tabIndex={0}
            >
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/section/service-3.jpg"
                    alt="service"
                    src="/images/section/service-3.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <span className="text-body-1 text_dark font2">
                      Optimization
                    </span>
                    <h3 className="text_dark fw-6">Stock Planning solution</h3>
                  </div>
                  <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Personalized strategies to navigate the stock market with
                      confidence and precision.
                    </li>
                    <li className="text-body-1 text_dark">
                      A thorough process that includes stock selection, risk
                      analysis, and diversification for maximum returns.
                    </li>
                    <li className="text-body-1 text_dark">
                      Receive continuous guidance from market-savvy advisors who
                      adapt strategies based on market movements.
                    </li>
                  </ul>
                  <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <img
                        alt="avatar"
                        src="/images/avatar/avatar-6.jpg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4">
                        "Thanks to Advitex's stock planning tools, we have seen
                        <span className="text_dark fw-6">
                          remarkable stability
                        </span>
                        in our investments, even during volatile periods."
                      </p>
                      <div className="text-body-2 fw-6">
                        Alex Boar - CEO of Marcus
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/pricing`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Get Started</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="investment-planning-pane"
              role="tabpanel"
              aria-labelledby="investment-planning"
              tabIndex={0}
            >
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/section/service-4.jpg"
                    alt="service"
                    src="/images/section/service-4.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <span className="text-body-1 text_dark font2">
                      Optimization
                    </span>
                    <h3 className="text_dark fw-6">
                      Investment Planning solution
                    </h3>
                  </div>
                  <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Comprehensive investment plans designed to align with your
                      financial objectives and time horizon.
                    </li>
                    <li className="text-body-1 text_dark">
                      An approach that covers asset allocation, portfolio
                      rebalancing, and performance optimization.
                    </li>
                    <li className="text-body-1 text_dark">
                      Leverage expert financial planners who review and
                      fine-tune investments to stay in sync with your goals.
                    </li>
                  </ul>
                  <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <img
                        alt="avatar"
                        src="/images/avatar/avatar-8.jpg"
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4">
                        "Advitex's investment planning has
                        <span className="">simplified complex decisions</span> ,
                        giving us clarity and
                        <span className="text_dark fw-6">confidence</span> in
                        our financial journey."
                      </p>
                      <div className="text-body-2 fw-6">
                        Marca Heizy - CEO of Fantom
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/pricing`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Get Started</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-counter styel-1">
          <div className="clutch-rating-item d-flex align-items-center">
            <img
              alt="clutch-rating"
              src="/images/item/clutch-rating.png"
              width={92}
              height={92}
            />
            <div className="content">
              <div className="wrap-rating d-flex gap_10 align-items-center">
                <span className="text-body-1 fw-6 text_dark">4.9/5</span>
                <ul className="tf-rating d-flex align-items-center gap_3">
                  <li>
                    <i className="icon-star-solid" />
                  </li>
                  <li>
                    <i className="icon-star-solid" />
                  </li>
                  <li>
                    <i className="icon-star-solid" />
                  </li>
                  <li>
                    <i className="icon-star-solid" />
                  </li>
                  <li>
                    <i className="icon-star-solid" />
                  </li>
                </ul>
              </div>
              <p className="text-body-3 text_dark">
                Based on 24 Clutch reviews
              </p>
            </div>
          </div>
          <div className="right d-flex align-items-center justify-content-between">
            {counterItems.map((item, index) => (
              <div
                key={index}
                className="counter-item style-1 v2 flex-column align-items-start"
              >
                <div className="counter-number">
                  <h2 className="odometer font2 fw-6 text_dark">
                    <OdometerComponent max={item.value} />
                  </h2>
                  <span className="sub text_dark fw-6">{item.unit}</span>
                </div>
                <p className="text-body-1 text_dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
