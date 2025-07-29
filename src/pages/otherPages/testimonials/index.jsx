import React from "react";
import { Link } from "react-router-dom";
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import TestimonialsComponent from "@/components/common/Testimonials";
import BrandGrid from "@/components/otherPages/BrandGrid";
import Cta from "@/components/homes/insurance-consulting/Cta";
import Blogs from "@/components/homes/marketing-consulting/Blogs2";
import Contact from "@/components/common/Contact";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Testimonials || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Spread Communications - Purpose-driven smart marketing solutions",
};

export default function TestimonialsPage() {
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
                    A closer look at what <br /> our clients say
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Hear directly from our clients about their experiences <br /> 
                    and the impact we’ve made on their brands.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Testimonials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1 testimonials-page">
        <TestimonialsComponent />
        <BrandGrid />
        <Cta />
        <Blogs />
        <Contact />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}