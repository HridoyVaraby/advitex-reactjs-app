import Contact from "@/components/common/Contact";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import RelatedProducts from "@/components/shop/RelatedProducts";
import ShopDescription from "@/components/shop/ShopDescription";
import ShopDetails from "@/components/shop/ShopDetails";
import { products } from "@/data/products";
import { Link, useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Product Details || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};
export default async function ProductDetailsPage() {
  let params = useParams();
  const id = params.id;

  const product = products.filter((p) => p.id == id)[0] || products[0];

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
                  <div className="text-display-2 mb_25 letter-spacing-1 mb_43">
                    Products Detail
                  </div>
                  <ul className="breadcrumb">
                    <li>
                      <Link to={`/`} className="link">
                        Home
                      </Link>
                    </li>
                    <li>Shop</li>
                    <li>{product.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /.page-title */}
        </div>
      </div>
      <div className="main-content style-1">
        <ShopDetails product={product} />
        <ShopDescription />
        <RelatedProducts />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
