import React from "react";
import BlogSidebar from "./BlogSidebar";
import { Link } from "react-router-dom";

import { allBlogPosts } from "@/data/blogPosts";
export default function Blogs() {
  return (
    <div className="section-blog-grid tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 left">
            <div className="tf-grid-layout md-col-2">
              {allBlogPosts.map((article) => (
                <div key={article.id} className="blog-article-item hover-image">
                  <Link
                    to={`/single-post/${article.id}`}
                    className="article-thumb mb_25"
                  >
                    <img
                      className="lazyload"
                      data-src={article.featuredImage}
                      alt={article.title}
                      src={article.featuredImage}
                      width={550}
                      height={380}
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
                    <p className="text-body-1 text_mono-gray-6 mt_10">
                      {article.excerpt}
                    </p>
                    <div className="blog-meta mt_15 d-flex align-items-center gap_10">
                      <span className="text-body-3 text_mono-gray-5">
                        {article.readTime}
                      </span>
                      <span className="text-body-3 text_mono-gray-5">
                        {article.comments} comment{article.comments !== 1 ? 's' : ''}
                      </span>
                    </div>
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
