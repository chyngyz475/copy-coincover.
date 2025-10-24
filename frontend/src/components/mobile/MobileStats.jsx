import React from 'react';
import './MobileStats.css';

const MobileStats = () => {
  const stats = [
    {
      number: "550+",
      label: "businesses safeguarded"
    },
    {
      number: "22 million",
      label: "wallets protected"
    },
    {
      number: "$72 billion",
      label: "of transactions secured"
    }
  ];

  return (
    <section className="mobile-stats">
      <div className="mobile-stats__container">
        <div className="mobile-stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="mobile-stats__item">
              <div className="mobile-stats__number">{stat.number}</div>
              <div className="mobile-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileStats;
