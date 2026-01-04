import React from 'react';
import './Skeleton.scss';

const Skeleton = ({ width, height, className = '', variant = 'default' }) => {
  if (variant === 'card') {
    return (
      <div className={`skeleton-card ${className}`}>
        <div className="skeleton-card__image">
          <div className="skeleton skeleton-card__img"></div>
        </div>
        <div className="skeleton-card__content">
          <div className="skeleton skeleton-card__title"></div>
          <div className="skeleton skeleton-card__text"></div>
          <div className="skeleton skeleton-card__text short"></div>
        </div>
      </div>
    );
  }

  if (variant === 'project-card') {
    return (
      <div className={`skeleton-project-card ${className}`}>
        <div className="skeleton-project-card__image">
          <div className="skeleton skeleton-project-card__img"></div>
        </div>
        <div className="skeleton-project-card__content">
          <div className="skeleton skeleton-project-card__title"></div>
          <div className="skeleton skeleton-project-card__desc"></div>
          <div className="skeleton skeleton-project-card__desc short"></div>
          <div className="skeleton-project-card__buttons">
            <div className="skeleton skeleton-project-card__button"></div>
            <div className="skeleton skeleton-project-card__button"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`skeleton ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;
