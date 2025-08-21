import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import BlogDetailsMarkdown from "@/components/otherPages/BlogDetailsMarkdown";
import Contact from "@/components/common/Contact";
import React from "react";
import { Link } from "react-router-dom";
import { getBlogPostMetadataById } from "@/data/blogPostsSimple";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

export default function BlogDetailsPage1() {
  let params = useParams();
  const id = params.id;

  const blog = getBlogPostMetadataById(id);

  if (!blog) {
    return (
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <h2>Blog post not found</h2>
            <p>The requested blog post could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  const metadata = {
    title: `${blog.title} || Advitex - Finance and Business Consulting`,
    description: blog.excerpt,
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header5 />
        <div className="page-title style-default v6">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
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
                  <li>
                    <Link to={`/blog`} className="link">
                      Blog
                    </Link>
                  </li>
                  <li>{blog.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <BlogDetailsMarkdown />
      </div>
      <Contact />
      <Footer5 nonHomepage={true} />
    </>
  );
}
