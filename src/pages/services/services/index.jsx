import Challanges from "@/components/common/Challanges";
import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";

import Testimonials from "@/components/common/Testimonials";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import ServiceAdvantages from "@/components/otherPages/ServiceAdvantages";
import Services from "@/components/otherPages/Services";
import InsuranceServices from "@/components/homes/insurance-consulting/Services";
import { Link } from "react-router-dom";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Services || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Spread Communications - Purpose-driven smart marketing solutions",
};
export default function ServicesPage() {
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
                  <h1 className="text_black mb_19 letter-spacing-1">
                    End-to-end creative <br /> and digital services
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    From brand identity to digital execution, we offer everything you need <br /> to build, launch, and grow your brand.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <InsuranceServices />
        <ServiceAdvantages />
        <Services />
        <Challanges />
        <Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}
