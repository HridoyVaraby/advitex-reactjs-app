import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/finance-consulting/About";
import Blogs from "@/components/homes/finance-consulting/Blogs";
import CaseStudies from "@/components/homes/finance-consulting/CaseStudies";
import Cta from "@/components/homes/finance-consulting/Cta";
import Faqs from "@/components/homes/finance-consulting/Faqs";
import Features from "@/components/homes/finance-consulting/Features";
import Hero from "@/components/homes/finance-consulting/Hero";
import MarqueeSlide from "@/components/homes/finance-consulting/MarqueeSlide";
import Process from "@/components/homes/finance-consulting/Process";
import Services from "@/components/homes/finance-consulting/Services";
import Testimonials from "@/components/homes/finance-consulting/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Finance Consulting || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function FinanceCOnsultionPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="primary-1">
        <Header2 />
        <Hero />{" "}
        <div className="main-content">
          <Services />
          <About />
          <Testimonials />
          <Features />
          <MarqueeSlide />
          <CaseStudies />
          <Process />
          <Cta />
          <Blogs />
          <Faqs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
