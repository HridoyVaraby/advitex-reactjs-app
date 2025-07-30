import { mapLocations } from "@/data/locations";
import React from "react";

export default function OfficeLocations() {
  return (
    <div className="section-map tf-spacing-6 mt-5">
      <div className="tf-container">
        <div className="heading-seciton mb_83 text-center">
          <h2 className="heading-title">Visit Our Office</h2>
        </div>
        {mapLocations.map((item, index) => (
          <div key={index} className="row align-items-center">
            {/* Left Column - Map */}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="map-container" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <iframe
                  className="map w-100"
                  src={item.src}
                  style={{
                    border: 0,
                    height: '400px',
                    width: '100%'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="col-lg-6 col-md-6">
              <div className="office-info ps-lg-5 p-4" style={{
                border: '1px solid var(--Primary-1)',
                borderRadius: '20px',
                backgroundColor: 'var(--White)',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
              }}>
                <div className="mb-4">
                  <h3 className="text_primary mb-3 fw-6">Get In Touch</h3>
                  <p className="text-body-1 text_dark mb-4">
                    We'd love to hear from you. Visit our office or get in touch with us through the following contact information.
                  </p>
                </div>

                <div className="contact-details">
                  <div className="contact-item mb-4 d-flex align-items-start">
                    <div className="icon-wrapper me-3" style={{
                      backgroundColor: 'var(--Primary)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="icon-map-marker-solid text_white" style={{ fontSize: '20px' }}></i>
                    </div>
                    <div>
                      <h6 className="text_dark fw-6 mb-2">Our Location</h6>
                      <p className="text-body-2 text_dark mb-0">{item.location}</p>
                    </div>
                  </div>

                  <div className="contact-item mb-4 d-flex align-items-start">
                    <div className="icon-wrapper me-3" style={{
                      backgroundColor: 'var(--Primary)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="icon-tty-solid text_white" style={{ fontSize: '20px' }}></i>
                    </div>
                    <div>
                      <h6 className="text_dark fw-6 mb-2">Phone Number</h6>
                      <a href={`tel:${item.phone}`} className="text-body-1 text_dark link">
                        {item.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item mb-4 d-flex align-items-start">
                    <div className="icon-wrapper me-3" style={{
                      backgroundColor: 'var(--Primary)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="icon-envelope-solid text_white" style={{ fontSize: '20px' }}></i>
                    </div>
                    <div>
                      <h6 className="text_dark fw-6 mb-2">Email Address</h6>
                      <a href={`mailto:${item.email}`} className="text-body-1 text_dark link">
                        {item.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
