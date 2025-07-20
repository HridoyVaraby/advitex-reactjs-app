import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PortfolioSingle from "@/components/otherPages/PortfolioSingle";

import { allCaseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Single Prroject || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function SingleProjectPage() {
  let params = useParams();
  const id = params.id;

  const caseStudy =
    allCaseStudies.filter((p) => p.id == id)[0] || allCaseStudies[0];
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
                    {caseStudy.title.split(" ").slice(0, 4)} <br />
                    {caseStudy.title.split(" ").slice(4, 10)}
                    <br />
                    {caseStudy.title.split(" ").slice(10)}
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Our holistic approach combines a comprehensive suite of
                    integrated services and <br />
                    solutions to deliver maximum value and optimize your
                    operations.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Project Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <PortfolioSingle />
        <Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
