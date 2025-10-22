import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderLogo from '../../assets/svg/header_logo.svg';
import HeaderHoverLogo from '../../assets/svg/header_hover_logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigationItems = [
    {
      title: 'For institutions',
      submenu: [
        {
          title: 'Products',
          items: [
            { name: 'CoinCover Recover for Institutions', href: '/institutions/recover' },
            { name: 'CoinCover Protect', href: '/institutions/protect' },
            { name: 'CoinCover Recover', href: '/institutions/recover-basic' }
          ]
        },
        {
          title: 'Solutions',
          items: [
            { name: 'Exchanges', href: '/solutions/exchanges' },
            { name: 'Financial institutions', href: '/solutions/financial' },
            { name: 'Wallets', href: '/solutions/wallets' }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { name: 'Lost wallet access', href: '/risks/lost-access' },
            { name: 'Crypto fraud', href: '/risks/fraud' }
          ]
        }
      ]
    },
    {
      title: 'For people',
      submenu: [
        {
          title: 'Products',
          items: [
            { name: 'What is CoinCover Recover?', href: '/people/recover' },
            { name: 'What is CoinCover Protect?', href: '/people/protect' }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { name: 'Lost wallet access', href: '/risks/lost-access' },
            { name: 'Crypto fraud', href: '/risks/fraud' }
          ]
        }
      ]
    },
    {
      title: 'Knowledge Hub',
      submenu: [
        {
          title: 'Resources',
          items: [
            { name: 'Developer portal', href: '/resources/developer' },
            { name: 'Trust Center', href: '/resources/trust' },
            { name: 'Assets we protect', href: '/resources/assets' },
            { name: 'Crypto FAQs', href: '/resources/faq' },
            { name: 'Glossary', href: '/resources/glossary' }
          ]
        },
        {
          title: 'Partners',
          items: [
            { name: 'Partner directory', href: '/partners' }
          ]
        },
        {
          title: 'Insight',
          items: [
            { name: 'Blog', href: '/blog' },
            { name: 'The Trust Factor', href: '/trust-factor' }
          ]
        }
      ]
    },
    { title: 'About us', href: '/about' },
    { title: 'Contact us', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src={HeaderLogo} 
            alt="CoinCover Logo" 
            className={styles.logoIcon}
          />
          <img 
            src={HeaderHoverLogo} 
            alt="CoinCover" 
            className={styles.logoText}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navigationItems.map((item, index) => (
              <li 
                key={index}
                className={styles.navItem}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link 
                  to={item.href || '#'} 
                  className={styles.navLink}
                >
                  {item.title}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div 
                    className={`${styles.dropdown} ${hoveredItem === index ? styles.dropdownActive : ''}`}
                  >
                    <div className={styles.dropdownContent}>
                      {item.submenu.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.dropdownSection}>
                          <h4 className={styles.dropdownTitle}>{section.title}</h4>
                          <ul className={styles.dropdownList}>
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  to={subItem.href} 
                                  className={styles.dropdownLink}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navigationItems.map((item, index) => (
            <div key={index} className={styles.mobileMenuItem}>
              <Link 
                to={item.href || '#'} 
                className={styles.mobileMenuLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.submenu && (
                <div className={styles.mobileSubmenu}>
                  {item.submenu.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={styles.mobileSubmenuSection}>
                      <h4 className={styles.mobileSubmenuTitle}>{section.title}</h4>
                      {section.items.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subItem.href} 
                          className={styles.mobileSubmenuLink}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileCta}>
            <Link 
              to="/contact" 
              className={styles.mobileCtaButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
