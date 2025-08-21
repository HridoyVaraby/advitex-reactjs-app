import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { blogPostsMetadata } from "@/data/blogPostsSimple";

export default function BlogSidebar() {
  // Get recent posts (latest 4 posts)
  const recentPosts = useMemo(() => {
    return [...blogPostsMetadata]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  }, []);

  // Get categories with post counts
  const categories = useMemo(() => {
    const categoryCount = {};
    blogPostsMetadata.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    });
    return Object.entries(categoryCount).map(([name, count]) => ({ name, count }));
  }, []);

  // Get popular tags
  const popularTags = useMemo(() => {
    const tagCount = {};
    blogPostsMetadata.forEach(post => {
      post.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 8)
      .map(([tag]) => tag);
  }, []);
  return (
    <div className="sidebar">
      <div>
        <h6 className="sidebar-title mb_21">Search</h6>
        <form
          className="form-search style-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="text">
            <input
              type="text"
              placeholder="Search"
              className="style-2"
              name="search"
              tabIndex={0}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <button className="" type="submit">
            <i className="icon-search-solid" />
          </button>
        </form>
      </div>
      <div>
        <h6 className="sidebar-title mb_13">Recent posts</h6>
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="relatest-post-item style-default hover-image-2"
          >
            <Link to={`/single-post/${post.id}`} className="image-rotate image">
              <img
                alt={post.title}
                src={post.featuredImage}
                width={120}
                height={120}
              />
            </Link>
            <div className="content">
              <div className="text-body-1 mb_12">
                <Link to={`/single-post/${post.id}`} className="link">
                  {post.title}
                </Link>
              </div>
              <ul className="blog-article-meta d-flex align-items-center">
                <li className="meta-item text-body-3">
                  <span className="link-black">
                    {post.category}
                  </span>
                </li>
                <li className="meta-item date text-body-3">{post.date}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h6 className="sidebar-title mb_18">Category</h6>
        <div className="sidebar-categories">
          {categories.map((category) => (
            <div key={category.name} className="item">
              <a href="#" className="text-body-1 text_mono-gray-6">
                {category.name}
              </a>
              <span className="text-body-3 text_mono-gray-6">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h6 className="sidebar-title mb_18 -mt_7">Popular tag</h6>
        <div className="wrap-popular-tag">
          {popularTags.map((tag) => (
            <a href="#" key={tag} className="popular-tag-item link">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
