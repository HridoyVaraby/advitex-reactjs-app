const brands = [
  { id: 1, src: "/images/brands/brand-71.png", width: 169, height: 56 },
  { id: 2, src: "/images/brands/brand-72.png", width: 169, height: 56 },
  { id: 3, src: "/images/brands/brand-73.png", width: 169, height: 56 },
  { id: 4, src: "/images/brands/brand-74.png", width: 169, height: 56 },
  { id: 5, src: "/images/brands/brand-75.png", width: 169, height: 56 },
  { id: 6, src: "/images/brands/brand-76.png", width: 169, height: 56 },
  { id: 7, src: "/images/brands/brand-77.png", width: 169, height: 56 },
  { id: 8, src: "/images/brands/brand-78.png", width: 169, height: 56 },
  { id: 9, src: "/images/brands/brand-79.png", width: 169, height: 56 },
  { id: 10, src: "/images/brands/brand-80.png", width: 169, height: 56 },
  { id: 11, src: "/images/brands/brand-81.png", width: 169, height: 56 },
  { id: 12, src: "/images/brands/brand-82.png", width: 169, height: 56 },
  { id: 13, src: "/images/brands/brand-83.png", width: 169, height: 56 },
  { id: 14, src: "/images/brands/brand-84.png", width: 169, height: 56 },
  { id: 15, src: "/images/brands/brand-85.png", width: 169, height: 56 },
  { id: 16, src: "/images/brands/brand-86.png", width: 169, height: 56 },
  { id: 17, src: "/images/brands/brand-87.png", width: 169, height: 56 },
];

// Create 3 sets (original + 2 clones) for the infinite scroll effect
const allBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <div className="wrap-logo-carousel">
      <div className="heading-section">
        <h6 className="fw-5 text-center">
          Trusted by over 220+ companies around the world
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
              <div className="partner" >
                <img
                  alt={`Brand ${brand.id}`}
                  src={brand.src}
                  width={brand.width}
                  height={brand.height}
                  style={{ 
                    filter: 'grayscale(100%)', 
                    transition: 'all 0.3s ease',
                    opacity: 1,
                    maxWidth: '100%',
                    backgroundColor: 'transparent'
                  }}
                  onMouseOver={(e) => e.target.style.filter = 'none'}
                  onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
