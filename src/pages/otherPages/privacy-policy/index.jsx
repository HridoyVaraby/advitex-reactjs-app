import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Privacy Policy || Spread Communications - Purpose-driven smart marketing solutions",
  description: "Privacy Policy - Spread Communications",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header5 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_16 letter-spacing-1">
                    Privacy Policy
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Your privacy is important to us. This policy outlines how we collect, <br />
                    use, and protect your personal information.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link to={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <div className="section-privacy-policy" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="tf-container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-content">
                  
                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">1. Information We Collect</h3>
                    <p className="text-body-1 text_mono-gray-7 mb_16">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="text-body-1 text_mono-gray-7" style={{ paddingLeft: '20px' }}>
                      <li>Name and contact information</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Company information</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">2. How We Use Your Information</h3>
                    <p className="text-body-1 text_mono-gray-7 mb_16">
                      We use the information we collect to:
                    </p>
                    <ul className="text-body-1 text_mono-gray-7" style={{ paddingLeft: '20px' }}>
                      <li>Provide, maintain, and improve our services</li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Send you marketing communications (with your consent)</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Protect against fraudulent or illegal activity</li>
                    </ul>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">3. Information Sharing</h3>
                    <p className="text-body-1 text_mono-gray-7">
                      We do not sell, trade, or rent your personal information to third parties. 
                      We may share your information only in the following circumstances:
                    </p>
                    <ul className="text-body-1 text_mono-gray-7" style={{ paddingLeft: '20px' }}>
                      <li>With your consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>With service providers who assist in our operations</li>
                    </ul>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">4. Data Security</h3>
                    <p className="text-body-1 text_mono-gray-7">
                      We implement appropriate technical and organizational measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, 
                      or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">5. Cookies and Tracking</h3>
                    <p className="text-body-1 text_mono-gray-7">
                      We use cookies and similar tracking technologies to enhance your experience 
                      on our website. You can control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">6. Your Rights</h3>
                    <p className="text-body-1 text_mono-gray-7 mb_16">
                      You have the right to:
                    </p>
                    <ul className="text-body-1 text_mono-gray-7" style={{ paddingLeft: '20px' }}>
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Object to processing of your information</li>
                    </ul>
                  </div>

                  <div className="privacy-section mb_40">
                    <h3 className="text_black mb_20">7. Changes to This Policy</h3>
                    <p className="text-body-1 text_mono-gray-7">
                      We may update this Privacy Policy from time to time. We will notify you of 
                      any changes by posting the new policy on this page and updating the 
                      "Last Updated" date.
                    </p>
                  </div>

                  <div className="privacy-section">
                    <h3 className="text_black mb_20">8. Contact Us</h3>
                    <p className="text-body-1 text_mono-gray-7">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="text-body-1 text_mono-gray-7 mt_16">
                      <strong>Email:</strong> spread360.live@gmail.com<br />
                      <strong>Phone:</strong> +880 1701-000654<br />
                      <strong>Address:</strong> Flat 4B, House 94/2, Road 10, Block D, Niketan Society, Dhaka 1212, Bangladesh
                    </p>
                  </div>

                  <div className="mt_40 pt_40" style={{ borderTop: '1px solid #e5e5e5' }}>
                    <p className="text-body-3 text_mono-gray-5">
                      Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer5 nonHomepage={true} />
    </>
  );
}
