import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TripCard from './TripCard.jsx';

function Dashboard() {
  // path="/:user"
  const { user } = useParams();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`/api/getAllTrips/${user}`)
      .then(response => response.json())
      .then(data => setTrips(data))
      .catch(error => console.error('Error fetching trips:', error));
  }, [user]); //should this just be empty to render once?
  // will rerender each time we navigate back to dashboard??
  
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
      <section class='header'>
        <h1>Dashboard</h1>
      </section>
      <a href={`/addTrip/${user}`}>
        <button id='addTrip'>+ Add Trip</button>
      </a>
      <section class='tripCards'>
        {dashboardCards}
      </section>
    </div>
  );
}

export default Dashboard;