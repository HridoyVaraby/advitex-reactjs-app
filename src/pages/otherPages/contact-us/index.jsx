import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Contact from "@/components/otherPages/Contact";
import OfficeLocations from "@/components/otherPages/OfficeLocations";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Contact Us || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Spread Communications - Purpose-driven smart marketing solutions",
};
export default function ContactUsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header5 />

        <Contact />
      </div>
      <div className="main-content style-1">
        <OfficeLocations />
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}
