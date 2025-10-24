import React from 'react';
import './MobileProducts.css';

const MobileProducts = () => {
  const products = [
    {
      title: "Wallet disaster recovery",
      description: "Get back in control, 24/7. Hot and cold storage and cool-headed human support.",
      icon: "🛡️"
    },
    {
      title: "Provide total protection for your customers' digital assets",
      description: "We monitor accounts in real-time, and scan every transaction for malicious activity.",
      icon: "🔒"
    },
    {
      title: "Make sure customers can regain access to their wallets",
      description: "Losing a wallet key means losing the crypto inside. Unthinkable.",
      icon: "🔑"
    }
  ];

  return (
    <section className="mobile-products">
      <div className="mobile-products__container">
        <h2 className="mobile-products__title">
          We understand the risks behind digital assets.
        </h2>
        <div className="mobile-products__grid">
          {products.map((product, index) => (
            <div key={index} className="mobile-products__card">
              <div className="mobile-products__icon">{product.icon}</div>
              <h3 className="mobile-products__card-title">{product.title}</h3>
              <p className="mobile-products__description">{product.description}</p>
              <button className="mobile-products__learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileProducts;
