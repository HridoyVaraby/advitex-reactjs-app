import React from "react";

export default function Features2() {
  return (
    <div className="section">
      <div className="tf-container-2">
        <div className="heading-section text-center mb_58">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-user-question-02" />
            </div>
            <p className="text-body-3 fw-5">Why Choose Us ?</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
            Our unique solutions designed to{" "}
            <span className="text-gradient">unlock</span> your <br />
            brand’s full potential
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_27 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Discover the expertise, innovation, and dedication that make us stand out. We <br />
            provide customized strategies and measurable results to support your success.
          </p>
        </div>
        <ul
          className="nav nav-tabs-wrap style-2 overflow-x-auto mb_48"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="service-1"
              data-bs-toggle="tab"
              data-bs-target="#service-1-pane"
              type="button"
              role="tab"
              aria-controls="service-1-pane"
              aria-selected="true"
            >
              <span className="text-body-1 text_mono-gray-5">01</span>
              <span className="fw-5 h6"> Why Need Marketing ?</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-2"
              data-bs-toggle="tab"
              data-bs-target="#service-2-pane"
              type="button"
              role="tab"
              aria-controls="service-2-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">02</span>
              <span className="fw-5 h6">Understand your Goals</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-3"
              data-bs-toggle="tab"
              data-bs-target="#service-3-pane"
              type="button"
              role="tab"
              aria-controls="service-3-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">03</span>
              <span className="fw-5 h6">Our Proven Process</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-4"
              data-bs-toggle="tab"
              data-bs-target="#service-4-pane"
              type="button"
              role="tab"
              aria-controls="service-4-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">04</span>
              <span className="fw-5 h6"> Analyzing and Optimizing</span>
              <span className="line" />
            </button>
          </li>
        </ul>
        <div
          className="tab-content flat-animate-tab effect-content-slide"
          id="myTabContent"
        >
          <div
            className="tab-pane show active"
            id="service-1-pane"
            role="tabpanel"
            aria-labelledby="service-1"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/section/service-5.jpg"
                  alt="service"
                  src="/images/section/service-5.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">01</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Why Need Marketing ?
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Providing customized marketing solutions that empower you to connect, engage, and thrive in a constantly evolving marketplace.
                  </p>
                </div>
                <div>
                  <ul className="list effect-item effect-right effect-3 mb_56">
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line icon_secondary" /> We offering
                      customized strategies that truly work for you
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line icon_secondary" />
                      Brings the knowledge and insights you need to make
                      informed decisions that drive success.
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line icon_secondary" /> Flexible plans with the freedom to cancel anytime.
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line icon_secondary" /> Proven results. Trusted by satisfied clients.
                    </li>
                  </ul>
                  <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <img
                        alt="avatar"
                        src="/images/avatar/testimonial/Anyaprokash.png"
                        width={144}
                        height={144}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4 text_white">
                        “Delivered our website with a user-friendly and beautiful outlook that has directly contributed to increasing our online sales. We are extremely satisfied with their ongoing support.”
                      </p>
                      <div className="text-body-2 fw-6 text-secondary">
                        Mazharul Islam - Founder, Anyaprokash
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-2-pane"
            role="tabpanel"
            aria-labelledby="service-2"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/section/service-6.jpg"
                  alt="service"
                  src="/images/section/service-6.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">02</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Understand your Vision & Goals
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    We align with your vision to deliver solutions that genuinely reflect and support your unique goals.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" /> Tailored approaches 
                    designed around your unique needs.
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" /> Strategic insights
                    that transform your goals into measurable results.
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" /> Agile solutions 

                    that evolve with your shifting priorities.
                  </li>
                </ul>
                <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <img
                      alt="avatar"
                      src="/images/avatar/testimonial/Shashya-Prabartana.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_white">
                      "Our new website is excellent, and the support from the Spread Communications team has been consistent and reliable. They provide great service and peace of mind with their professional website management."
                    </p>
                    <div className="text-body-2 fw-6 text-secondary">
                      Head of Accounts, Shashya Prabartana 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-3-pane"
            role="tabpanel"
            aria-labelledby="service-3"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/section/service-7.jpg"
                  alt="service"
                  src="/images/section/service-7.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">03</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Our Proven Process
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    We make every step thorough, seamless, and strategically crafted to maximize your success.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" /> End-to-end solutions customized to fit your needs

                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Clear, transparent workflows that build trust
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Expertise you can rely on for timely, high-quality results
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Proven methodologies, validated by real client success stories
                  </li>
                </ul>
                <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <img
                      alt="avatar"
                      src="/images/avatar/testimonial/Waffle-Time.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_white">
                      "We are highly appreciative of the massive effort put into our promotion, influencer marketing, and social media strategy. Spread Communications' full-service marketing drive made a significant impact on our brand visibility."
                    </p>
                    <div className="text-body-2 fw-6 text-secondary">
                      Abrar Galib - Founder, Waffle Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-4-pane"
            role="tabpanel"
            aria-labelledby="service-4"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <img
                  className="lazyload"
                  data-src="/images/section/service-8.jpg"
                  alt="service"
                  src="/images/section/service-8.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">04</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Analyzing and Optimizing
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Ongoing optimization keeps your goals aligned and consistently surpasses expectations.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Actionable insights that empower informed, success-oriented decisions
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Agile strategies designed to refine, adapt, and enhance results continuously
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line icon_secondary" />
                    Agile strategies to refine and improve results
                  </li>
                </ul>
                <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <img
                      alt="avatar"
                      src="/images/avatar/testimonial/UBINIG.jpg"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_white">
                      "The professionalism and quality of service provided by Spread Communications in creating and maintaining our website are top-tier. We highly recommend them for their dependable web solutions"
                    </p>
                    <div className="text-body-2 fw-6 text-secondary">
                      Farhad Mazhar - Founder, UBINIG
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
