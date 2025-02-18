// src/pages/ListingsPage.js
import React from 'react';
import Card from '../components/Card';

const ListingsPage = () => {
  const dummyListings = [
    {
      id: 1,
      title: 'Luxury Apartment',
      description: 'A beautiful apartment in downtown.',
      price: 2500,
      imageUrl: 'https://via.placeholder.com/300',
      attributes: ['2 Beds', '2 Baths', '1,200 sqft'],
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      description: 'A peaceful cottage in the countryside.',
      price: 1500,
      imageUrl: 'https://via.placeholder.com/300',
      attributes: ['3 Beds', '1 Bath', '800 sqft'],
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {dummyListings.map((listing) => (
        <Card
          key={listing.id}
          title={listing.title}
          description={listing.description}
          price={listing.price}
          imageUrl={listing.imageUrl}
          attributes={listing.attributes}
        />
      ))}
    </div>
  );
};

export default ListingsPage;
