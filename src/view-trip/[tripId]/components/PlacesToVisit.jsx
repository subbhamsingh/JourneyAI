



import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  if (!trip || !trip.tripData?.itinerary) {
    return <h1 className="text-center text-lg font-bold">Empty Trip</h1>;
  }

  const itinerary = trip.tripData.itinerary;
  const sortedDays = Object.keys(itinerary).sort((a, b) => parseInt(a) - parseInt(b));

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>
      {sortedDays.map((day) => (
        <div key={day} className="mb-6">
          <h3 className="font-bold text-lg mb-2">Day {day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {itinerary[day].places.map((place, index) => (
              <PlaceCardItem key={index} place={place} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlacesToVisit;



