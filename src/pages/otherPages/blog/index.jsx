import { Link } from "react-router-dom";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/otherPages/Blogs";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
import React from "react";

export default function BlogPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default v6">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_25 letter-spacing-1">
                    Insights From Our Press
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Entrepreneurs and business leaders face barriers that can
                    restrain growth and profit. Understanding and <br />
                    implementing effective strategies is the key to overcoming
                    obstacles and promoting your business towards success.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Blogs />
      </div>
      <Footer1 parentClass="footer style-default has-border-top" />
    </>
  );
}
