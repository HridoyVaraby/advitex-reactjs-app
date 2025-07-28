import { mapLocations } from "@/data/locations";
import React from "react";

export default function OfficeLocations() {
  return (
    <div className="section-map tf-spacing-6 mt-5">
      <div className="tf-container">
        <div className="heading-seciton mb_83 text-center">
          <h2 className="heading-title">Visit Our Office</h2>
        </div>
        <div className="d-flex justify-content-center">
          {mapLocations.map((item, index) => (
            <div key={index} className="map-item" style={{ maxWidth: '400px', width: '100%' }}>
              <iframe
                className="map"
                src={item.src}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <ul className="info d-grid gap_11">
                <li>
                  <h6 className="text_primary">Location</h6>
                  <p className="text-body-2">{item.location}</p>
                </li>
                <li>
                  <h6 className="text_primary">Phone</h6>
                  <p className="text-body-1">{item.phone}</p>
                </li>
                <li>
                  <h6 className="text_primary">Email</h6>
                  <a href="#" className="link text-body-1">
                    {item.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
