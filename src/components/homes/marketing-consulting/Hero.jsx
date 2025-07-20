const infinityImages = [
  {
    id: 1,
    src: "/images/page-title/infinity-img-1.jpg",
    width: 434,
    height: 437,
  },
  {
    id: 2,
    src: "/images/page-title/infinity-img-2.jpg",
    width: 161,
    height: 437,
  },
  {
    id: 3,
    src: "/images/page-title/infinity-img-3.jpg",
    width: 434,
    height: 437,
  },
  {
    id: 4,
    src: "/images/page-title/infinity-img-4.jpg",
    width: 161,
    height: 437,
  },
  {
    id: 5,
    src: "/images/page-title/infinity-img-5.jpg",
    width: 434,
    height: 437,
  },
  {
    id: 6,
    src: "/images/page-title/infinity-img-6.jpg",
    width: 161,
    height: 437,
  },
];
const allInfinityImages = [
  ...infinityImages,
  ...infinityImages,
  ...infinityImages,
];

export default function Hero() {
  return (
    <div className="page-title style-5">
      <div className="tf-container mt_25">
        <div className="row">
          <div className="col-12">
            <div className="heading-title text-center mb_40">
              <div className="heading-tag d-flex gap_12 align-items-center mx-auto mb_20">
                <div className="icon">
                  <i className="icon-medal-first-place" />
                </div>
                <p className="text-body-3 text_mono-dark-10 fw-5">
                  Top #1 Marketing Consulting Agency
                </p>
              </div>
              <h1 className="title text_mono-dark-9 fw-5 mb_28 split-text">
                Strategic <span className="text-gradient">marketing</span>{" "}
                solutions designed <br />
                to empower your brand.
              </h1>
              <p className="text_mono-gray-7 sub-heading">
                Providing expert marketing consulting services to help you
                attract, <br />
                engage, and thrive in today’s dynamic marketplace
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form-send-email mb_31"
            >
              <fieldset>
                <input
                  className=""
                  type="email"
                  placeholder="Your Email Address"
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <div className="button-submit">
                <button className="tf-btn btn-primary2" type="submit">
                  <span className="text-body-3">Get Started</span>
                  <span className="bg-effect" />
                </button>
              </div>
            </form>
            <div className="facts d-flex align-items-center justify-content-center">
              <div className="avatar-wrap d-flex">
                <div className="avatar item-1">
                  <img
                    alt=""
                    src="/images/avatar/facts-3.png"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="avatar item-2">
                  <img
                    alt=""
                    src="/images/avatar/facts-4.png"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="avatar item-3">
                  <img
                    alt=""
                    src="/images/avatar/facts-5.png"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="avatar item-4">
                  <img
                    alt=""
                    src="/images/avatar/facts-6.png"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <p className="text-body-3 text_mono-dark-9">
                200+ Businesses Engaged
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="shape shape-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
            />
          </svg>
        </div>
        <div className="shape shape-bottom">
          <img
            alt=""
            src="/images/item/shape-7.png"
            width={2232}
            height={483}
          />
        </div>
        <div className="infiniteslide_wrap" style={{ overflow: "hidden" }}>
          <div
            className="infiniteslide tf-marquee infiniteSlide"
            data-clone={2}
            data-style="left"
          >
            {allInfinityImages.map((image, index) => (
              <div
                className={`marquee-item${
                  index >= infinityImages.length ? " infiniteslide_clone" : ""
                }`}
                style={{ flex: "0 0 auto", display: "block" }}
                key={`infinity-img-${image.id}-${index}`}
              >
                <img
                  alt="brands"
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
