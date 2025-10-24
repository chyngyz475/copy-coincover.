import React, { useState } from 'react';
import Button from '../ui/Button';
import './MobileHeader.css';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setExpandedItems({});
    }
  };

  const toggleSubmenu = (itemTitle) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemTitle]: !prev[itemTitle]
    }));
  };

  const navigationItems = [
    {
      title: 'For institutions',
      href: null,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Products',
          items: [
            { title: 'CoinCover Recover for Institutions', href: 'https://www.coincover.com/products/recover-for-institutions' },
            { title: 'CoinCover Protect', href: 'https://www.coincover.com/products/protect' },
            { title: 'CoinCover Recover', href: 'https://www.coincover.com/products/recover' }
          ]
        },
        {
          title: 'Solutions',
          items: [
            { title: 'Exchanges', href: 'https://www.coincover.com/solutions/exchanges' },
            { title: 'Financial institutions', href: 'https://www.coincover.com/solutions/financial-institutions' },
            { title: 'Wallets', href: 'https://www.coincover.com/solutions/wallets' }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { title: 'Lost wallet access', href: 'https://www.coincover.com/risks/lost-wallet-access' },
            { title: 'Crypto fraud', href: 'https://www.coincover.com/risks/crypto-fraud' }
          ]
        }
      ]
    },
    {
      title: 'For people',
      href: null,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Products',
          items: [
            { title: 'What is CoinCover Recover?', href: 'https://www.coincover.com/consumers/products/recover' },
            { title: 'What is CoinCover Protect?', href: 'https://www.coincover.com/consumers/products/protect' }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { title: 'Lost wallet access', href: 'https://www.coincover.com/consumers/risks/lost-access' },
            { title: 'Crypto fraud', href: 'https://www.coincover.com/consumers/risks/crypto-fraud' }
          ]
        }
      ]
    },
    {
      title: 'Knowledge Hub',
      href: null,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Resources',
          items: [
            { title: 'Developer portal', href: 'https://developer.coincover.com/' },
            { title: 'Trust Center', href: 'https://app.eu.vanta.com/coincover/trust/z6bu6okf6urtu438efcwz' },
            { title: 'Assets we protect', href: 'https://www.coincover.com/knowledge-hub/assets-we-protect' },
            { title: 'Crypto FAQs', href: 'https://www.coincover.com/knowledge-hub/faqs' },
            { title: 'Glossary', href: 'https://www.coincover.com/knowledge-hub/glossary' }
          ]
        },
        {
          title: 'Partners',
          items: [
            { title: 'Partner directory', href: 'https://www.coincover.com/partners/partner-directory' }
          ]
        },
        {
          title: 'Insight',
          items: [
            { title: 'Blog', href: 'https://www.coincover.com/blog' },
            { title: 'The Trust Factor', href: 'https://www.coincover.com/knowledge-hub/reports/the-trust-factor' }
          ]
        }
      ]
    },
    {
      title: 'About us',
      href: 'https://www.coincover.com/about',
      hasSubmenu: false
    },
    {
      title: 'Contact us',
      href: 'https://www.coincover.com/contact',
      hasSubmenu: false
    }
  ];

  return (
    <>
      {/* Notification Banner */}
      <div className="mobile-notification-banner">
        <div className="mobile-notification-banner__content">
          <div className="mobile-notification-banner__marquee">
            {[...Array(3)].map((_, index) => (
              <a
                key={index}
                href="https://www.coincover.com/blog/beware-of-fraudsters-impersonating-coincover"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-notification-banner__link"
              >
                <span className="mobile-notification-banner__text">
                  Beware of fraudsters impersonating CoinCover. We will never cold-call you and ask for your personal information. Read more here.
                </span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mobile-notification-banner__icon"
                >
                  <path
                    d="M9.9987 3.83203L8.8237 5.00703L13.4737 9.66536H3.33203V11.332H13.4737L8.8237 15.9904L9.9987 17.1654L16.6654 10.4987L9.9987 3.83203Z"
                    fill="white"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Factor Banner */}
      <div className="mobile-trust-banner">
        <div className="mobile-trust-banner__container">
          <span className="mobile-trust-banner__icon">«</span>
          <p className="mobile-trust-banner__text">
            The Trust Factor. Will regulation take crypto to the next level? Read the full report
          </p>
          <span className="mobile-trust-banner__dots">⋮</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="mobile-header">
        <div className="mobile-header__container">
          <div className="mobile-header__logo">
            <img src="/assets/svg/header_logo_white.svg" alt="CoinCover Logo" className="mobile-header__logo-icon" />
            <img src="/assets/svg/header_logo_text_white.svg" alt="CoinCover Text" className="mobile-header__logo-text" />
          </div>
          
          <button 
            className="mobile-header__menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`mobile-header__hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu__content">
            {navigationItems.map((item, index) => (
              <div key={index} className="mobile-menu__item-wrapper">
                {item.hasSubmenu ? (
                  <div className="mobile-menu__item-with-submenu">
                    <button 
                      className="mobile-menu__item mobile-menu__item--expandable"
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <span>{item.title}</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={`mobile-menu__expand-icon ${expandedItems[item.title] ? 'expanded' : ''}`}
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    {expandedItems[item.title] && (
                      <div className="mobile-menu__submenu">
                        {item.submenu.map((submenu, subIndex) => (
                          <div key={subIndex} className="mobile-menu__submenu-section">
                            <h4 className="mobile-menu__submenu-title">{submenu.title}</h4>
                            <ul className="mobile-menu__submenu-list">
                              {submenu.items.map((subItem, subItemIndex) => (
                                <li key={subItemIndex} className="mobile-menu__submenu-item">
                                  <a 
                                    href={subItem.href} 
                                    className="mobile-menu__submenu-link"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={item.href} 
                    className="mobile-menu__item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            
            <div className="mobile-menu__cta">
              <Button variant="primary" size="large" className="mobile-menu__cta-button">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;