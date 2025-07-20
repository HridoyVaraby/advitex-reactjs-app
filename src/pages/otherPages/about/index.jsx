import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/About";
import Process from "@/components/otherPages/Process";
import Team from "@/components/otherPages/Team";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "About || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function AboutPage() {
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
                  <h1 className="text_black mb_16 letter-spacing-1">
                    Play a key role in <br />
                    business advancement
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Promote innovation by introducing breakthrough ideas and
                    technologies <br />
                    to improve business and customer experience.
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
        <About />
        <Team />
        <Process />
        <Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
