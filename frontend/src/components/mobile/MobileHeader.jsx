import React, { useState } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';
import Icon from '../ui/Icon';
import { navigationConfig, getLinkProps } from '../../config/navigation';
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

  const navigationItems = navigationConfig.main;

  return (
    <>
      {/* Notification Banner */}
      <div className="mobile-notification-banner">
        <div className="mobile-notification-banner__content">
          <div className="mobile-notification-banner__marquee">
            {[...Array(3)].map((_, index) => (
              <Link
                key={index}
                href="https://www.coincover.com/blog/beware-of-fraudsters-impersonating-coincover"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-notification-banner__link"
                variant="white"
              >
                <span className="mobile-notification-banner__text">
                  Beware of fraudsters impersonating CoinCover. We will never cold-call you and ask for your personal information. Read more here.
                </span>
                <Icon name="arrow-right" size="small" color="white" />
              </Link>
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
            <Icon 
              name={isMenuOpen ? 'close' : 'menu'} 
              size="medium" 
              color="white"
            />
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
                      <Icon 
                        name="arrow-down" 
                        size="small" 
                        color="white"
                        className={`mobile-menu__expand-icon ${expandedItems[item.title] ? 'expanded' : ''}`}
                      />
                    </button>
                    
                    {expandedItems[item.title] && (
                      <div className="mobile-menu__submenu">
                        {item.submenu.map((submenu, subIndex) => (
                          <div key={subIndex} className="mobile-menu__submenu-section">
                            <h4 className="mobile-menu__submenu-title">{submenu.title}</h4>
                            <ul className="mobile-menu__submenu-list">
                              {submenu.items.map((subItem, subItemIndex) => (
                                <li key={subItemIndex} className="mobile-menu__submenu-item">
                                  <Link 
                                    href={subItem.href} 
                                    className="mobile-menu__submenu-link"
                                    onClick={() => setIsMenuOpen(false)}
                                    {...getLinkProps(subItem.href, subItem.external)}
                                    variant="secondary"
                                  >
                                    {subItem.title}
                                    {subItem.external && (
                                      <Icon name="external-link" size="small" color="currentColor" />
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="mobile-menu__item"
                    onClick={() => setIsMenuOpen(false)}
                    {...getLinkProps(item.href)}
                    variant="white"
                  >
                    {item.title}
                  </Link>
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