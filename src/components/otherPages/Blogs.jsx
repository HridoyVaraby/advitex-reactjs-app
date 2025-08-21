import React, { useState, useMemo } from "react";
import BlogSidebar from "./BlogSidebar";
import { Link } from "react-router-dom";

import { blogPostsMetadata } from "@/data/blogPostsSimple";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Show 6 posts per page

  // Sort posts by date (newest first) and calculate pagination
  const sortedPosts = useMemo(() => {
    return [...blogPostsMetadata].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of blog section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    
    // Previous button
    items.push(
      <li key="prev">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
          className={currentPage === 1 ? 'disabled' : ''}
          style={currentPage === 1 ? { opacity: 0.5, pointerEvents: 'none' } : {}}
        >
          <i className="icon-angle-left-solid" />
        </a>
      </li>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first page
        i === totalPages || // Always show last page
        (i >= currentPage - 1 && i <= currentPage + 1) // Show current page and adjacent pages
      ) {
        items.push(
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              className={currentPage === i ? 'active' : ''}
            >
              {i}
            </a>
          </li>
        );
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        // Show ellipsis
        items.push(
          <li key={`ellipsis-${i}`}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}>
              ...
            </a>
          </li>
        );
      }
    }

    // Next button
    items.push(
      <li key="next">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
          className={currentPage === totalPages ? 'disabled' : ''}
          style={currentPage === totalPages ? { opacity: 0.5, pointerEvents: 'none' } : {}}
        >
          <i className="icon-angle-right-solid" />
        </a>
      </li>
    );

    return items;
  };

  return (
    <div className="section-blog-grid tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 left">
            <div className="tf-grid-layout md-col-2">
              {currentPosts.map((article) => (
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
                        <span className="link-black">
                          {article.category}
                        </span>
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
            
            {/* Pagination */}
            {totalPages > 1 && (
              <ul className="wg-pagination d-flex justify-content-center gap_12 mt_85">
                {renderPaginationItems()}
              </ul>
            )}
            
            {/* Show current page info */}
            <div className="text-center mt_20">
              <span className="text-body-3 text_mono-gray-5">
                Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, sortedPosts.length)} of {sortedPosts.length} posts
              </span>
            </div>
          </div>
          <div className="col-lg-4 right">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
