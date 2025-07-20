import React from "react";
import BlogSidebar from "./BlogSidebar";

import BlogCommentBox from "./BlogCommentBox";
export default function BlogDetails() {
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
                      Design Trends
                    </a>
                  </li>
                  <li className="meta-item date text-body-1">
                    August 23, 2024
                  </li>
                </ul>
                <div className="box-infor">
                  <div className="box-user d-flex gap_16 align-items-center">
                    <div className="avatar">
                      <img
                        alt="avatar"
                        src="/images/avatar/avatar-1.jpg"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="content">
                      <div className="sub-heading text_mono-dark-9">Amoro</div>
                      <span className="text-body-3 text_mono-gray-5">
                        Written by Editor
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
                    data-src="/images/blog/single-post-1.jpg"
                    alt="thumbs"
                    src="/images/blog/single-post-1.jpg"
                    width={1147}
                    height={719}
                  />
                </div>
                <div className="single-post-content mb_102">
                  <h2 className="text_mono-dark-9 mb_43 title-sigle-post">
                    Introduction
                  </h2>
                  <p className="text-body-1 mb_44 text_mono-gray-6">
                    It’s not merely about In today's rapidly evolving digital
                    landscape, businesses are faced with a myriad of challenges
                    and opportunities. From staying ahead of technological
                    advancements to understanding consumer behavior, the
                    complexity of the modern business environment can be
                    overwhelming. This is where business consulting comes in. By
                    providing expert guidance and tailored strategies, business
                    consultants can help companies navigate the digital maze and
                    achieve their goals.
                  </p>
                </div>
                <div className="single-post-content mb_112">
                  <h2 className="mb_11 text_mono-dark-9 title-sigle-post mb_43">
                    The role of business consulting in the digital age
                  </h2>
                  <ul>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Digital Transformation:</span>{" "}
                        Consultants can help businesses develop a comprehensive
                        digital transformation strategy, identifying areas for
                        improvement and implementing new technologies to
                        streamline operations.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Data Analytics:</span> Leveraging
                        advanced data analytics techniques, consultants can
                        uncover valuable insights into customer behavior, market
                        trends, and operational efficiency.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Cybersecurity:</span> In an
                        increasingly interconnected world, cybersecurity is
                        paramount. Consultants can assess a company's security
                        posture and recommend measures to protect sensitive
                        data.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Cloud Computing:</span>{" "}
                        Transitioning to the cloud can offer numerous benefits,
                        but it also requires careful planning and execution.
                        Consultants can guide businesses through the cloud
                        migration process.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">E-commerce:</span> For businesses
                        looking to expand their online presence, consultants can
                        provide expertise in e-commerce strategy, website
                        development, and digital marketing.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="wrap-quote mb_96">
                  <div className="rounded-24 overflow-hidden mb_29 thumbs-post-single-2">
                    <img
                      className="lazyload"
                      data-src="/images/blog/single-post-2.jpg"
                      alt="thumbs"
                      src="/images/blog/single-post-2.jpg"
                      width={1147}
                      height={360}
                    />
                  </div>
                  <div className="quote style-2">
                    <p className="h2 text">
                      " Ready to take your business to the next level? Contact
                      us today for a free consultation. ”
                    </p>
                  </div>
                </div>
                <div className="single-post-content mb_40">
                  <h2 className="mb_11 text_mono-dark-9 title-sigle-post mb_43">
                    Key Benefits of Working with a Business <br />
                    Consultant
                  </h2>
                  <ul>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Objectivity:</span> Consultants
                        bring an unbiased perspective to your business, allowing
                        them to identify opportunities and challenges that may
                        be overlooked by internal teams.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Expertise:</span> Consultants
                        possess a deep understanding of industry best practices
                        and emerging trends, enabling them to provide tailored
                        recommendations.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Efficiency:</span> By leveraging
                        their knowledge and experience, consultants can help
                        businesses achieve their goals more quickly and
                        efficiently.
                      </p>
                    </li>
                    <li>
                      <p className="text-body-1 text_mono-gray-6">
                        <span className="h6">Cost-Effectiveness:</span> While
                        consulting services can involve an upfront investment,
                        the long-term benefits often outweigh the costs.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="single-post-content mb_90">
                  <h2 className="text_mono-dark-9 mb_43 title-sigle-post">
                    Conclusion
                  </h2>
                  <p className="text-body-1 text_mono-gray-6">
                    In conclusion, business consulting can be a valuable asset
                    for companies seeking to thrive in the digital age. By
                    providing <br />
                    expert guidance and tailored strategies, consultants can
                    help businesses overcome challenges, seize opportunities,
                    and <br />
                    achieve long-term success.
                  </p>
                </div>
                <div className="wrap-tag d-flex justify-content-between align-items-center flex-wrap gap-24">
                  <div className="wrap-popular-tag">
                    <a href="#" className="popular-tag-item">
                      {" "}
                      Consulting{" "}
                    </a>
                    <a href="#" className="popular-tag-item">
                      {" "}
                      Business{" "}
                    </a>
                    <a href="#" className="popular-tag-item">
                      Business Consulting
                    </a>
                  </div>
                  <div className="wishlist-post-sigle d-flex align-items-center gap-16">
                    <i className="icon-heart-solid" />
                    <span className="text-body-1">13 Like</span>
                  </div>
                </div>
                <div className="reply-comment style-2">
                  <div className="reply-comment-heading mb_82">
                    <h2>3 Comments</h2>
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
