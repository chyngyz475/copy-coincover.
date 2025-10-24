import React from 'react';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import MobileProtection from './MobileProtection';
import MobileLostAccess from './MobileLostAccess';
import MobileWalletRecovery from './MobileWalletRecovery';
import MobileStats from './MobileStats';
import MobileProducts from './MobileProducts';
import MobileRisks from './MobileRisks';
import MobileBlog from './MobileBlog';
import MobileTrustFactor from './MobileTrustFactor';
import MobileFooter from './MobileFooter';

const MobileHome = () => {
  return (
    <div className="mobile-home">
      {/* Header with Notification Banner */}
      <MobileHeader />
      
      {/* Hero Section */}
      <MobileHero />
      
      {/* Holistic Protection Section */}
      <MobileProtection />
      
      {/* Lost Access Section */}
      <MobileLostAccess />
      
      {/* Wallet Recovery Section */}
      <MobileWalletRecovery />
      
      {/* Statistics Section */}
      <MobileStats />
      
      {/* Products Section */}
      <MobileProducts />
      
      {/* Risks Section */}
      <MobileRisks />
      
      {/* Blog Section */}
      <MobileBlog />
      
      {/* Trust Factor CTA */}
      <MobileTrustFactor />
      
      {/* Footer */}
      <MobileFooter />
    </div>
  );
};

export default MobileHome;
