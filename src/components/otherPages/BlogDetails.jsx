import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogCommentBox from "./BlogCommentBox";
import { useParams } from "react-router-dom";
import { getBlogPostById } from "@/data/blogPosts";

export default function BlogDetails() {
  const { id } = useParams();
  const blogPost = getBlogPostById(id);

  if (!blogPost) {
    return (
      <div className="section-sigle-post tf-spacing-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <h2>Blog post not found</h2>
              <p>The requested blog post could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-sigle-post tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="left">
              <div className="heading-single-post mx-auto mb_40">
                <ul className="blog-article-meta d-flex align-items-center mb_32">
                  <li className="meta-item text-body-1">
                    <a href="#" className="link-black">
                      {blogPost.category}
                    </a>
                  </li>
                  <li className="meta-item date text-body-1">
                    {blogPost.date}
                  </li>
                </ul>
                <div className="box-infor">
                  <div className="box-user d-flex gap_16 align-items-center">
                    <div className="avatar">
                      <img
                        alt="avatar"
                        src={blogPost.author.avatar}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="content">
                      <div className="sub-heading text_mono-dark-9">{blogPost.author.name}</div>
                      <span className="text-body-3 text_mono-gray-5">
                        {blogPost.author.role}
                      </span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="share item">
                      <span className="text-body-2 text_mono-dark-9">
                        Share
                      </span>
                      <div className="social d-flex gap_10">
                        <a href="#" className="text_mono-dark-9 link">
                          <i className="icon-facebook-f" />
                        </a>
                        <a href="#" className="text_mono-dark-9 link">
                          <i className="icon-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="wrap d-flex">
                      <a
                        href="#"
                        className="link copy item text-body-2 text_mono-dark-9"
                      >
                        <i className="icon-link-simple" />
                        Copy link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-post-main w-full mx-auto">
                <div className="thumbs-post-single rounded-24 overflow-hidden mb_112">
                  <img
                    className="lazyload"
                    data-src={blogPost.featuredImage}
                    alt={blogPost.title}
                    src={blogPost.featuredImage}
                    width={1147}
                    height={719}
                  />
                </div>
                <div className="single-post-content mb_102">
                  <h2 className="text_mono-dark-9 mb_43 title-sigle-post">
                    Introduction
                  </h2>
                  <p className="text-body-1 mb_44 text_mono-gray-6">
                    {blogPost.content.introduction}
                  </p>
                </div>

                {/* Dynamic Content Sections */}
                {blogPost.content.sections.map((section, index) => (
                  <div key={index} className="single-post-content mb_112">
                    <h2 className="mb_11 text_mono-dark-9 title-sigle-post mb_43">
                      {section.title}
                    </h2>
                    <p className="text-body-1 mb_44 text_mono-gray-6">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul>
                        {section.list.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <p className="text-body-1 text_mono-gray-6">
                              {item.includes(':') ? (
                                <>
                                  <span className="h6">{item.split(':')[0]}:</span>
                                  {item.split(':')[1]}
                                </>
                              ) : (
                                item
                              )}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Quote Section - Optional */}
                <div className="wrap-quote mb_96">
                  <div className="quote style-2">
                    <p className="h2 text">
                      " Ready to take your business to the next level? Contact
                      us today for a free consultation. "
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="single-post-content mb_90">
                  <h2 className="text_mono-dark-9 mb_43 title-sigle-post">
                    Conclusion
                  </h2>
                  <p className="text-body-1 text_mono-gray-6">
                    {blogPost.content.conclusion}
                  </p>
                </div>

                {/* Tags and Likes */}
                <div className="wrap-tag d-flex justify-content-between align-items-center flex-wrap gap-24">
                  <div className="wrap-popular-tag">
                    {blogPost.tags.map((tag, index) => (
                      <a key={index} href="#" className="popular-tag-item">
                        {tag}
                      </a>
                    ))}
                  </div>
                  <div className="wishlist-post-sigle d-flex align-items-center gap-16">
                    <i className="icon-heart-solid" />
                    <span className="text-body-1">{blogPost.likes} Like{blogPost.likes !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="reply-comment style-2">
                  <div className="reply-comment-heading mb_82">
                    <h2>{blogPost.comments} Comment{blogPost.comments !== 1 ? 's' : ''}</h2>
                  </div>
                  <div className="wrap-comment">
                    <div className="reply-comment-wrap">
                      <div className="reply-comment-item">
                        <div className="heading mb_15">
                          <div className="box-user">
                            <div className="avatar">
                              <img
                                alt="avatar"
                                src="/images/avatar/avatar-2.jpg"
                                width={119}
                                height={119}
                              />
                            </div>
                            <div className="content">
                              <h5>Kobbie Dao</h5>
                              <p className="text-body-1 text_mono-gray-5">
                                September 30, 2023 / 9:30 AM
                              </p>
                            </div>
                          </div>
                          <a href="#" className="tf-btn btn-primary2">
                            <span>Reply</span>
                            <span className="bg-effect" />
                          </a>
                        </div>
                        <div className="comment text-body-1 text_black">
                          As a web designer myself, I couldn't agree more with
                          the sentiment that great design should be felt and
                          remembered long after the screen is turned off.
                        </div>
                      </div>
                      <div className="reply-comment-item type-reply">
                        <div className="heading mb_35">
                          <div className="box-user">
                            <div className="avatar">
                              <img
                                alt="avatar"
                                src="/images/avatar/avatar-3.jpg"
                                width={119}
                                height={119}
                              />
                            </div>
                            <div className="content">
                              <h5 className="text_black">Zalatan</h5>
                              <p className="text-body-1 text_mono-gray-5">
                                September 30, 2023 / 9:30 AM
                              </p>
                            </div>
                          </div>
                          <a href="#" className="tf-btn btn-primary2">
                            <span>Reply</span>
                            <span className="bg-effect" />
                          </a>
                        </div>
                        <div className="comment text-body-1 text_black">
                          Aute mi ut suspendisse velit leo, vel risus ac. Amet
                          dui dignissim fermentum malesuada auctor volutpat,
                          vestibulum ipsum nulla.
                        </div>
                      </div>
                    </div>
                    <div className="reply-comment-wrap">
                      <div className="reply-comment-item">
                        <div className="heading mb_15">
                          <div className="box-user">
                            <div className="avatar">
                              <img
                                alt="avatar"
                                src="/images/avatar/avatar-4.jpg"
                                width={119}
                                height={119}
                              />
                            </div>
                            <div className="content">
                              <h5 className="text_black">Bellingham</h5>
                              <p className="text-body-1 text_mono-gray-5">
                                September 30, 2023 / 9:30 AM
                              </p>
                            </div>
                          </div>
                          <a href="#" className="tf-btn btn-primary2">
                            <span>Reply</span>
                            <span className="bg-effect" />
                          </a>
                        </div>
                        <div className="comment text-body-1 text_black">
                          Aute mi ut suspendisse velit leo, vel risus ac. Amet
                          dui dignissim fermentum malesuada auctor volutpat,
                          vestibulum ipsum nulla.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leave-comment">
                    <div className="heading-title mb_56">
                      <h2 className="mb_18">Leave a Reply</h2>
                      <p className="text-body-1 text_mono-gray letter-spacing-1">
                        Your email address will not be published. Require field
                        are marked <span>*</span>
                      </p>
                    </div>
                    <BlogCommentBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}