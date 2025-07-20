import CommentBox from "./CommentBox";
import { useState } from "react";
export default function ShopDescription() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="tf-container">
      <div className="widget-tabs style-1">
        <ul className="widget-menu-tab overflow-x-auto">
          <li
            className={`item-title h5 ${activeTab == 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            <span className="text-whitespace">Description</span>
          </li>
          <li
            className={`item-title h5 ${activeTab == 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            <span className="text-whitespace">Reviews (3)</span>
          </li>
          <li
            className={`item-title h5 ${activeTab == 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            <span className="text-whitespace">Additinal Information</span>
          </li>
        </ul>
        <div className="widget-content-tab">
          <div
            className={`widget-content-inner ${
              activeTab == 1 ? "active" : ""
            } `}
          >
            <div className="tab-description d-grid gap_29">
              <p className="text-body-1 text_mono-gray-8">
                The 24-inch iMac M3 2023 has an impressively slim design.
                Despite being slim, the iMac is also equipped with a diverse
                connection port system such as Thunderbolt. In terms of color,
                the 24-inch iMac M3 2023 impresses with seven different color
                versions for users to choose from: Blue, Green, Pink, Silver,
                Yellow, Orange and Purple.
              </p>
              <p className="text-body-1 text_mono-gray-8">
                The iMac M3 2023 is equipped with a 24-inch screen with thin
                screen borders for a wide display space. The screen is equipped
                with an impressive high resolution of upto 4.5K and a brightness
                of 500 nits for super sharp display. The device screen is also
                equipped with a wide color gamut P3, so the details displayed on
                the screen are extremely vivid
              </p>
              <p className="text-body-1 text_mono-gray-8">
                The 24-inch iMac M3 2023 is equipped with the best camera system
                compared to previous generations of iMac introduced by Apple.
                Along with that is an integrated image processor, a processor
                with the ability to analyze and improve pixels at 1 trillion
                calculations per second. Thanks to that, the 24-inch iMac M3
                2023 brings impressive video recording capabilities. In addition
                to the sharp camera, the 24-inch iMac M3 2023 is also equipped
                with a microphone that supports effective sound recording.
                Thanks to that, users can record podcasts or livestreams without
                the need for supporting equipment. In particular, the microphone
                on the device is also designed with echo reduction and
                beamforming technology to effectively reduce ambient noise
              </p>
            </div>
          </div>
          <div
            className={`widget-content-inner ${
              activeTab == 2 ? "active" : ""
            } `}
          >
            <div className="tab-reviews write-cancel-review-wrap">
              <div className="tab-reviews-heading">
                <div className="top">
                  <div className="text-center">
                    <div className="number text-display">4.9</div>
                    <div className="ratings justify-content-center">
                      <i className="icon icon-star-solid" />
                      <i className="icon icon-star-solid" />
                      <i className="icon icon-star-solid" />
                      <i className="icon icon-star-solid" />
                      <i className="icon icon-star-solid" />
                    </div>
                    <p className="text_mono-gray-8">(168 Ratings)</p>
                  </div>
                  <div className="rating-score">
                    <div className="item">
                      <div className="number-1 text-body-2 text_mono-gray">
                        5
                      </div>
                      <i className="icon icon-star-solid" />
                      <div className="line-bg">
                        <div style={{ width: "94.67%" }} />
                      </div>
                      <div className="number-2 text-body-2 text_mono-gray">
                        59
                      </div>
                    </div>
                    <div className="item">
                      <div className="number-1 text-body-2 text_mono-gray">
                        4
                      </div>
                      <i className="icon icon-star-solid" />
                      <div className="line-bg">
                        <div style={{ width: "60%" }} />
                      </div>
                      <div className="number-2 text-body-2 text_mono-gray">
                        46
                      </div>
                    </div>
                    <div className="item">
                      <div className="number-1 text-body-2 text_mono-gray">
                        3
                      </div>
                      <i className="icon icon-star-solid" />
                      <div className="line-bg">
                        <div style={{ width: "0%" }} />
                      </div>
                      <div className="number-2 text-body-2 text_mono-gray">
                        0
                      </div>
                    </div>
                    <div className="item">
                      <div className="number-1 text-body-2 text_mono-gray">
                        2
                      </div>
                      <i className="icon icon-star-solid" />
                      <div className="line-bg">
                        <div style={{ width: "0%" }} />
                      </div>
                      <div className="number-2 text-body-2 text_mono-gray">
                        0
                      </div>
                    </div>
                    <div className="item">
                      <div className="number-1 text-body-2 text_mono-gray">
                        1
                      </div>
                      <i className="icon icon-star-solid" />
                      <div className="line-bg">
                        <div style={{ width: "0%" }} />
                      </div>
                      <div className="number-2 text-body-2 text_mono-gray">
                        0
                      </div>
                    </div>
                  </div>
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
                        As a web designer myself, I couldn't agree more with the
                        sentiment that great design should be felt and
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
                        Aute mi ut suspendisse velit leo, vel risus ac. Amet dui
                        dignissim fermentum malesuada auctor volutpat,
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
                        Aute mi ut suspendisse velit leo, vel risus ac. Amet dui
                        dignissim fermentum malesuada auctor volutpat,
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
                  <CommentBox />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`widget-content-inner ${
              activeTab == 3 ? "active" : ""
            } `}
          >
            <div className="tab-description d-grid gap_12">
              <p className="text-body-1 text_mono-gray-8">
                With the 2024 version, the Macbook Air is upgraded to a
                15.3-inch screen with Liquid Retina resolution (2880 x 1864)
                that reproduces detailed image quality, millions of pixels and a
                wide spectrum P3 color range of up to 1 billion colors. Allows
                you to perfectly perform graphic design tasks with strict color
                requirements.
              </p>
              <p className="text-body-1 text_mono-gray-8">
                500 nits brightness with True Tone Technology regulates vision
                and vision extremely well, quickly adapting to ambient light
                conditions to display the sharpest content from text to video.
              </p>
              <p className="text-body-1 text_mono-gray-8">
                MacBook Air 15 inch M3 2024 8-core CPU - Screen
              </p>
              <p className="text-body-1 text_mono-gray-8">
                Multi-dimensional surround sound system Dolby Atmos, Spatial
                Audio combined with a high-quality linear speaker system brings
                a complete and realistic entertainment experience with vivid
                sound quality, clear bass, and sound amplification. Loud allows
                you to immerse yourself in melodious music or vivid movies,
                detailed sound is also extremely beneficial when participating
                in video post-production editing and sound effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
