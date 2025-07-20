import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="page-title style-1">
      <div className="content-inner">
        <div className="tf-container">
          <div className="heading-title">
            <div className="text-display-2 text_white mb_49 split-text effect-scale">
              Fully <br />
              Nurture Your <br />
              Potential
            </div>
            <Link to={`/about`} className="tf-btn btn-white height-2">
              <span className="text_black">Book A Free Consultant</span>
              <span className="bg-effect" />
            </Link>
          </div>
          <div className="bot d-flex align-items-end justify-content-between gap-20 flex-wrap">
            <p className="text_white sub-heading description">
              Consulting services offer a strategic partnership that bridges
              <br />
              the gap between your aspirations and their realization. By
              leveraging our <br />
              deep industry knowledge, analytical skills.
            </p>
            <div className="wrap-facts">
              <h5 className="text_white mb_19">Connect Your Experts</h5>
              <div className="facts style-1">
                <div className="avatar-wrap d-flex">
                  <div className="avatar item-1">
                    <img
                      alt=""
                      src="/images/avatar/facts-2.png"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="avatar item-2">
                    <img
                      alt=""
                      src="/images/avatar/facts-2.png"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="avatar item-3">
                    <img
                      alt=""
                      src="/images/avatar/facts-1.png"
                      width={60}
                      height={61}
                    />
                  </div>
                </div>
                <p className="text-body-1 text_white">
                  The expert team brings a wealth of knowledge and creativity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
