import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="section-contact style-default position-relative">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <div className="heading">
                <div className="h1 split-text split-lines-rotation-x">
                  Ready to kick off your new project?
                </div>
              </div>
              <div className="bot">
                <div className="content">
                  <h6 className="mb_5">+88 01701-000654</h6>
                  <p className="text-body-2 text_mono-gray-6">
                    Urgent Calls only
                  </p>
                </div>
                <Link to={`/contact-us`} className="tf-btn btn-primary2 h36">
                  <span className="text-caption">Get Direction</span>
                  <span className="bg-effect" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={(e) => e.preventDefault()} className="form-contact">
              <fieldset>
                <label className="mb_15" htmlFor="name">
                  Full Name*
                </label>
                <input type="text" placeholder="Full Name" id="name" required />
              </fieldset>
              <div className="grid-2 gap_24">
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
              <fieldset className="">
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
              <button type="submit" className="tf-btn btn-primary2 mt_27">
                <span>Send Message</span>
                <span className="bg-effect" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="shape position-absolute">
        <img
          alt="item"
          src="/images/item/shape-5.png"
          width={1105}
          height={720}
        />
      </div>
    </div>
  );
}
