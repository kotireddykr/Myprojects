import React, { useState, useContext, useEffect } from 'react';
import './Card.css';
// import FavouriteContext from '../favourites/FavouriteContext';
import FavouriteContext from '../favourites/FavouriteContext';

const Card = ({
  icon,
  description,
  hashtag,
  link,
  benefits,
  appName,
  caseStudyLink,
  offeringDeckLink,
  category,
}) => {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setIsFavourite(favourites.includes(appName));
  }, [favourites, appName]);

  const handleStarClick = () => {
    if (isFavourite) {
      removeFavourite(appName);
    } else {
      addFavourite(appName);
    }
  };

  const handleCardClick = () => {
    if (!showOverlay) {
      window.open(link);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleInfoClick = (e) => {
    e.stopPropagation();
    setShowOverlay(!showOverlay);
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`card-container ${showOverlay ? 'overlay-active' : ''}`}>
      <div className="card" onClick={handleCardClick}>
        <div className="card-content">
          <div className="card-icons" onClick={stopPropagation}>
            {category !== 'Artefacts' && (
              <img
                src="/assets/card_info.png"
                alt="info-icon"
                onClick={handleInfoClick}
              />
            )}
            <img
              src={isFavourite ? '/assets/star_fav.png' : '/assets/star.png'}
              onClick={handleStarClick}
              alt="star-icon"
            />
          </div>
          <img src={icon} alt="icon" className="card-image" />
          <p className="card-description">{description}</p>
          <p className="card-tags">{hashtag}</p>
        </div>
        {showOverlay && (
          <div className="overlay" onClick={handleInfoClick}>
            <div className="overlay-content" onClick={handleOverlayClick}>
              <h3>{appName}</h3>
              <h4>Benefits</h4>
              <ul className="benefits-list">
                {benefits.split('\n').map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <div className="icon-container">
                <div className="icon-wrapper">
                  <a href={caseStudyLink} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/pdf.svg" alt="pdf-icon" className="pdf-icon" />
                    <div className="pdf-label">Case Study</div>
                  </a>
                </div>
                <div className="icon-wrapper">
                  <a href={offeringDeckLink} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/pdf.svg" alt="pdf-icon" className="pdf-icon" />
                    <div className="pdf-label">Offering Deck</div>
                  </a>
                </div>
              </div>
              <button onClick={handleInfoClick} className="close-btn">
                x
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;