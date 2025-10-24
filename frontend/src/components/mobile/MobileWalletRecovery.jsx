import React from 'react';
import Button from '../ui/Button';
import './MobileWalletRecovery.css';

const MobileWalletRecovery = () => {
  return (
    <section className="mobile-wallet-recovery">
      <div className="mobile-wallet-recovery__container">
        <div className="mobile-wallet-recovery__header">
          <div className="mobile-wallet-recovery__logo">
            <img src="/assets/svg/header_logo.svg" alt="CoinCover" className="mobile-wallet-recovery__logo-icon" />
            <img src="/assets/svg/header_hover_logo.svg" alt="CoinCover" className="mobile-wallet-recovery__logo-text" />
          </div>
          <div className="mobile-wallet-recovery__nav-dots">⋯</div>
        </div>
        
        <div className="mobile-wallet-recovery__content">
          <h2 className="mobile-wallet-recovery__title">Wallet disaster recovery.</h2>
          <p className="mobile-wallet-recovery__description">
            Get back in control, 24/7.
          </p>
          <p className="mobile-wallet-recovery__sub-description">
            Hot and cold storage and cool-headed human support.
          </p>
          <p className="mobile-wallet-recovery__text">
            If the worst happens, we'll take decisive action to help put you back in control of your wallet.
          </p>
          <Button variant="primary" size="large" className="mobile-wallet-recovery__cta">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobileWalletRecovery;
