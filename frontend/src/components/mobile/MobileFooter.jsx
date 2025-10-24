import React from 'react';
import './MobileFooter.css';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__container">
        <div className="mobile-footer__content">
          <div className="mobile-footer__logo">
            <img src="/assets/svg/header_logo.svg" alt="CoinCover" />
          </div>
          
          <div className="mobile-footer__links">
            <div className="mobile-footer__section">
              <h4>For institutions</h4>
              <ul>
                <li><a href="/institutions/products">Products</a></li>
                <li><a href="/institutions/solutions">Solutions</a></li>
                <li><a href="/institutions/risks">Risks we protect against</a></li>
              </ul>
            </div>
            
            <div className="mobile-footer__section">
              <h4>For people</h4>
              <ul>
                <li><a href="/people/products">Products</a></li>
                <li><a href="/people/risks">Risks we protect against</a></li>
              </ul>
            </div>
            
            <div className="mobile-footer__section">
              <h4>Knowledge Hub</h4>
              <ul>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/partners">Partners</a></li>
                <li><a href="/insights">Insights</a></li>
              </ul>
            </div>
            
            <div className="mobile-footer__section">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mobile-footer__bottom">
          <div className="mobile-footer__legal">
            <a href="/terms">Terms of use</a>
            <a href="/privacy">Privacy policy</a>
            <a href="/modern-slavery">Modern slavery statement</a>
            <a href="/cookies">Cookie policy</a>
          </div>
          
          <div className="mobile-footer__certifications">
            <img src="/assets/img/2White_Amtivo ISO 27005_width=55&height=43&name=2White_Amtivo%20ISO%2027005.png.png" alt="ISO 27005" />
            <img src="/assets/img/cyber-essentials-cert.svg" alt="Cyber Essentials" />
          </div>
          
          <div className="mobile-footer__copyright">
            <p>© 2025 CoinCover</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
