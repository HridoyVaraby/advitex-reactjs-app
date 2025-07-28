const faqData = [
  {
    id: 1,
    question: "What services does Spread Communications offer?",
    answer:
      "We provide a full range of marketing and communication services, including digital marketing, content creation, social media management, brand strategy, and campaign development tailored to your business goals.",
    isActive: false,
  },
  {
    id: 2,
    question: "How does Spread Communications customize strategies for different clients?",
    answer:
      "We take time to understand your unique brand vision, target audience, and objectives to create personalized marketing campaigns that effectively engage and convert.",
    isActive: true, // Default open
  },
  {
    id: 3,
    question: "How does Spread Communications measure the success of campaigns?",
    answer:
      "We use data-driven insights and analytics to track performance, optimize strategies, and provide transparent reporting on key metrics like engagement, conversions, and ROI.",
    isActive: false,
  },
  {
    id: 4,
    question: "Can Spread Communications help with social media management?",
    answer:
      "Absolutely! We design and manage social media strategies that build your brand presence, engage your audience, and foster community growth.",
    isActive: false,
  },
  {
    id: 5,
    question: "What makes Spread Communications different from other agencies?",
    answer:
      "Our commitment to innovation, personalized collaboration, and measurable results sets us apart. We focus on aligning strategies with your business goals to deliver lasting impact.",
    isActive: false,
  },
];
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Faqs() {
  useEffect(() => {
    const items = document.querySelectorAll(".action_click");
    if (items.length === 0) return;

    let isProcessing = false;

    const handleClick = (e) => {
      if (isProcessing) return;
      isProcessing = true;

      // Remove "active" from all other .action_click elements
      items.forEach((item) => {
        if (!item.contains(e.currentTarget)) {
          item.classList.remove("active");
        }
      });

      // Toggle "active" on the clicked one
      const clickedItem = e.currentTarget.closest(".action_click");
      if (clickedItem) {
        clickedItem.classList.toggle("active");
      }

      setTimeout(() => {
        isProcessing = false;
      }, 500);
    };

    // Add listeners
    const actions = document.querySelectorAll(".action_click .action");
    actions.forEach((el) => el.addEventListener("click", handleClick));

    // Cleanup
    return () => {
      actions.forEach((el) => el.removeEventListener("click", handleClick));
    };
  }, []);
  return (
    <div className="section-faqs style-2 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="heading-section gap_12 text-center mb_64">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-message-question" />
            </div>
            <p className="text-body-3">The FAQs</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
            All you need to <span className="text-gradient">know</span>
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_28 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Helping you streamline operations, reduce costs, and achieve
            measurable <br />
            success with proven methodologies.
          </p>
        </div>
        <ul
          className="accordion-wrap style-faqs d-grid gap_23"
          id="accordion-faq-4"
        >
          {faqData.map((faq) => (
            <li
              key={faq.id}
              className={`accordion-item action_click style-default v4 scrolling-effect effectRight ${faq.isActive ? "active" : ""
                }`}
            >
              <a
                href={`#accordion-4-${faq.id}`}
                className={`action accordion-title current ${faq.isActive ? "" : "collapsed"
                  }`}
                data-bs-toggle="collapse"
                aria-expanded={faq.isActive ? "true" : "false"}
                aria-controls={`accordion-4-${faq.id}`}
              >
                <div className="heading">
                  <div className="text_mono-dark-9 text-body-1 title fw-5">
                    {faq.question}
                  </div>
                </div>
                <div className="icon" />
              </a>
              <div
                id={`accordion-4-${faq.id}`}
                className={`collapse ${faq.isActive ? "show" : ""}`}
                data-bs-parent="#accordion-faq-4"
              >
                <div className="accordion-faqs-content">
                  <p className="text_mono-dark-9 text-body-2">{faq.answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bot text-center">
          <div className="text-body-1 text_mono-gray-7">
            If you can't find your answer, please{" "}
            <Link
              to={`/contact-us`}
              className="link text_black fw-5 text-decoration-underline"
            >
              Contact Us
            </Link>
          </div>
          <Link to={`/faqs`} className="tf-btn btn-primary2 height-2 mx-auto">
            <span>All questions</span>
            <span className="bg-effect" />
          </Link>
        </div>
      </div>
    </div>
  );
}
