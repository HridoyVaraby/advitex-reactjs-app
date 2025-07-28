import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Testimonials from "@/components/common/Testimonials";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import About from "@/components/otherPages/About";
import Process from "@/components/otherPages/Process";
import Team from "@/components/otherPages/Team";
import Features2 from "@/components/homes/marketing-consulting/Features2";
import Figures from "@/components/homes/marketing-consulting/Figures";
import Features from "@/components/homes/marketing-consulting/Features";
import FaqsMarketing from "@/components/homes/marketing-consulting/Faqs";
import Banner from "@/components/homes/marketing-consulting/Banner";
import React from "react";
import { Link } from "react-router-dom";
import OdometerComponent from "@/components/common/OdometerComponent";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "About || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Spread Communications - Purpose-driven smart marketing solutions",
};

// Custom About component with updated content
function CustomAbout() {
  return (
    <div className="section-about style-1" style={{ paddingTop: '100px' }}>
      <div className="tf-container-2">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <div className="heading-section gap_12">
                <div className="heading-tag d-flex gap_12 mb_20 text_mono-dark-8 fw-5">
                  <div className="icon">
                    <i className="icon-star" />
                  </div>
                  <p className="text-body-3">About Us</p>
                </div>
                <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
                  Engage. Inspire. <span className="text-gradient">Grow.</span>
                </h2>
              </div>
              <div className="content">
                <p
                  className="text-body-1 mb_40 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  Spread Communications is a creative branding and digital marketing agency specializing in brand strategy, launches, content creation, and strategic promotions. We help businesses grow by crafting bold identities and delivering campaigns that leave a lasting impact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right position-relative">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src="/images/section/section-about-2.jpg"
                  alt="section-about"
                  src="/images/section/section-about-2.jpg"
                  width={693}
                  height={410}
                />
              </div>
              <div className="highlight scroll-tranform" data-distance="20%">
                <div className="icon mb_29">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20696 20.2929C9.59748 20.6834 9.59748 21.3166 9.20696 21.7071C8.81643 22.0976 8.18327 22.0976 7.79274 21.7071L4.49985 18.4142C3.7188 17.6332 3.7188 16.3668 4.49985 15.5858L7.79274 12.2929C8.18327 11.9024 8.81643 11.9024 9.20696 12.2929C9.59748 12.6834 9.59748 13.3166 9.20696 13.7071L6.91406 16L18.9998 16C19.5521 16 19.9998 16.4477 19.9998 17C19.9998 17.5523 19.5521 18 18.9998 18L6.91406 18L9.20696 20.2929Z"
                      fill="white"
                    />
                    <path
                      d="M5 6C4.44771 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8L17.0858 8L14.7929 10.2929C14.4024 10.6834 14.4024 11.3166 14.7929 11.7071C15.1834 12.0976 15.8166 12.0976 16.2071 11.7071L19.5 8.41421C20.281 7.63316 20.281 6.36683 19.5 5.58579L16.2071 2.29289C15.8166 1.90237 15.1834 1.90237 14.7929 2.29289C14.4024 2.68342 14.4024 3.31658 14.7929 3.70711L17.0858 6L5 6Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="text-body-3 fw-6 total mb_2">Total Sales</div>
                  <div className="counter-item style-1 flex-column align-items-start mb_6">
                    <div className="counter-number">
                      <h2 className="odometer fw-6">
                        <OdometerComponent max={30} />
                      </h2>
                      <span className="sub fw-6">k</span>
                      <span className="sub fw-6">+</span>
                    </div>
                  </div>
                  <p className="text-body-3 fw-6">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7L8 2L13 7"
                        stroke="#83BF6E"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14V2"
                        stroke="#83BF6E"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>25.8%</span> this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header5 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_16 letter-spacing-1">
                    We Build Legacies.
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Not just campaigns or logos — we craft meaningful brands that stand the test of time.<br />
                    Through strategic creativity, powerful storytelling, and impactful execution, <br />
                    we help your brand leave a lasting mark.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        {/*<About />*/}
        <CustomAbout />
        <div style={{ marginTop: '80px' }}>
          <Features2 />
        </div>
        <Figures />
        <Features />
        <div style={{ marginTop: '-140px' }}>
          <Banner />
        </div>
        <FaqsMarketing />
        {/*<Team />*/}
        {/*<Process />*/}
        {/*<Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />*/}
        <Contact />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}
