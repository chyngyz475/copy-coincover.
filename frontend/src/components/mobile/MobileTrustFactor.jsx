import React from 'react';
import './MobileTrustFactor.css';

const MobileTrustFactor = () => {
  return (
    <section className="mobile-trust-factor">
      <div className="mobile-trust-factor__container">
        <div className="mobile-trust-factor__content">
          <h2 className="mobile-trust-factor__title">The Trust Factor</h2>
          <h3 className="mobile-trust-factor__subtitle">
            Will regulation take crypto to the next level?
          </h3>
          <p className="mobile-trust-factor__description">
            Introducing The Trust Factor, a new whitepaper from CoinCover. We examine how the next wave of cryptocurrency regulation could reshape the industry, with findings from a survey of over 1,000 respondents and the unique perspectives of 7 of the industry's leaders.
          </p>
          <button className="mobile-trust-factor__button">
            Read the full report
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileTrustFactor;
