import React from "react";
import { Link } from "react-router-dom";

import { teamMembers3 } from "@/data/team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Team() {
  return (
    <div className="section-team style-3 tf-spacing-23 pt-0">
      <div className="tf-container-2">
        <div className="heading-section text-center mb_65">
          <div className="heading-tag style-2 text_mono-gray-5 text-body-3 mb_12 mx-auto">
            OUR TEAMS
          </div>
          <h1 className="heading-title text_dark fw-6 split-text effect-right">
            Show you the way to the success
          </h1>
          <p className="text-body-1 text_mono-gray-7 mt_28 split-text split-lines-transform">
            Providing expert financial consulting services to help you grow,
            optimize, and <br />
            thrive in today's competitive landscape
          </p>
        </div>
        <Swiper
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd17",
          }}
          className="swiper tf-sw-mobile mb_40 swiper-active-768"
        >
          {teamMembers3.map((member, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide wow animate__fadeInRight animate__animated"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="team-item style-1">
                <div className="position-relative mb_29">
                  <Link href="/team" className="img-style">
                    <img
                      alt="avatar"
                      src={member.imgSrc}
                      width={237}
                      height={384}
                    />
                  </Link>
                  <div className="wrap-social">
                    <div className="btn-share">
                      <i className="icon-share-network" />
                    </div>
                    <ul className="social">
                      <li>
                        <a href="#" className="icon-facebook-f link" />
                      </li>
                      <li>
                        <a href="#" className="icon-twitter-x link" />
                      </li>
                      <li>
                        <a href="#" className="icon-instagram link" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h6 className="name text_dark fw-5">
                    <Link href="/team" className="link">
                      {member.name}
                    </Link>
                  </h6>
                  <p className="text-body-1 text_mono-gray-5">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots spd17 style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </Swiper>
        <div className="swiper tf-sw-mobile mb_40 swiper-inActive-768">
          <div className="swiper-wrapper tf-grid-layout-md xl-col-5 gap_25 md-col-2">
            {teamMembers3.map((member, index) => (
              <div
                key={index}
                className="swiper-slide wow animate__fadeInRight animate__animated"
                data-wow-delay={`${index * 0.1}s`}
              >
                <div className="team-item style-1">
                  <div className="position-relative mb_29">
                    <Link href="/team" className="img-style">
                      <img
                        alt="avatar"
                        src={member.imgSrc}
                        width={237}
                        height={384}
                      />
                    </Link>
                    <div className="wrap-social">
                      <div className="btn-share">
                        <i className="icon-share-network" />
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#" className="icon-facebook-f link" />
                        </li>
                        <li>
                          <a href="#" className="icon-twitter-x link" />
                        </li>
                        <li>
                          <a href="#" className="icon-instagram link" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="name text_dark fw-5">
                      <Link href="/team" className="link">
                        {member.name}
                      </Link>
                    </h6>
                    <p className="text-body-1 text_mono-gray-5">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-dots style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </div>
        <Link
          to={`/team`}
          className="tf-btn btn-dark mx-auto height-2 btn-px-28"
        >
          <span>About our team</span>
          <span className="bg-effect" />
        </Link>
      </div>
    </div>
  );
}
