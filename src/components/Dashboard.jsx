import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';

function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('/getAllTrips')
      .then(response => response.json())
      .then(data => setTrips(data))
      .catch(error => console.error('Error fetching trips:', error));
  }, []);
  // will rerender each time we go back to the dashboard -- is there a way to keep it unless a new trip is added?
  
  // pass entire trip object to each card, pull info from the trip card in component
  const dashboardCards = trips.map((trip, i) => {
    return (
        <TripCard
          key={i}
          tripInfo={trip}
        />
    )
});

  return (
    <div>
      <h1>Dashboard</h1>
      {dashboardCards}
    </div>
  );
}

export default Dashboard;