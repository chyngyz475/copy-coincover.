import React from 'react';
import './MobileRisks.css';

const MobileRisks = () => {
  const risks = [
    {
      title: "Lost access",
      description: "We provide a secure way for you to recover your wallet keys. Think of us as a safety net for your business assets and customer holdings.",
      icon: "🔐"
    },
    {
      title: "Crypto fraud",
      description: "Ransomware. Account takeovers. Social engineering. Our crypto cybersecurity protects your business and customers against sophisticated cyber attacks.",
      icon: "🚨"
    }
  ];

  return (
    <section className="mobile-risks">
      <div className="mobile-risks__container">
        <h2 className="mobile-risks__title">
          We stand guard against the biggest digital asset risks
        </h2>
        <div className="mobile-risks__grid">
          {risks.map((risk, index) => (
            <div key={index} className="mobile-risks__card">
              <div className="mobile-risks__icon">{risk.icon}</div>
              <h3 className="mobile-risks__card-title">{risk.title}</h3>
              <p className="mobile-risks__description">{risk.description}</p>
              <button className="mobile-risks__learn-more">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileRisks;
