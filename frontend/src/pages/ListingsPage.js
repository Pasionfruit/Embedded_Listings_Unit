import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/listings')
    .then((response) => response.json())
    .then((data) => {
      setListings(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching listings:', err);
      setError('Failed to load listings');
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {listings.map((listing) => (
        <Card
          key={listing.id}
          heading={listing.heading}
          imageUrl={listing.image_url}
          speed={listing.speed}
          description={listing.description}
          price={listing.price}
          offerUrl={listing.offer_Url}
        />
      ))}
    </div>
  );
};

export default ListingsPage;
