import React from 'react';
import './MobileProtection.css';

const MobileProtection = () => {
  return (
    <section className="mobile-protection">
      <div className="mobile-protection__container">
        <h2 className="mobile-protection__title">
          Holistic protection for digital asset institutions
        </h2>
        
        <div className="mobile-protection__navigation">
          <div className="mobile-protection__nav-dots">
            <span className="mobile-protection__nav-arrow">‹</span>
            <span className="mobile-protection__nav-counter">1/4</span>
            <span className="mobile-protection__nav-arrow">›</span>
          </div>
        </div>
        
        <div className="mobile-protection__card">
          <div className="mobile-protection__card-pattern">
            <div className="mobile-protection__pattern-dots"></div>
          </div>
          <div className="mobile-protection__card-content">
            <h3 className="mobile-protection__card-title">
              We protect against on-chain fraud
            </h3>
            <div className="mobile-protection__card-icon">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProtection;
