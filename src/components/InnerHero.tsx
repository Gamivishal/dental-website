import React from 'react';
import defaultBg from '../assets/images/Waiting.jpeg';

interface InnerHeroProps {
  pageTitle: string;
  badgeText: string;
  subtitle: string;
  currentPageName: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export const InnerHero: React.FC<InnerHeroProps> = ({
  pageTitle,
  badgeText,
  subtitle,
  currentPageName,
  bgImage = defaultBg,
  children,
}) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section 
      key={currentPageName}
      className="inner-page-hero-premium"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent deep teal gradient overlay */}
      <div className="inner-hero-overlay" />
      
      <div className="inner-hero-content">
        {/* Breadcrumb pill */}
        <div className="inner-hero-breadcrumb">
          <a href="/" onClick={handleHomeClick} className="breadcrumb-link">
            🏠 Home
          </a>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">{currentPageName}</span>
        </div>

        {/* Small capsule label with subtle gold accents */}
        <div className="inner-hero-badge-capsule">
          <span className="badge-dot" />
          <span className="badge-text">{badgeText}</span>
          <span className="badge-dot" />
        </div>

        {/* Large luxury serif headline */}
        <h1 className="inner-hero-title">{pageTitle}</h1>

        {/* Smaller white subtitle */}
        <p className="inner-hero-subtitle">{subtitle}</p>

        {/* Optional action buttons */}
        {children && <div className="inner-hero-actions">{children}</div>}
      </div>
    </section>
  );
};
