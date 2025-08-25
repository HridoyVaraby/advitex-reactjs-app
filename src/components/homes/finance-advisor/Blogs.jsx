import { Link } from "react-router-dom";
import { useMemo } from "react";

import { blogPostsMetadata } from "@/data/blogPostsSimple";

export default function Blogs() {
  // Get the latest posts for the finance advisor page
  const latestPosts = useMemo(() => {
    return [...blogPostsMetadata]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, []);

  const recentPosts = useMemo(() => {
    return [...blogPostsMetadata]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(3, 6);
  }, []);
  return (
    <div className="section-blog style-2 tf-spacing-23">
      <div className="tf-container-2">
        <div className="heading-section mb_59">
          <div className="heading-tag style-2 v2 text_mono-gray-5 text-body-3 mb_12">
            BLOGS
          </div>
          <h2 className="heading-title text_white fw-6 split-text effect-right">
            Helpful insights and tips for your <br />
            financial success journey
          </h2>
        </div>
        <div className="wrapper">
          {latestPosts.map((article, index) => (
            <div
              key={article.id}
              className="blog-article-item style-2 hover-image wow animate__fadeInLeft animate__animated"
              data-wow-delay={`${index * 0.1}s`}
            >
              <Link to={`/single-post/${article.id}`} className="article-thumb">
                <img
                  className="lazyload"
                  data-src={article.featuredImage}
                  alt={article.title}
                  src={article.featuredImage}
                  width={621}
                  height={621}
                />
              </Link>
              <div className="article-content">
                <p className="text-body-2 text_mono-gray-3">{article.date}</p>
                <h6 className="title fw-5 letter-spacing-2">
                  <Link
                    to={`/single-post/${article.id}`}
                    className="text_white"
                  >
                    {article.title}
                  </Link>
                </h6>
              </div>
            </div>
          ))}
          <div className="right">
            {recentPosts.map((post, index) => (
              <div
                key={post.id}
                className="relatest-post-item style-1 hover-image-2 wow animate__fadeInRight animate__animated"
                data-wow-delay={`${index * 0.1}s`}
              >
                <Link
                  to={`/single-post/${post.id}`}
                  className="image-rotate image mt-0"
                >
                  <img
                    alt={post.title}
                    src={post.featuredImage}
                    width={120}
                    height={120}
                  />
                </Link>
                <div className="content">
                  <p className="text-body-2 text_primary-fa-yellow mb_3">
                    {post.date}
                  </p>
                  <div className="sub-heading fw-5 mb_12 text_primary-fa-yellow">
                    <Link
                      to={`/single-post/${post.id}`}
                      className="link line-clamp-3"
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to={`/blog`}
              className="link btn_link text-body-1 text_white text-decoration-underline wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              View all stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
