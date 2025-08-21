import React, { useState, useMemo } from "react";
import BlogSidebar from "./BlogSidebar";
import { Link } from "react-router-dom";

import { blogPostsMetadata } from "@/data/blogPostsSimple";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const postsPerPage = 6; // Show 6 posts per page

  // Filter and sort posts based on search criteria
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = [...blogPostsMetadata];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchQuery, selectedCategory, selectedTag]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(""); // Clear other filters when searching
    setSelectedTag("");
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setSearchQuery(""); // Clear search when filtering by category
    setSelectedTag("");
  };

  // Handle tag filter
  const handleTagFilter = (tag) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
    setSearchQuery(""); // Clear search when filtering by tag
    setSelectedCategory("");
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTag("");
  };

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
            {/* Search Results Info */}
            {(searchQuery || selectedCategory || selectedTag) && (
              <div className="search-results-info mb_30">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb_5">
                      {filteredAndSortedPosts.length} result{filteredAndSortedPosts.length !== 1 ? 's' : ''} found
                    </h6>
                    {searchQuery && (
                      <p className="text-body-3 text_mono-gray-5 mb_5">
                        Search: "{searchQuery}"
                      </p>
                    )}
                    {selectedCategory && (
                      <p className="text-body-3 text_mono-gray-5 mb_5">
                        Category: {selectedCategory}
                      </p>
                    )}
                    {selectedTag && (
                      <p className="text-body-3 text_mono-gray-5 mb_5">
                        Tag: {selectedTag}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={clearFilters}
                    className="tf-btn btn-outline-primary btn-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {/* No Results Message */}
            {filteredAndSortedPosts.length === 0 ? (
              <div className="no-results text-center py_50">
                <h5 className="mb_20">No posts found</h5>
                <p className="text-body-1 text_mono-gray-6 mb_30">
                  Try adjusting your search terms or clearing the filters.
                </p>
                <button 
                  onClick={clearFilters}
                  className="tf-btn btn-primary"
                >
                  Show All Posts
                </button>
              </div>
            ) : (
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
            )}
            
            {/* Pagination */}
            {totalPages > 1 && filteredAndSortedPosts.length > 0 && (
              <ul className="wg-pagination d-flex justify-content-center gap_12 mt_85">
                {renderPaginationItems()}
              </ul>
            )}
            
            {/* Show current page info */}
            {filteredAndSortedPosts.length > 0 && (
              <div className="text-center mt_20">
                <span className="text-body-3 text_mono-gray-5">
                  Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredAndSortedPosts.length)} of {filteredAndSortedPosts.length} posts
                </span>
              </div>
            )}
          </div>
          <div className="col-lg-4 right">
            <BlogSidebar 
              onSearch={handleSearch}
              onCategoryFilter={handleCategoryFilter}
              onTagFilter={handleTagFilter}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
