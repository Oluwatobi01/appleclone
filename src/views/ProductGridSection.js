import React from 'react';
import './ProductGridSection.css';
import watchImage from '../assets/images/iWatch.png';
import airpodsImage from '../assets/images/airpods.png';
import tradeInImage from '../assets/images/tradeIn.png';
import ipadImage from '../assets/images/iPadPro.jpeg';
import macbookImage from '../assets/images/macBookAir.png';
import cardImage from '../assets/images/card.png';

const ProductGridSection = () => {
  const products = [
    {
      id: 1,
      title: "WATCH SERIES 11",
      description: "The ultimate way to watch your health.",
      buttons: [
        { text: "Learn more", type: "link", arrow: true },
        { text: "Buy", type: "primary" }
      ],
      image: watchImage,
      style: "watch",
      icon: "apple-watch"
    },
    {
      id: 2,
      title: "AirPods Pro 3",
      description: "The world's best in-ear Active Noise Cancellation.",
      buttons: [
        { text: "Learn more", type: "link", arrow: true },
        { text: "Buy", type: "primary" }
      ],
      image: airpodsImage,
      style: "airpods",
      icon: "headphones"
    },
    {
      id: 3,
      title: "Trade In",
      description: "Get up to $200-$700 in credit when you trade in iPhone 13 or higher.",
      highlight: "Get your estimate",
      buttons: [
        { text: "Get your estimate", type: "link", arrow: true }
      ],
      image: tradeInImage,
      style: "trade-in",
      icon: "recycle"
    },
    {
      id: 4,
      title: "iPad Pro",
      description: "Advanced AI performance and game-changing capabilities.",
      buttons: [
        { text: "Learn more", type: "link", arrow: true },
        { text: "Buy", type: "primary" }
      ],
      image: ipadImage,
      style: "ipad",
      icon: "tablet"
    },
    {
      id: 5,
      title: "MacBook Air",
      description: "Sky blue color. Sky high performance with M4.",
      buttons: [
        { text: "Learn more", type: "link", arrow: true },
        { text: "Buy", type: "primary" }
      ],
      image: macbookImage,
      style: "macbook",
      icon: "laptop"
    },
    {
      id: 6,
      title: "Card",
      description: "Get up to 3% Daily Cash back with every purchase.",
      buttons: [
        { text: "Learn more", type: "link", arrow: true },
        { text: "Apply now", type: "primary" }
      ],
      image: cardImage,
      style: "card",
      icon: "credit-card"
    }
  ];

  const getIconClass = (iconName) => {
    const iconMap = {
      'apple-watch': 'fas fa-apple-watch',
      'headphones': 'fas fa-headphones',
      'recycle': 'fas fa-recycle',
      'tablet': 'fas fa-tablet-alt',
      'laptop': 'fas fa-laptop',
      'credit-card': 'fas fa-credit-card'
    };
    return iconMap[iconName] || 'fas fa-star';
  };

  return (
    <section className="product-grid-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="product-grid-container">
              <div className="product-grid">
                {products.map((product) => (
                  <div key={product.id} className={`product-card product-card-${product.style}`}>
                    <div className="product-content">
                      <div className="product-header">
                        <i className={`product-icon ${getIconClass(product.icon)}`}></i>
                        <h3 className="product-title">{product.title}</h3>
                      </div>
                      <p className="product-description">{product.description}</p>
                      {product.highlight && (
                        <p className="product-highlight">{product.highlight}</p>
                      )}
                      <div className="product-buttons">
                        {product.buttons.map((button, index) => (
                          button.type === "link" ? (
                            <a key={index} href="#" className="btn btn-link product-button-learn">
                              <span className="button-text">{button.text}</span>
                              {button.arrow && <span className="button-arrow">›</span>}
                            </a>
                          ) : (
                            <a key={index} href="#" className="btn btn-primary product-button-buy">
                              <span className="button-text">{button.text}</span>
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                    <div className="product-image-container">
                      <img src={product.image} alt={product.title} className="product-image img-fluid"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;