import React from 'react';
import './Link.css';

const Link = ({ 
  children, 
  href, 
  target = '_self',
  rel = '',
  className = '',
  variant = 'default',
  size = 'medium',
  onClick,
  disabled = false,
  ...props 
}) => {
  const linkClasses = [
    'link',
    `link--${variant}`,
    `link--${size}`,
    disabled ? 'link--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (disabled) {
    return (
      <span className={linkClasses} {...props}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={linkClasses}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
