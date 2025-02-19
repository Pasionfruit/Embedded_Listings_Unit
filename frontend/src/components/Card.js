import React from 'react';

const Card = ({ heading, description, speed, price, imageUrl, offerUrl }) => (
  <div className="card">
    <h2 className="card-heading">{heading}</h2>
    <img src={imageUrl} alt={heading} />
    <p>Speeds up to {speed}</p>
    <p>{description}</p>
    <p>Pricing starting from ${price}</p>
    <button onClick={() => window.open(offerUrl, '_blank')}>View Plans</button>
  </div>
);

export default Card;

