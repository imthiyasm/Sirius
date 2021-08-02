import React, { useState, useEffect } from 'react';
import { fetchFeaturedDestinations } from '../API';
import { APPCONTENT } from '../constants';

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinationsData = async () => {
      const destinationsData = await fetchFeaturedDestinations();
      if (destinationsData?.length > 0) setDestinations(destinationsData);
    }
    getDestinationsData();
  }, []);

  console.log('destinations= ', destinations);

  return (
    destinations.length > 0 ? (
      <div className="container featured-section" id="nav2">
        <h2>
          {APPCONTENT.FEATURED_HEADER}
        </h2>
        <div className="featured-content">
          {
            destinations?.map((dest) => (
              <div className="featured-col">
                <img src={dest?.imageUrl} alt={dest?.city} loading="eager" />
                <p>{dest?.city}</p>
              </div>
            ))
          }
        </div>
      </div>
    ) : null
  );
}

export default FeaturedDestinations;
