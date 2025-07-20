import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { caseStudies6 } from "@/data/caseStudies";
import DropdownSelect from "../common/DropdownSelect";
const categories = [
  { label: "All Case" },
  { label: "Business Consulting" },
  { label: "Coroporate" },
  { label: "IT Solution" },
  { label: "Marketing" },
  { label: "Startup Consulting" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Case");
  const [filtered, setFiltered] = useState(caseStudies6);
  useEffect(() => {
    if (activeCategory == "All Case") {
      setFiltered(caseStudies6);
    } else {
      setFiltered(caseStudies6.filter((elm) => elm.category == activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="wg-listing tf-spacing-25">
      <div className="tf-container">
        <div className="d-flex align-items-center gap_12 mb_95 flex-wrap justify-content-between">
          <div className="tf-project-filter overflow-x-auto">
            {categories.map((category, i) => (
              <div
                key={i}
                className={`tf-btns-filter text-1
                   ${activeCategory === category.label ? "is--active" : "fw-3"}
                
                `}
                onClick={() => setActiveCategory(category.label)}
              >
                <h6>{category.label}</h6>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center text_mono-gray-5 h6 wrap-sort">
            Filter By Years:
            <DropdownSelect
              addtionalParentClass="align-items-center text_mono-gray-5 h6 wrap-sort"
              options={["all", "Lastest", "Oldest", "Title ASC", "Title DESC"]}
            />
          </div>
        </div>
        <div id="loadMore" className="parent tf-grid-layout lg-col-2">
          {filtered.map((item, index) => (
            <div
              key={index}
              className={`${item.filterClass} tf-filter-item tf-tab-content loadItem`}
            >
              <div className="case-studies-item v2 style-1 hover-image hover-border border-element">
                <Link to={`/single-project/${item.id}`} className="img-style">
                  <img
                    className="lazyload"
                    data-src={item.imageSrc}
                    alt="case-studies"
                    src={item.imageSrc}
                    width={item.imageWidth}
                    height={item.imageHeight}
                  />
                </Link>
                <div className="content">
                  <div className="top d-flex align-items-center justify-content-between mb_17">
                    <div className="brand">
                      <img
                        alt="brand"
                        src={item.brandSrc}
                        width={item.brandWidth}
                        height={item.brandHeight}
                      />
                    </div>
                    <Link to={`/single-project/${item.id}`} className="tf-btn">
                      <span className="icon-arrow-top-right" />
                      <span className="bg-effect" />
                    </Link>
                  </div>
                  <div className="heading mb_36">
                    <h5 className="mb_10 title">
                      <Link to={`/single-project/${item.id}`} className="link">
                        {item.title}
                      </Link>
                    </h5>
                    <p className="text_mono-gray-7 text-body-3">
                      Discover the transformative power of our solutions. Learn
                      how we've helped businesses of all sizes overcome
                      challenges.
                    </p>
                  </div>
                  <div className="group-number">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="wrap-number">
                        <h5 className="number fw-5">{metric.value}</h5>
                        <p className="font2 text-body-3">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wd-load d-flex justify-content-center">
          <button
            id="loadMoreBtn"
            className="tf-btn height-3 btn-primary2 mx-auto mt_32"
          >
            <span>Show More</span>
            <span className="bg-effect" />
          </button>
        </div>
      </div>
    </div>
  );
}
