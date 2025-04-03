import React from 'react';
import './Partners.css';

const Partners = () => {
  const brands = [
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
      url: "https://www.nike.com"
    },
    {
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
      url: "https://www.adidas.com"
    },
    {
      name: "Puma",
      logo: "https://cdn.worldvectorlogo.com/logos/puma-logo.svg",
      url: "https://www.puma.com"
    },
    {
      name: "Zara",
      logo: "https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg",
      url: "https://www.zara.com"
    },
    {
      name: "H&M",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png",
      url: "https://www.hm.com"
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">Our Premium Partners</h2>
        <p className="section-subtitle">Collaborating with industry leaders</p>
        
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <a 
              key={index} 
              href={brand.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="brand-card"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="brand-logo"
                loading="lazy"
              />
              <div className="brand-overlay">
                <span>Visit {brand.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;