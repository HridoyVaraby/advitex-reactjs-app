import React from "react";
import { Link } from "react-router-dom";
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import TestimonialsComponent from "@/components/homes/insurance-consulting/Testimonials";
import BrandGrid from "@/components/otherPages/BrandGrid";
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
                    Client Success Stories
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Discover how we've helped businesses transform their brand presence<br />
                    and achieve remarkable growth through strategic marketing solutions.<br />
                    Real stories from real clients who trusted us with their vision.
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
      <div className="main-content style-1">
        <TestimonialsComponent />
        <BrandGrid />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}