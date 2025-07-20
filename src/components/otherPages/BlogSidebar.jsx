import React from "react";
import { Link } from "react-router-dom";

import { relatedPosts } from "@/data/blogs";
export default function BlogSidebar() {
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
        {relatedPosts.map((post) => (
          <div
            key={post.id}
            className="relatest-post-item style-default hover-image-2"
          >
            <Link to={`/single-post/${post.id}`} className="image-rotate image">
              <img
                alt=""
                src={post.imageSrc}
                width={post.width}
                height={post.height}
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
                  <a href="#" className="link-black">
                    {post.category}
                  </a>
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
          <div className="item">
            <a href="#" className="text-body-1 text_mono-gray-6">
              Business Consulting
            </a>
            <span className="text-body-3 text_mono-gray-6">4</span>
          </div>
          <div className="item">
            <a href="#" className="text-body-1 text_mono-gray-6">
              Corporate
            </a>
            <span className="text-body-3 text_mono-gray-6">6</span>
          </div>
          <div className="item">
            <a href="#" className="text-body-1 text_mono-gray-6">
              IT Solutions
            </a>
            <span className="text-body-3 text_mono-gray-6">2</span>
          </div>
          <div className="item">
            <a href="#" className="text-body-1 text_mono-gray-6">
              Marketing
            </a>
            <span className="text-body-3 text_mono-gray-6">8</span>
          </div>
          <div className="item">
            <a href="#" className="text-body-1 text_mono-gray-6">
              Startup Consulting
            </a>
            <span className="text-body-3 text_mono-gray-6">5</span>
          </div>
        </div>
      </div>
      <div>
        <h6 className="sidebar-title mb_18 -mt_7">Popular tag</h6>
        <div className="wrap-popular-tag">
          <a href="#" className="popular-tag-item link">
            {" "}
            Analysis{" "}
          </a>
          <a href="#" className="popular-tag-item link">
            {" "}
            Consulting{" "}
          </a>
          <a href="#" className="popular-tag-item link">
            {" "}
            Business{" "}
          </a>
          <a href="#" className="popular-tag-item link">
            {" "}
            Data{" "}
          </a>
          <a href="#" className="popular-tag-item link">
            Business Consulting
          </a>
          <a href="#" className="popular-tag-item link">
            {" "}
            Marketing{" "}
          </a>
          <a href="#" className="popular-tag-item link">
            {" "}
            Solutions{" "}
          </a>
        </div>
      </div>
      <div>
        <h6 className="sidebar-title mb_16">Subscribe newsletter</h6>
        <form className="form-newsletter" onSubmit={(e) => e.preventDefault()}>
          <p className="text-body-2 mb_14">
            Sign up to receive notifications about the latest news and events
            from us!
          </p>
          <div>
            <fieldset className="mb_14">
              <input
                type="email"
                className="tb-my-input style-2"
                name="email"
                placeholder="Enter text"
                required
              />
            </fieldset>
          </div>
          <button
            name="submit"
            type="submit"
            className="tf-btn w-full btn-submit-comment btn-primary2"
          >
            <span>Subcribe</span>
            <span className="bg-effect" />
          </button>
        </form>
      </div>
    </div>
  );
}
