import React from 'react';
import Button from '../ui/Button';
import './MobileHero.css';

const MobileHero = () => {
  return (
    <section className="mobile-hero">
      <div className="mobile-hero__container">
        <div className="mobile-hero__content">
          <h1 className="mobile-hero__title">
            <span className="mobile-hero__title-accent">Digital assets</span><br />
            <span className="mobile-hero__title-accent">Secured + </span><br />
            <span className="mobile-hero__title-accent">protected</span>
          </h1>
          <p className="mobile-hero__description">
            We protect digital assets for institutions and their customers.
          </p>
          <div className="mobile-hero__actions">
            <Button variant="primary" size="large" className="mobile-hero__cta">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
