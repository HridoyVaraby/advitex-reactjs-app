import React from "react";

const brandLogos = [
  { id: 1, src: "/images/brands/brand-1.png", alt: "Brand 1", width: 120, height: 60 },
  { id: 2, src: "/images/brands/brand-2.png", alt: "Brand 2", width: 120, height: 60 },
  { id: 3, src: "/images/brands/brand-3.png", alt: "Brand 3", width: 120, height: 60 },
  { id: 4, src: "/images/brands/brand-4.png", alt: "Brand 4", width: 120, height: 60 },
  { id: 5, src: "/images/brands/brand-5.png", alt: "Brand 5", width: 120, height: 60 },
  { id: 6, src: "/images/brands/brand-6.png", alt: "Brand 6", width: 120, height: 60 },
  { id: 7, src: "/images/brands/brand-7.png", alt: "Brand 7", width: 120, height: 60 },
  { id: 8, src: "/images/brands/brand-8.png", alt: "Brand 8", width: 120, height: 60 },
  { id: 9, src: "/images/brands/brand-10.png", alt: "Brand 9", width: 120, height: 60 },
  { id: 10, src: "/images/brands/brand-11.png", alt: "Brand 10", width: 120, height: 60 },
  { id: 11, src: "/images/brands/brand-12.png", alt: "Brand 11", width: 120, height: 60 },
  { id: 12, src: "/images/brands/brand-13.png", alt: "Brand 12", width: 120, height: 60 },
  { id: 13, src: "/images/brands/brand-14.png", alt: "Brand 13", width: 120, height: 60 },
  { id: 14, src: "/images/brands/brand-15.png", alt: "Brand 14", width: 120, height: 60 },
  { id: 15, src: "/images/brands/brand-16.png", alt: "Brand 15", width: 120, height: 60 },
  { id: 16, src: "/images/brands/brand-17.png", alt: "Brand 16", width: 120, height: 60 },
  { id: 17, src: "/images/brands/brand-18.png", alt: "Brand 17", width: 120, height: 60 },
  { id: 18, src: "/images/brands/brand-19.png", alt: "Brand 18", width: 120, height: 60 },
  { id: 19, src: "/images/brands/brand-20.png", alt: "Brand 19", width: 120, height: 60 },
  { id: 20, src: "/images/brands/brand-21.png", alt: "Brand 20", width: 120, height: 60 },
  { id: 21, src: "/images/brands/brand-22.png", alt: "Brand 21", width: 120, height: 60 },
  { id: 22, src: "/images/brands/brand-23.png", alt: "Brand 22", width: 120, height: 60 },
  { id: 23, src: "/images/brands/brand-24.png", alt: "Brand 23", width: 120, height: 60 },
  { id: 24, src: "/images/brands/brand-25.png", alt: "Brand 24", width: 120, height: 60 },
  { id: 25, src: "/images/brands/brand-26.png", alt: "Brand 25", width: 120, height: 60 },
  { id: 26, src: "/images/brands/brand-27.png", alt: "Brand 26", width: 120, height: 60 },
  { id: 27, src: "/images/brands/brand-28.png", alt: "Brand 27", width: 120, height: 60 },
  { id: 28, src: "/images/brands/brand-29.png", alt: "Brand 28", width: 120, height: 60 },
  { id: 29, src: "/images/brands/brand-30.png", alt: "Brand 29", width: 120, height: 60 },
  { id: 30, src: "/images/brands/brand-31.png", alt: "Brand 30", width: 120, height: 60 },
  { id: 31, src: "/images/brands/brand-32.png", alt: "Brand 31", width: 120, height: 60 },
  { id: 32, src: "/images/brands/brand-33.png", alt: "Brand 32", width: 120, height: 60 },
  { id: 33, src: "/images/brands/brand-34.png", alt: "Brand 33", width: 120, height: 60 },
  { id: 34, src: "/images/brands/brand-71.png", alt: "Brand 34", width: 120, height: 60 },
  { id: 35, src: "/images/brands/brand-72.png", alt: "Brand 35", width: 120, height: 60 },
  { id: 36, src: "/images/brands/brand-73.png", alt: "Brand 36", width: 120, height: 60 },
  { id: 37, src: "/images/brands/brand-74.png", alt: "Brand 37", width: 120, height: 60 },
  { id: 38, src: "/images/brands/brand-75.png", alt: "Brand 38", width: 120, height: 60 },
  { id: 39, src: "/images/brands/brand-76.png", alt: "Brand 39", width: 120, height: 60 },
  { id: 40, src: "/images/brands/brand-77.png", alt: "Brand 40", width: 120, height: 60 },
  { id: 41, src: "/images/brands/brand-78.png", alt: "Brand 41", width: 120, height: 60 },
  { id: 42, src: "/images/brands/brand-79.png", alt: "Brand 42", width: 120, height: 60 },
];

export default function BrandGrid() {
  return (
    <div className="section-brand-grid tf-spacing-16">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb_63">
              <h3 className="text_mono-dark-9 split-text effect-right">
                Trusted by Leading Brands
              </h3>
              <p className="text-body-1 text_mono-gray-7 mt_20">
                We're proud to partner with innovative companies across industries
              </p>
            </div>
          </div>
        </div>
        <div className="brand-grid-container">
          <div className="brand-grid">
            {brandLogos.map((brand) => (
              <div key={brand.id} className="brand-item">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}