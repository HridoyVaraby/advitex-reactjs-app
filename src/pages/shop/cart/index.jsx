import Contact from "@/components/common/Contact";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { Link } from "react-router-dom";
import ShopCart from "@/components/shop/ShopCart";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Cart || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default function CartPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default v4">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <div className="text-display-2 mb_44 letter-spacing-1">
                    Cart
                  </div>
                  <ul className="breadcrumb">
                    <li>
                      <Link to={`/`} className="link">
                        Home
                      </Link>
                    </li>
                    <li>Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <ShopCart />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
