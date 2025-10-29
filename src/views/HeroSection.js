import React from 'react';
import './HeroSection.css';
import iphoneImage from '../assets/images/iphone.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="hero-container text-center">
              <div className="hero-content mb-5">
                <h1 className="hero-title display-1 fw-bold mb-3">iPhone 17 Pro</h1>
                <h2 className="hero-subtitle display-4 fw-light mb-4">All out Pro.</h2>
                <div className="hero-buttons d-flex justify-content-center gap-3">
                  <a href="#" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-2 hero-button-learn">
                    <span className="button-text">Learn more</span>
                    <span className="button-arrow ms-2">›</span>
                  </a>
                  <a href="#" className="btn btn-primary btn-lg rounded-pill px-4 py-2 hero-button-buy">
                    <span className="button-text">Buy</span>
                  </a>
                </div>
              </div>
              <div className="hero-image-container">
                <img src={iphoneImage} alt="iPhone 17 Pro" className="hero-image img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;