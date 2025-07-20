import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import About from "@/components/homes/marketing-consulting/About";
import Banner from "@/components/homes/marketing-consulting/Banner";
import Blogs from "@/components/homes/marketing-consulting/Blogs";
import Brands from "@/components/homes/marketing-consulting/Brands";
import CaseStudies from "@/components/homes/marketing-consulting/CaseStudies";
import Cta from "@/components/homes/marketing-consulting/Cta";
import Faqs from "@/components/homes/marketing-consulting/Faqs";
import Features from "@/components/homes/marketing-consulting/Features";
import Features2 from "@/components/homes/marketing-consulting/Features2";
import Figures from "@/components/homes/marketing-consulting/Figures";
import Hero from "@/components/homes/marketing-consulting/Hero";
import Services from "@/components/homes/marketing-consulting/Services";
import Testimonials from "@/components/homes/marketing-consulting/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Marketing Consulting || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function MarketingConsultionPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="primary-4">
        <div id="wrapper" className="counter-scroll">
          <Header5 />
          <Hero />
          <div className="main-content">
            <Brands />
            <Services />
            <Features />
            <Features2 />
            <Figures />
            <CaseStudies />
            <Testimonials />
            <About />
            <Banner />
            <Faqs />
            <div className="wrap-section">
              <Blogs />
              <Cta />
            </div>
            <Footer5 />
          </div>
        </div>
      </div>
    </>
  );
}
