import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Blogs from "@/components/homes/finance-advisor/Blogs";
import CaseStudies from "@/components/homes/finance-advisor/CaseStudies";
import Choices from "@/components/homes/finance-advisor/Choices";
import Contact from "@/components/homes/finance-advisor/Contact";
import Faq from "@/components/homes/finance-advisor/Faq";
import Features from "@/components/homes/finance-advisor/Features";
import Hero from "@/components/homes/finance-advisor/Hero";
import Services from "@/components/homes/finance-advisor/Services";
import Team from "@/components/homes/finance-advisor/Team";
import Testimonials from "@/components/homes/finance-advisor/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Finance Advisor || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function FinanceAdvisorPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="primary-2">
        <div className="bg-color-primary">
          <Header3 />
          <Hero />
        </div>
        <div className="main-content">
          <Services />
          <Team />
          <div className="bg-mono-gray-1">
            <Features />
            <Choices />
            <CaseStudies />
          </div>
          <div className="bg-primary-fa-green">
            <Blogs />
            <Testimonials />
          </div>
          <Faq />
          <Contact />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
