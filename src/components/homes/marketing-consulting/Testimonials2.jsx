import { useEffect } from "react";

const testimonialData = [
  {
    name: "Mazharul Islam",
    position: "Founder, Anyaprokash",
    quote: "Delivered our website with a user-friendly and beautiful outlook that has directly contributed to increasing our online sales. We are extremely satisfied with their ongoing support.",
  },
  {
    name: "Robiul Alam",
    position: "Founder, Healthy Eats",
    quote: "The entire Healthy Eats brand, from the initial guidelines to packaging, was expertly built by Spread Communications. Their strategic approach to branding and social media has been invaluable.",
  },
  {
    name: "Tanvir Ahmed",
    position: "Head of Accounts, Shashya Prabartana",
    quote: "Our new website is excellent, and the support from the Spread Communications team has been consistent and reliable. They provide great service and peace of mind with their professional website management.",
  },
  {
    name: "Farhad Mazhar",
    position: "Founder, UBINIG",
    quote: "The professionalism and quality of service provided by Spread Communications in creating and maintaining our website are top-tier. We highly recommend them for their dependable web solutions.",
  },
  {
    name: "Gazi Salauddin Mahmood",
    position: "Head of Sales & Marketing, Abedin Equipment Limited",
    quote: "The new power tool packaging designs were exactly what we needed, and Spread Communications ensured a timely delivery. We are completely satisfied with their creative design and efficiency.",
  },
  {
    name: "Syed Minhaj Ahmed",
    position: "Founder & CEO, Empower Edge Limited",
    quote: "Spread Communications is truly a 360-degree partner. Their work on our branding, market guidance, and strategic media buying has given us a definitive 'edge' in the industry. Highly recommend!",
  },
  {
    name: "Abrar Galib",
    position: "Founder, Waffle Time",
    quote: "We are highly appreciative of the massive effort put into our promotion, influencer marketing, and social media strategy. Spread Communications' full-service marketing drive made a significant impact on our brand visibility.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const container = document.querySelector(".circle-container");
    if (!container) return;

    const outerElements = document.querySelectorAll(".outer-element");
    const innerElements = document.querySelectorAll(".inner-element");
    const testimonialElements = document.querySelectorAll(".testimonial");

    let angle = 0,
      innerAngle = 0;
    const rotationSpeed = 0.0005,
      innerRotationSpeed = -0.001;
    let outerPaused = false;
    let innerPaused = false;
    let animationFrameId;

    function updateElementWidth() {
      const width = container.offsetWidth;
      container.style.setProperty("--circle-container-width", `${width}px`);
    }

    function updatePositions() {
      const containerWidth = container.offsetWidth;
      const outerRadius = containerWidth / 2.08;
      const innerRadius = containerWidth / 3.4;

      if (!outerPaused) {
        outerElements.forEach((element, index) => {
          const avatarAngle =
            angle + index * ((2 * Math.PI) / outerElements.length);
          element.style.transform = `translate(${
            Math.cos(avatarAngle) * outerRadius
          }px, ${Math.sin(avatarAngle) * outerRadius}px)`;
        });
      }

      if (!innerPaused) {
        innerElements.forEach((element, index) => {
          const elemAngle =
            innerAngle + index * ((2 * Math.PI) / innerElements.length);
          element.style.transform = `translate(${
            Math.cos(elemAngle) * innerRadius
          }px, ${Math.sin(elemAngle) * innerRadius}px)`;
        });
      }
    }

    function animate() {
      if (!outerPaused) angle += rotationSpeed;
      if (!innerPaused) innerAngle += innerRotationSpeed;
      updatePositions();
      animationFrameId = requestAnimationFrame(animate);
    }

    function handleOuterHover(event) {
      if (event.type === "mouseenter") {
        outerPaused = true;
      } else {
        outerPaused = false;
      }
    }

    function handleInnerHover(event) {
      if (event.type === "mouseenter") {
        innerPaused = true;
      } else {
        innerPaused = false;
      }
    }

    function handleTestimonialHover(event) {
      const testimonial = event.currentTarget;
      const popup = testimonial.querySelector(".content");
      if (!popup) return;

      const pinOffset = testimonial.getBoundingClientRect();
      const pinWidth = testimonial.offsetWidth;
      const wrapOffset = container.getBoundingClientRect();
      const popupWidth = popup.offsetWidth;
      const windowWidth = window.innerWidth;
      const windowOffsetTop = window.scrollY;
      const thisOffsetToWindow = pinOffset.top - windowOffsetTop;
      const windowHeight = window.innerHeight;

      if (pinOffset.left + popupWidth > windowWidth) {
        popup.style.left = `-${
          pinOffset.left + popupWidth - windowWidth + 15
        }px`;
        const arrow = popup.querySelector(".arrow");
        if (arrow) {
          arrow.style.left = `${
            pinOffset.left + popupWidth - windowWidth + 47
          }px`;
        }
      } else {
        const arrow = popup.querySelector(".arrow");
        if (arrow) {
          arrow.style.left = "auto";
        }
        popup.style.left = "0";
      }

      if (thisOffsetToWindow > windowHeight / 2) {
        popup.classList.add("top");
        popup.classList.remove("bottom");
      } else {
        popup.classList.remove("top");
        popup.classList.add("bottom");
      }
    }

    function handleResize() {
      updateElementWidth();
      updatePositions();
    }

    // Add event listeners
    outerElements.forEach((el) => {
      el.addEventListener("mouseenter", handleOuterHover);
      el.addEventListener("mouseleave", handleOuterHover);
    });

    innerElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInnerHover);
      el.addEventListener("mouseleave", handleInnerHover);
    });

    testimonialElements.forEach((el) => {
      el.addEventListener("mouseenter", handleTestimonialHover);
    });

    window.addEventListener("resize", handleResize);

    // Initialize
    updateElementWidth();
    updatePositions();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);

      outerElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleOuterHover);
        el.removeEventListener("mouseleave", handleOuterHover);
      });

      innerElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInnerHover);
        el.removeEventListener("mouseleave", handleInnerHover);
      });

      testimonialElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleTestimonialHover);
      });

      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
        <div className="section-testimonial style-2 tf-spacing-23 hide-md">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12 position-relative testimonial-container">
            <div className="heading-section">
              <div className="heading-tag style-2 v2 text-body-3 mb_11 mx-auto">
                TESTIMONIAL
              </div>
              <h1
                className="heading-title fw-6 text_primary-fa-yellow split-text split-lines-rotation-x"
                style={{ perspective: "400px" }}
              >
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    position: "relative",
                    transformOrigin: "238.219px 36px",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Customer
                </div>
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    position: "relative",
                    transformOrigin: "238.219px 36px",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Testimonial
                </div>
              </h1>
              <div
                className="text-body-1 text_primary-fa-yellow mt_27 split-text split-lines-transform"
                style={{ perspective: "400px" }}
              >
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    position: "relative",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Trusted by businesses and individuals, see how we’ve made a
                </div>
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    position: "relative",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  real impact on their financial well-being
                </div>
              </div>
            </div>

            <div
              className="circle-container"
              style={{ "--circle-container-width": "1434px" }}
            >
              {[
                {
                  img: "/images/avatar/testimonial/Anyaprokash.png",
                  width: 100,
                  height: 100,
                  transform: "-434.685px, 535.12px",
                  left: "0px",
                  testimonialIndex: 0,
                },
                {
                  img: "/images/avatar/testimonial/Healthy-Eats.jpg",
                  width: 96,
                  height: 96,
                  transform: "-643.254px, -248.049px",
                  left: "0px",
                  testimonialIndex: 1,
                },
                {
                  img: "/images/avatar/testimonial/Shashya-Prabartana.jpg",
                  width: 96,
                  height: 96,
                  transform: "37.1317px, -688.422px",
                  testimonialIndex: 2,
                },
                {
                  img: "/images/avatar/testimonial/UBINIG.jpg",
                  width: 96,
                  height: 96,
                  transform: "666.203px, -177.42px",
                  testimonialIndex: 3,
                },
                {
                  img: "/images/avatar/testimonial/Abedin-Equipment-Limited.jpg",
                  width: 96,
                  height: 96,
                  transform: "374.604px, 578.771px",
                  left: "-109.684px",
                  arrowLeft: "141.684px",
                  testimonialIndex: 4,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="testimonial outer-element style-1"
                  style={{ transform: `translate(${item.transform})` }}
                >
                  <div className="avatar">
                    <img
                      alt="avatar"
                      src={item.img}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div
                    className={`content ${item.left ? "top" : ""}`}
                    style={{ left: item.left || undefined }}
                  >
                    <p className="text text_dark text-body-1 fw-5">
                      {testimonialData[item.testimonialIndex].quote}
                    </p>
                    <div className="info">
                      <h6 className="name fw-5 text_dark">{testimonialData[item.testimonialIndex].name}</h6>
                      <p className="text_mono-gray-5 text-body-2">
                        {testimonialData[item.testimonialIndex].position}
                      </p>
                    </div>
                    <span
                      className="arrow"
                      style={{ left: item.arrowLeft || "auto" }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="inner-container">
              {[
                {
                  img: "/images/avatar/testimonial/Empower-Edge-Limited.jpg",
                  transform: "-75.2548px, 414.997px",
                  position: "top",
                  testimonialIndex: 5,
                },
                {
                  img: "/images/avatar/testimonial/Waffle-Time.jpg",
                  transform: "75.2548px, -414.997px",
                  position: "bottom",
                  testimonialIndex: 6,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="testimonial style-1 inner-element"
                  style={{ transform: `translate(${item.transform})` }}
                >
                  <div className="avatar">
                    <img alt="avatar" src={item.img} width="96" height="96" />
                  </div>
                  <div
                    className={`content ${item.position}`}
                    style={{ left: "0px" }}
                  >
                    <p className="text text_dark text-body-1 fw-5">
                      {testimonialData[item.testimonialIndex].quote}
                    </p>
                    <div className="info">
                      <h6 className="name fw-5 text_dark">{testimonialData[item.testimonialIndex].name}</h6>
                      <p className="text_mono-gray-5 text-body-2">
                        {testimonialData[item.testimonialIndex].position}
                      </p>
                    </div>
                    <span className="arrow" style={{ left: "auto" }}></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg">
              <img
                alt="background"
                src="/images/section/bg-testimonial.png"
                width="1410"
                height="1410"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
