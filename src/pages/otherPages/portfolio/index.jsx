import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import { Link } from "react-router-dom";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Portfolio from "@/components/otherPages/Portfolio";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Portfolio || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function PortfolioPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_18 letter-spacing-1">
                    A deep diving into <br />
                    the success of Advitex
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    A deep dive into Advitex's success reveals a compelling case
                    study of innovation, strategic partnerships, <br />
                    and customer commitment, leading to significant market
                    growth and industry recognition.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Case Studie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Portfolio />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8 pt-0" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
