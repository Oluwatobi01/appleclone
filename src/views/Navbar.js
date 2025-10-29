import React from 'react';
import './Navbar.css';
import logoImage from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="apple-navbar navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Apple Logo */}
        <a className="navbar-brand apple-logo" href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
          <img src={logoImage} alt="Apple" className="apple-logo-img" />
        </a>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/store/" target="_blank" rel="noopener noreferrer">Store</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/mac/" target="_blank" rel="noopener noreferrer">Mac</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/ipad/" target="_blank" rel="noopener noreferrer">iPad</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/iphone/" target="_blank" rel="noopener noreferrer">iPhone</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/watch/" target="_blank" rel="noopener noreferrer">Watch</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/apple-vision-pro/" target="_blank" rel="noopener noreferrer">Vision</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/airpods/" target="_blank" rel="noopener noreferrer">AirPods</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/tv-home/" target="_blank" rel="noopener noreferrer">TV & Home</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/services/" target="_blank" rel="noopener noreferrer">Entertainment</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.apple.com/shop/accessories/all" target="_blank" rel="noopener noreferrer">Accessories</a></li>
            <li className="nav-item"><a className="nav-link" href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">Support</a></li>
          </ul>
        </div>

        {/* Search and Bag Icons */}
        <div className="navbar-icons d-flex">
          <a className="nav-icon" href="https://www.apple.com/search" target="_blank" rel="noopener noreferrer">
            <svg width="15px" height="44px" viewBox="0 0 15 44" className="search-icon">
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.49-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55
              c0,3.06,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228
              s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45
              c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"/>
            </svg>
          </a>
          <a className="nav-icon" href="https://www.apple.com/shop/bag" target="_blank" rel="noopener noreferrer">
            <svg width="14px" height="44px" viewBox="0 0 14 44" className="bag-icon">
              <path d="M12.9,25.7l-0.9-5.9c-0.1-0.7-0.7-1.2-1.4-1.2H9.3v-1.5c0-1.4-1.2-2.6-2.6-2.6c-1.4,0-2.6,1.2-2.6,2.6v1.5H3.4
              c-0.7,0-1.3,0.5-1.4,1.2l-0.9,5.9c-0.1,0.6,0.4,1.2,1,1.2h10.8C12.5,26.9,13,26.4,12.9,25.7z M4.8,17.1c0-0.7,0.6-1.3,1.3-1.3
              c0.7,0,1.3,0.6,1.3,1.3v1.5H4.8V17.1z M11.5,25.1H2.5l0.8-5.3h1.3v1.8c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-1.8h2.5v1.8
              c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-1.8h1.3L11.5,25.1z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
