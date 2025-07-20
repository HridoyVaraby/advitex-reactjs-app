import React from "react";
import { Link } from "react-router-dom";

import { teamMembers } from "@/data/team";
export default function Team() {
  return (
    <div className="section-team style-1 tf-spacing-6">
      <div className="tf-container">
        <div className="heading-secion mb_88">
          <h2 className="heading-title split-text effect-right">
            Our Dedicated Membership
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Our dedicated members actively participate in our community, sharing
            expertise, <br />
            collaborating on projects, and supporting one another.
          </p>
        </div>
        <div className="tf-grid-layout-2 lg-col-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-item style-default hover-border hover-image"
            >
              <Link to={`/team`} className="img-style mb_19">
                <img alt="avatar" src={member.image} width={406} height={406} />
              </Link>
              <div className="content">
                <h3 className="name">
                  <Link to={`/team`} className="link hover-line-text">
                    {member.name}
                  </Link>
                </h3>
                <p className="text-body-1">{member.role}</p>
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
                  See All <br />
                  Members
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
