// Navigation configuration
export const navigationConfig = {
  main: [
    {
      title: 'For institutions',
      href: null,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Products',
          items: [
            { 
              title: 'CoinCover Recover for Institutions', 
              href: 'https://www.coincover.com/products/recover-for-institutions' 
            },
            { 
              title: 'CoinCover Protect', 
              href: 'https://www.coincover.com/products/protect' 
            },
            { 
              title: 'CoinCover Recover', 
              href: 'https://www.coincover.com/products/recover' 
            }
          ]
        },
        {
          title: 'Solutions',
          items: [
            { 
              title: 'Exchanges', 
              href: 'https://www.coincover.com/solutions/exchanges' 
            },
            { 
              title: 'Financial institutions', 
              href: 'https://www.coincover.com/solutions/financial-institutions' 
            },
            { 
              title: 'Wallets', 
              href: 'https://www.coincover.com/solutions/wallets' 
            }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { 
              title: 'Lost wallet access', 
              href: 'https://www.coincover.com/risks/lost-wallet-access' 
            },
            { 
              title: 'Crypto fraud', 
              href: 'https://www.coincover.com/risks/crypto-fraud' 
            }
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
            { 
              title: 'What is CoinCover Recover?', 
              href: 'https://www.coincover.com/consumers/products/recover' 
            },
            { 
              title: 'What is CoinCover Protect?', 
              href: 'https://www.coincover.com/consumers/products/protect' 
            }
          ]
        },
        {
          title: 'Risks we protect against',
          items: [
            { 
              title: 'Lost wallet access', 
              href: 'https://www.coincover.com/consumers/risks/lost-access' 
            },
            { 
              title: 'Crypto fraud', 
              href: 'https://www.coincover.com/consumers/risks/crypto-fraud' 
            }
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
            { 
              title: 'Developer portal', 
              href: 'https://developer.coincover.com/',
              external: true
            },
            { 
              title: 'Trust Center', 
              href: 'https://app.eu.vanta.com/coincover/trust/z6bu6okf6urtu438efcwz',
              external: true
            },
            { 
              title: 'Assets we protect', 
              href: 'https://www.coincover.com/knowledge-hub/assets-we-protect' 
            },
            { 
              title: 'Crypto FAQs', 
              href: 'https://www.coincover.com/knowledge-hub/faqs' 
            },
            { 
              title: 'Glossary', 
              href: 'https://www.coincover.com/knowledge-hub/glossary' 
            }
          ]
        },
        {
          title: 'Partners',
          items: [
            { 
              title: 'Partner directory', 
              href: 'https://www.coincover.com/partners/partner-directory' 
            }
          ]
        },
        {
          title: 'Insight',
          items: [
            { 
              title: 'Blog', 
              href: 'https://www.coincover.com/blog' 
            },
            { 
              title: 'The Trust Factor', 
              href: 'https://www.coincover.com/knowledge-hub/reports/the-trust-factor' 
            }
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
  ],
  
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/coincoverglobal/',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/Coincoverglobal',
      icon: 'twitter'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@CoinCover3',
      icon: 'youtube'
    }
  ],
  
  footer: {
    company: [
      { title: 'About us', href: 'https://www.coincover.com/about' },
      { title: 'Contact us', href: 'https://www.coincover.com/contact' },
      { title: 'Careers', href: 'https://www.coincover.com/careers' },
      { title: 'Press', href: 'https://www.coincover.com/press' }
    ],
    products: [
      { title: 'CoinCover Protect', href: 'https://www.coincover.com/products/protect' },
      { title: 'CoinCover Recover', href: 'https://www.coincover.com/products/recover' },
      { title: 'For Institutions', href: 'https://www.coincover.com/products/recover-for-institutions' }
    ],
    resources: [
      { title: 'Knowledge Hub', href: 'https://www.coincover.com/knowledge-hub' },
      { title: 'Blog', href: 'https://www.coincover.com/blog' },
      { title: 'Developer Portal', href: 'https://developer.coincover.com/', external: true },
      { title: 'Trust Center', href: 'https://app.eu.vanta.com/coincover/trust/z6bu6okf6urtu438efcwz', external: true }
    ],
    legal: [
      { title: 'Privacy Policy', href: 'https://www.coincover.com/privacy-policy' },
      { title: 'Terms of Service', href: 'https://www.coincover.com/terms-of-service' },
      { title: 'Cookie Policy', href: 'https://www.coincover.com/cookie-policy' }
    ]
  }
};

// Helper functions
export const getNavigationItem = (title) => {
  return navigationConfig.main.find(item => item.title === title);
};

export const getSubmenuItems = (title) => {
  const item = getNavigationItem(title);
  return item?.submenu || [];
};

export const isExternalLink = (href) => {
  return href?.startsWith('http') && !href?.includes('coincover.com');
};

export const getLinkProps = (href, external = false) => {
  const isExternal = external || isExternalLink(href);
  return {
    href,
    target: isExternal ? '_blank' : '_self',
    rel: isExternal ? 'noopener noreferrer' : ''
  };
};
