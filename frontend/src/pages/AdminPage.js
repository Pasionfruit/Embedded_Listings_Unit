import React from 'react';
import Card from '../components/Card';

const AdminPage = () => {
  const dummyListings = [
    {
      id: 1,
      heading: 'Astound Internet First',
      imageUrl: 'https://via.placeholder.com/300',
      speed: '50 Mbps',
      description: 'Astound Internet First: Aimed at low-income families, offering reliable speeds for school and work at a reduced rate.',
      price: 10,
      offerUrl: 'https://www.speedtest.net/',
    },
    {
      id: 2,
      heading: 'Test 2',
      imageUrl: 'https://via.placeholder.com/300',
      speed: '50 Mbps',
      description: 'Astound Internet First: Aimed at low-income families, offering reliable speeds for school and work at a reduced rate.',
      price: 10,
      offerUrl: 'https://www.speedtest.net/',
    },
  ];

  return (
    <div style={{ padding: '20px'}}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {dummyListings.map((listing) => (
          <Card
            key={listing.id}
            heading={listing.heading}
            imageUrl={listing.imageUrl}
            speed={listing.speed}
            description={listing.description}
            price={listing.price}
            offerUrl={listing.offerUrl}
          />
        ))}
      </div>
      <button> Add new Listing </button>
    </div>
  );
};

export default AdminPage;
