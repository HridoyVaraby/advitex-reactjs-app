import React from "react";
import { Link } from "react-router-dom";

import { socialIcons, teamMembers2 } from "@/data/team";
export default function Team2() {
  return (
    <div className="section-team style-2 tf-spacing-9 pb-0">
      <div className="tf-container">
        <div className="wrap">
          <div className="heading-section mb_86">
            <h2>Tailored Solutions For Your Growth</h2>
            <p className="text-body-1 text_mono-gray-7 mt_20">
              With custom services, we empower the development, provide support
              from your unique vision.
            </p>
          </div>
          <div className="tf-grid-layout-2 lg-col-4">
            {teamMembers2.map((member, index) => (
              <div
                key={index}
                className="team-item v2 style-default hover-border hover-image"
              >
                <a href="#" className="img-style mb_19">
                  <img
                    alt="avatar"
                    src={member.image}
                    width={406}
                    height={406}
                  />
                </a>
                <div className="bot">
                  <div className="content">
                    <h3 className="name">
                      <a href="#" className="link hover-line-text">
                        {member.name}
                      </a>
                    </h3>
                    <p className="text-body-1">{member.role}</p>
                  </div>
                  <ul className="social d-flex gap_12 justify-content-center">
                    {socialIcons.map((icon, i) => (
                      <li key={i}>
                        <a href={icon.href} className={icon.className} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="team-item empty">
              <div className="img-style position-relative">
                <img
                  alt="avatar"
                  src="/images/item/team-emty.png"
                  width={406}
                  height={406}
                />
                <h3 className="name">
                  <Link to={`/team`} className="link hover-line-text">
                    Imagine This <br />
                    Could Be You.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
