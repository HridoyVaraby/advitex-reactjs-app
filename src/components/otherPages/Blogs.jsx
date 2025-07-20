import React from "react";
import BlogSidebar from "./BlogSidebar";
import { Link } from "react-router-dom";

import { blogArticles5 } from "@/data/blogs";
export default function Blogs() {
  return (
    <div className="section-blog-grid tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 left">
            <div className="tf-grid-layout md-col-2">
              {blogArticles5.map((article) => (
                <div key={article.id} className="blog-article-item hover-image">
                  <Link
                    to={`/single-post/${article.id}`}
                    className="article-thumb mb_25"
                  >
                    <img
                      className="lazyload"
                      data-src={article.imageSrc}
                      alt={article.alt}
                      src={article.imageSrc}
                      width={article.width}
                      height={article.height}
                    />
                  </Link>
                  <div className="article-content">
                    <ul className="blog-article-meta mb_15 d-flex align-items-center">
                      <li className="meta-item text-body-1">
                        <a href="#" className="link-black">
                          {article.category}
                        </a>
                      </li>
                      <li className="meta-item date text-body-1">
                        {article.date}
                      </li>
                    </ul>
                    <h5 className="title letter-spacing-2">
                      <Link to={`/single-post/${article.id}`} className="link">
                        {article.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            <ul className="wg-pagination d-flex justify-content-center gap_12 mt_85">
              <li>
                <a href="#">
                  <i className="icon-angle-left-solid" />
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-angle-right-solid" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 right">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
