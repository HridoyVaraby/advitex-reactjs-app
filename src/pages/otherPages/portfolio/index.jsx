import Contact from "@/components/common/Contact";
import Faqs from "@/components/homes/marketing-consulting/Faqs";
import { Link } from "react-router-dom";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Portfolio from "@/components/otherPages/Portfolio";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Case Study || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Spread Communications - Purpose-driven smart marketing solutions",
};
export default function PortfolioPage() {
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
                  <h1 className="text_black mb_18 letter-spacing-1">
                    A closer look at what makes <br />
                    Spread Communications successful
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                  Exploring Spread Communications’ journey uncovers a powerful blend of innovation, 
                  strategic alliances, and dedicated <br /> customer focus that has fueled remarkable 
                  market growth and earned industry acclaim.
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
        <Faqs />
        <Contact />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}
