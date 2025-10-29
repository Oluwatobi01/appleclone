import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections((prev) => (
      prev.includes(index) 
        ? prev.filter((i) => (i !== index))
        : [...prev, index]
    ));
  };

  const footerColumns = [
    {
      title: "Shop and Learn",
      links: [
        "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", 
        "TV & Home", "AirTag", "Accessories", "Gift Cards"
      ],
      additionalSections: [
        {
          title: "Apple Wallet",
          links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]
        }
      ]
    },
    {
      title: "Account",
      links: [
        "Manage Your Apple Account", "Apple Store Account", "iCloud.com"
      ],
      additionalSections: [
        {
          title: "Entertainment",
          links: [
            "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", 
            "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", 
            "App Store"
          ]
        }
      ]
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", 
        "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", 
        "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"
      ]
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
      additionalSections: [
        {
          title: "For Education",
          links: ["Apple and Education", "Shop for K-12", "Shop for College"]
        },
        {
          title: "For Healthcare",
          links: ["Apple and Healthcare"]
        },
        {
          title: "For Government",
          links: [
            "Apple and Government", "Shop for Veterans and Military Employees", 
            "Shop for State and Local Employees", "Shop for Federal Employees"
          ]
        }
      ]
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility", "Education", "Environment", "Inclusion and Diversity", 
        "Privacy", "Racial Equity and Justice", "Supply Chain Innovation"
      ],
      additionalSections: [
        {
          title: "About Apple",
          links: [
            "Newsroom", "Apple Leadership", "Career Opportunities", "Investors", 
            "Ethics & Compliance", "Events", "Contact Apple"
          ]
        }
      ]
    }
  ];

  return (
    <footer className="apple-footer">
      <div className="legal-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="legal-text">
                <p>1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card.</p>
                <p>Acute value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase, in order to take-in certain prerequisites of a valid place (to local law may require saving this information). Offer may not be available at all times and may vary between no more than certain factors. Some users may have additional requirements for their or its trade - information can only be used to check out if it is required to make an transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitation may apply.</p>
                <p>To access and deal all Apple Card features and policies available only to Apple Card users, we must add Apple Card to Whales on an iPhone or iPad that supports such has the latest version of iOS®™ 8025. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, such issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                <p>Apple Payments Service LLC is subsidiary of Apple Inc., a service provider of Goldman Sachs Bank USA for Apple Card and Sarings accounts. Neither Apple Inc. nor Apple Payments Service LLC is listed in profit.</p>
                <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-235-2823 with questions about Apple Card.</p>
                <p>Learn more about how Apple Card applications are evaluated at <a href="#">support.apple.com</a>.</p>
                <p>A subscription is required for Apple Acrobic, Apple Fitness+, Apple Music, and Apple TV+.</p>
                <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-links-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="footer-links-grid">
                {footerColumns.map((column, index) => (
                  <div 
                    key={index}
                    className={`footer-column ${activeSections.includes(index) ? 'active' : ''}`}
                  >
                    <h4 
                      className="footer-column-title"
                      onClick={() => toggleSection(index)}
                    >
                      {column.title}
                    </h4>
                    <div className="footer-column-content">
                      <ul className="footer-links">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}><a href="#">{link}</a></li>
                        ))}
                      </ul>
                      
                      {column.additionalSections && column.additionalSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="additional-section">
                          <h5 className="additional-section-title">{section.title}</h5>
                          <ul className="footer-links">
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex}><a href="#">{link}</a></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shopping-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="shopping-info">
                <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call <a href="tel:1-800-MY-APPLE">1-800-MY-APPLE</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="copyright-content">
                <div className="copyright-text">Copyright © 2025 Apple Inc. All rights reserved.</div>
                <div className="legal-links">
                  <a href="#">Privacy Policy</a>
                  <span className="separator">|</span>
                  <a href="#">Terms of Use</a>
                  <span className="separator">|</span>
                  <a href="#">Sales and Refunds</a>
                  <span className="separator">|</span>
                  <a href="#">Legal</a>
                  <span className="separator">|</span>
                  <a href="#">Site Map</a>
                </div>
                <div className="country">United States</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;