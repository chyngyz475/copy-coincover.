import React, { useState } from 'react';
import './Image.css';

const Image = ({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  loading = 'lazy',
  fallback = '/assets/img/placeholder.png',
  variant = 'default',
  size = 'medium',
  onClick,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleLoad = () => {
    setImageLoading(false);
  };

  const imageClasses = [
    'image',
    `image--${variant}`,
    `image--${size}`,
    imageLoading ? 'image--loading' : '',
    imageError ? 'image--error' : '',
    className
  ].filter(Boolean).join(' ');

  const imageSrc = imageError ? fallback : src;

  return (
    <div className="image__wrapper" onClick={onClick}>
      {imageLoading && (
        <div className="image__loading">
          <div className="image__spinner"></div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={imageClasses}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default Image;
