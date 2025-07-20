import { jobList } from "@/data/jobs";
import React from "react";

export default function Oppertunities() {
  return (
    <div className="section-opportunities tf-spacing-27 pt-0">
      <div className="tf-container">
        <div className="heading-section mb_86">
          <h2 className="heading-title">
            Opportunities For Professional Development
          </h2>
          <p className="text-body-1 text_mono-gray-7 mt_19">
            A variety of professional development opportunities to help you
            reach your career goals.
          </p>
        </div>
        <div className="d-grid gap_40">
          {jobList.map((job, index) => (
            <div key={index} className="job-card">
              <div className="heading">
                <h3 className="title mb_5">{job.title}</h3>
                <p className="sub-heading text_mono-gray-7">{job.type}</p>
              </div>
              <p className="description text-body-1 text_mono-gray-7">
                {job.description}
              </p>
              <div className="content">
                <div className="item mb_20">
                  <div className="sub-heading text_mono-gray-7">
                    Arrangement :
                  </div>
                  <h6>{job.arrangement}</h6>
                </div>
                <div className="item">
                  <div className="sub-heading text_mono-gray-7 mb_10">
                    Salary Range :
                  </div>
                  <h6 className="text_primary">{job.salary}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
