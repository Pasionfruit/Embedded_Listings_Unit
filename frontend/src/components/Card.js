import React from 'react';

const Card = ({ title, description, price, imageUrl, attributes }) => (
  <div className="card">
    <img src={imageUrl} alt={title} />
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className="text-green-600 font-bold">${price}</p>
    <div>
      {attributes && attributes.map((attr, index) => (
        <span key={index} className="card-attribute">
          {attr}
        </span>
      ))}
    </div>
  </div>
);

export default Card;

