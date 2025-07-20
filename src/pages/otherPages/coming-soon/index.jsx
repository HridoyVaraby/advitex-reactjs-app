import React from "react";
import { Link } from "react-router-dom";

import Newsletter from "@/components/otherPages/Newsletter";
import CountdownTimer from "@/components/common/Countdown";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Comming Soon || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function ComingSoonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header overflow-hidden">
        {/* header */}
        <header id="header-main" className="header style-default">
          <div className="header-inner">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="header-inner-wrap justify-content-end">
                    <div className="header-right d-flex align-items-center">
                      <Link to={`/about`} className="tf-btn btn-white">
                        <span>More Info</span>
                        <span className="bg-effect" />
                      </Link>
                      <Link to={`/contact-us`} className="tf-btn">
                        <span>Contact Us</span>
                        <span className="bg-effect" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* /header */}
        {/* .page-title */}
        <div className="page-title style-default v3">
          <div className="coming-soon">
            <div className="contnet">
              <div className="tf-countdown-lg">
                <div
                  className="js-countdown"
                  data-timer={102738}
                  data-labels="Days,Hours,Minute,Second"
                >
                  <CountdownTimer style={2} />
                </div>
              </div>
              <h2 className="mb_21">Before we unveil our new website.</h2>
              <p className="sub-heading text_mono-gray-7">
                Is part of innovation. We are on the verge of launching a
                revolutionary foundation that revolutionize the industry. <br />
                Join us when we pave the way for the future.
              </p>
              <Newsletter />
              <ul className="social d-flex gap_8 justify-content-center">
                <li className="text_primary">
                  <a href="#" className="link-black icon-twitter-x" />
                </li>
                <li className="text_primary">
                  <a href="#" className="link-black icon-facebook-f" />
                </li>
                <li className="text_primary">
                  <a href="#" className="link-black icon-github" />
                </li>
                <li className="text_primary">
                  <a href="#" className="link-black icon-instagram" />
                </li>
              </ul>
            </div>
            <div className="item position-absolute">
              <img
                alt="shape"
                src="/images/item/shape-5.png"
                width={1105}
                height={720}
              />
            </div>
          </div>
        </div>
        {/* /.page-title */}
      </div>
    </>
  );
}
