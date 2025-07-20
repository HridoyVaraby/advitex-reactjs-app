import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import { Link } from "react-router-dom";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Team2 from "@/components/otherPages/Team2";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Team || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function TeamPage() {
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
                  <h1 className="text_black mb_17 letter-spacing-1">
                    Get To Know Our Amazing Team
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    With a passion for innovation and a dedication to
                    excellence, we bring diverse <br />
                    expertise to every project we undertake.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Team2 />

        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
