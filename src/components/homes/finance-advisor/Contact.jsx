import React from "react";

export default function Contact() {
  return (
    <div className="section-contact style-1 tf-spacing-20 pt-0">
      <div className="tf-container-2">
        <div className="heading-section text-center mb_63">
          <div className="heading-tag style-2 text_mono-gray-5 text-body-3 mx-auto text-uppercase mb_12">
            Works with us
          </div>
          <h1 className="heading-title fw-6 split-text effect-right">
            Let’s work together!
          </h1>
          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Partner with us to unlock tailored solutions, backed by expertise
            and a <br />
            commitment to your success.
          </p>
        </div>
        <div className="box-inner">
          <form className="form-contact" onSubmit={(e) => e.preventDefault()}>
            <div className="wrap">
              <fieldset className="mb_20">
                <label className="mb_15" htmlFor="name">
                  Full Name*
                </label>
                <input type="text" placeholder="Full Name" id="name" required />
              </fieldset>
              <div className="grid-2 gap_24 mb_20">
                <fieldset>
                  <label className="mb_15" htmlFor="email">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address*"
                    id="email"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label className="mb_15" htmlFor="phone">
                    Phone Number
                    <span className="text_mono-gray-5">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    id="phone"
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="mb_24">
                <label className="mb_15" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="message"
                  placeholder="Write your message here..."
                  id="message"
                  defaultValue={""}
                />
              </fieldset>
              <a href="#" className="link attachment">
                <i className="icon-paperclip-solid" />
                Add an attachment
              </a>
            </div>
            <button type="submit" className="tf-btn btn-primary2 height-2">
              <span>Send Message</span>
              <span className="bg-effect" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
