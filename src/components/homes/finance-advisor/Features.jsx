import React from "react";

export default function Features() {
  return (
    <div className="tf-container-2 tf-spacing-24">
      <div className="heading-secetion text-center mb_60">
        <h1 className="heading-title text_dark fw-6 split-text effect-right">
          The core values define our commitment
        </h1>
      </div>
      <div className="tf-grid-layout md-col-2">
        <div className="tf-box-icon style-4 effect-icon">
          <div className="heading d-flex justify-content-between gap_12">
            <h5 className="text_dark fw-6">
              Commitment to intergrity <br />
              and ethical practices
            </h5>
            <div className="icon">
              <img
                alt="icon"
                src="/images/box-icon/line-chart.svg"
                width={48}
                height={48}
              />
            </div>
          </div>
          <p className="text-body-1 text_dark">
            The company always puts the client's interests first, ensuring
            transparency and honesty in all financial recommendations
          </p>
        </div>
        <div className="tf-box-icon style-4 effect-icon">
          <div className="heading d-flex justify-content-between gap_12">
            <h5 className="text_dark fw-6">
              Transparency in every <br />
              communication
            </h5>
            <div className="icon">
              <img
                alt="icon"
                src="/images/box-icon/handshake.svg"
                width={48}
                height={48}
              />
            </div>
          </div>
          <p className="text-body-1 text_dark">
            We ensure that every financial recommendation is clearly explained,
            empowering clients to make informed choices
          </p>
        </div>
        <div className="tf-box-icon style-4 effect-icon">
          <div className="heading d-flex justify-content-between gap_12">
            <h5 className="text_dark fw-6">
              Client-centered approach <br />
              focused on your needs
            </h5>
            <div className="icon">
              <img
                alt="icon"
                src="/images/box-icon/line-radar.svg"
                width={39}
                height={39}
              />
            </div>
          </div>
          <p className="text-body-1 text_dark">
            We prioritize building long-term relationships by understanding each
            client’s unique financial goals
          </p>
        </div>
        <div className="tf-box-icon style-4 effect-icon">
          <div className="heading d-flex justify-content-between gap_12">
            <h5 className="text_dark fw-6">
              Dedicated to Long-term <br />
              financial success
            </h5>
            <div className="icon">
              <img
                alt="icon"
                src="/images/box-icon/line-board.svg"
                width={48}
                height={48}
              />
            </div>
          </div>
          <p className="text-body-1 text_dark">
            We develop comprehensive financial plans that are built for
            sustainability, guiding clients toward lasting financial security
          </p>
        </div>
      </div>
    </div>
  );
}
