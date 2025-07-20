import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/otherPages/Contact";
import OfficeLocations from "@/components/otherPages/OfficeLocations";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Contact Us || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function ContactUsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />

        <Contact />
      </div>
      <div className="main-content style-1">
        <OfficeLocations />
      </div>
      <Footer1 />
    </>
  );
}
