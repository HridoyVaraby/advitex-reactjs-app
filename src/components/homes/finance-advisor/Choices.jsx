import React from "react";
import { Link } from "react-router-dom";

export default function Choices() {
  return (
    <div className="section-choices">
      <div className="tf-container-2">
        <div className="heading-secetion text-center mb_61">
          <h1 className="heading-title text_dark fw-6 split-text effect-right">
            We fuel your financial confidence
          </h1>
        </div>
        <div className="tf-grid-layout lg-col-3">
          <div
            className="choice-item left wow animate__fadeInLeft animate__animated"
            data-wow-delay="0s"
          >
            <div className="heading">
              <h5 className="text_dark fw-6 mb_16">
                Frequently asked Questions
              </h5>
              <p className="text-body-1 text_dark">
                Our FAQ section provides straightforward, clear answers to help
                you better under stand our services
              </p>
            </div>
            <Link to={`/faqs`} className="link text_dark text-body-1">
              View all question
            </Link>
            <div
              className="item scroll-tranform"
              data-direction="left"
              data-distance="20%"
            >
              <img
                alt="item"
                src="/images/item/item-choice-1.png"
                width={235}
                height={235}
              />
            </div>
          </div>
          <div
            className="choice-item center wow animate__fadeInLeft animate__animated"
            data-wow-delay="0.2s"
          >
            <div className="heading">
              <h5 className="text_dark text_white fw-6 mb_16">
                Package your Development Plan
              </h5>
              <p className="text-body-1 text_dark text_white mb_32">
                Our development plan packages are designed to provide
                comprehensive, personalized strategies
              </p>
              <ul className="list d-grid gap_8">
                <li className="text-body-2 text_white fw-6 d-flex align-items-center gap_16">
                  <i className="icon-check-cycle-line-2" />
                  Cancel anytime
                </li>
                <li className="text-body-2 text_white fw-6 d-flex align-items-center gap_16">
                  <i className="icon-check-cycle-line-2" />
                  Save cost for your development
                </li>
                <li className="text-body-2 text_white fw-6 d-flex align-items-center gap_16">
                  <i className="icon-check-cycle-line-2" />
                  Comprehensive package
                </li>
              </ul>
            </div>
            <Link to={`/faqs`} className="link-black text_white text-body-1">
              View all question
            </Link>
          </div>
          <div
            className="choice-item right wow animate__fadeInLeft animate__animated"
            data-wow-delay="0.3s"
          >
            <div className="heading">
              <h5 className="text_dark fw-6 mb_16">
                Begin your Journey with Advitex!
              </h5>
              <p className="text-body-1 text_dark">
                We are always looking for talented, driven professionals who
                share our commitment to excellence
              </p>
            </div>
            <Link to={`/faqs`} className="link text_dark text-body-1">
              View all question
            </Link>
            <div
              className="item scroll-tranform"
              data-direction="right"
              data-distance="20%"
            >
              <img
                alt="item"
                src="/images/item/item-choice-2.png"
                width={235}
                height={235}
              />
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="left">
            <div className="heading mb_30">
              <h5 className="text_dark fw-6 mb_16 title split-text effect-right">
                What you get from us!
              </h5>
              <p
                className="text-body-1 text_dark split-text wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
              >
                Our FAQ section provides straightforward, clear
                <br />
                answers to help you better
              </p>
            </div>
            <Link
              to={`/pricing`}
              className="tf-btn btn-dark height-2 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              <span className="fw-5">Get Started</span>
              <span className="bg-effect" />
            </Link>
          </div>
          <div className="right">
            <ul className="list d-grid gap_8">
              <li
                className="text-body-2 text_dark fw-6 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                data-wow-delay="0s"
              >
                <i className="icon-check-cycle-line-2" />
                Tailored financial solutions for every client
              </li>
              <li
                className="text-body-2 text_dark fw-6 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                data-wow-delay="0.1s"
              >
                <i className="icon-check-cycle-line-2" />
                Proactive and Agile Market responses
              </li>
              <li
                className="text-body-2 text_dark fw-6 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                data-wow-delay="0.2s"
              >
                <i className="icon-check-cycle-line-2" />
                Transparent, Client-Friendly fee structures
              </li>
              <li
                className="text-body-2 text_dark fw-6 d-flex align-items-center gap_16 wow animate__fadeInUp animate__animated"
                data-wow-delay="0.3s"
              >
                <i className="icon-check-cycle-line-2" />
                Advanced technology for Real-Time financial management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
