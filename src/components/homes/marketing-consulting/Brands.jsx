const brands = [
  { id: 1, src: "/images/brands/brand-1.png", width: 169, height: 56 },
  { id: 2, src: "/images/brands/brand-2.png", width: 169, height: 56 },
  { id: 3, src: "/images/brands/brand-3.png", width: 213, height: 56 },
  { id: 4, src: "/images/brands/brand-4.png", width: 187, height: 56 },
  { id: 5, src: "/images/brands/brand-5.png", width: 169, height: 56 },
  { id: 6, src: "/images/brands/brand-6.png", width: 169, height: 56 },
  { id: 7, src: "/images/brands/brand-7.png", width: 169, height: 56 },
  { id: 8, src: "/images/brands/brand-8.png", width: 168, height: 56 },
];

// Create 3 sets (original + 2 clones) for the infinite scroll effect
const allBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <div className="wrap-logo-carousel">
      <div className="heading-section">
        <h6 className="fw-5 text-center">
          Trusted by over 1000+ companies around the world
        </h6>
      </div>
      <div className="infiniteslide_wrap" style={{ overflow: "hidden" }}>
        <div
          className="infiniteslide tf-marquee infiniteSlide"
          style={{ animationDirection: "reverse" }}
        >
          {allBrands.map((brand, index) => (
            <div
              key={`brand-${brand.id}-${index}`}
              className={`marquee-item style-2${
                index >= brands.length ? " infiniteslide_clone" : ""
              }`}
              style={{ flex: "0 0 auto", display: "block" }}
            >
              <div className="partner style-1">
                <img
                  alt={`Brand ${brand.id}`}
                  src={brand.src}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
