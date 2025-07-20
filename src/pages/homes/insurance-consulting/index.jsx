import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/insurance-consulting/About";
import Approach from "@/components/homes/insurance-consulting/Approach";
import Blogs from "@/components/homes/insurance-consulting/Blogs";
import CaseStudies from "@/components/homes/insurance-consulting/CaseStudies";
import Cta from "@/components/homes/insurance-consulting/Cta";
import Facts from "@/components/homes/insurance-consulting/Facts";
import Faqs from "@/components/homes/insurance-consulting/Faqs";
import Hero from "@/components/homes/insurance-consulting/Hero";
import Services from "@/components/homes/insurance-consulting/Services";
import Testimonials from "@/components/homes/insurance-consulting/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Insurance Consulting || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function InsuranceConsultingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="primary-3">
        <div className="bg-color-1 counter-scroll">
          <Header4 />
          <Hero />
          <div className="main-content">
            <Services />
            <div className="tf-container tf-spacing-29">
              <div className="divider" />
            </div>
            <About />
            <div className="tf-container tf-spacing-30">
              <div className="divider" />
            </div>
            <Facts />
            <div className="tf-container tf-spacing-31">
              <div className="divider" />
            </div>
            <CaseStudies />
            <div className="tf-container tf-spacing-32">
              <div className="divider" />
            </div>
            <Approach />
            <div className="tf-container tf-spacing-33">
              <div className="divider" />
            </div>
            <Testimonials />
            <div className="tf-container tf-spacing-33">
              <div className="divider" />
            </div>
            <Blogs />
            <div className="tf-container tf-spacing-34">
              <div className="divider" />
            </div>
            <Faqs />
            <Cta />
            <Footer4 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
