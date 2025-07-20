import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Pricing from "@/components/common/Pricing";

import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { Link } from "react-router-dom";
import ServiceDetails from "@/components/otherPages/ServiceDetails";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Service Details || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
import React from "react";
import { allServices } from "@/data/services";
import { useParams } from "react-router-dom";

export default async function ServiceDetailsPage() {
  let params = useParams();
  const id = params.id;

  const service = allServices.filter((p) => p.id == id)[0] || allServices[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_43">
                  <h1
                    className="text_black letter-spacing-1"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  ></h1>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Services</li>
                  <li dangerouslySetInnerHTML={{ __html: service.title }}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <ServiceDetails />
        <Pricing parentClass="section tf-spacing-13" />
        <Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
