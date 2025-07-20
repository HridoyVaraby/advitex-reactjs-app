import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import BlogDetails from "@/components/otherPages/BlogDetails";
import React from "react";
import { Link } from "react-router-dom";
import { allBlogs } from "@/data/blogs";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Single Post || Advitex - Finance and Business Consulting Reactjs Template",
  description: "Advitex - Finance and Business Consulting Reactjs Template",
};

export default function BlogDetailsPage1() {
  let params = useParams();
  const id = params.id;

  const blog = allBlogs.filter((p) => p.id == id)[0] || allBlogs[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default v2">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_53">
                  <h1 className="text_black mb_25 letter-spacing-1">
                    {blog.title}
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
                  <li>Single Post</li>
                  <li>{blog.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <BlogDetails />
      </div>
      <Footer1 parentClass="footer style-default has-border-top" />
    </>
  );
}
