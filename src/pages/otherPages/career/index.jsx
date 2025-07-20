import Contact from "@/components/common/Contact";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Benefits from "@/components/otherPages/Benefits";
import Oppertunities from "@/components/otherPages/Oppertunities";
import { Link } from "react-router-dom";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Career || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function CareerPage() {
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
                  <h1 className="text_black mb_18 letter-spacing-1">Career</h1>
                  <p className="sub-heading text_mono-gray-7">
                    A typical day is a mix of strategic thinking,
                    problem-solving, and client interaction. The work is
                    demanding <br />
                    but rewarding, offering opportunities to tackle complex
                    challenges and drive positive change.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Career</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Benefits />
        <Oppertunities />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
