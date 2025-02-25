import React, { useEffect, useState } from 'react';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('/api/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data); // Store the API response in state
      })
      .catch((error) => console.error('Error fetching listings:', error));
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
