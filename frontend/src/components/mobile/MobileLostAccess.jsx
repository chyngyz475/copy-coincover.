import React from 'react';
import Button from '../ui/Button';
import './MobileLostAccess.css';

const MobileLostAccess = () => {
  return (
    <section className="mobile-lost-access">
      <div className="mobile-lost-access__container">
        <div className="mobile-lost-access__card">
          <h2 className="mobile-lost-access__title">Lost access</h2>
          <p className="mobile-lost-access__description">
            We provide a secure way for you to recover your wallet keys. Think of us as a safety net for your business assets and customer holdings.
          </p>
          <Button variant="primary" size="large" className="mobile-lost-access__cta">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobileLostAccess;
