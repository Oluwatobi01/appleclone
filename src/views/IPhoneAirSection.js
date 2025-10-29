import React from 'react';
import './IPhoneAirSection.css';
import iphoneImage from '../assets/images/iphoneair.png';

const IPhoneAirSection = () => {
  return (
    <section className="iphone-air-section">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="iphone-air-container text-center">
              <div className="iphone-air-content mb-5">
                <h1 className="iphone-air-title display-1 fw-bold mb-3">iPhone Air</h1>
                <h2 className="iphone-air-subtitle display-4 fw-light mb-3">The thinnest iPhone ever.</h2>
                <p className="iphone-air-description display-6 fw-light mb-4">
                  With the power of pro inside.
                </p>
                <div className="iphone-air-buttons d-flex justify-content-center gap-3">
                  <a
                    href="https://www.apple.com/iphone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link btn-lg iphone-air-button-learn"
                  >
                    <span className="button-text">Learn more</span>
                    <span className="button-arrow">›</span>
                  </a>
                  <a
                    href="https://www.apple.com/iphone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg rounded-pill px-4 py-2 iphone-air-button-buy"
                  >
                    <span className="button-text">Buy</span>
                  </a>
                </div>
              </div>
              <div className="iphone-air-image-container">
                <img src={iphoneImage} alt="iPhone Air" className="iphone-air-image img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPhoneAirSection;
