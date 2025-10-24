import React, { useState } from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  showClickIcon = true,
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled ? 'button--disabled' : '',
    isClicked ? 'button--clicked' : '',
    isHovered ? 'button--hovered' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (showClickIcon) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      {...props}
    >
      {children}
      {showClickIcon && isHovered && !isClicked && (
        <div className="button__hover-icon">
          <img 
            src="/assets/svg/white_round_hover_big_icon.svg" 
            alt="Hover" 
            className="button__hover-icon-img"
          />
        </div>
      )}
      {showClickIcon && isClicked && (
        <div className="button__click-icon">
          <img 
            src="/assets/svg/white_round_focus_big_icon.svg" 
            alt="Click" 
            className="button__click-icon-img"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
