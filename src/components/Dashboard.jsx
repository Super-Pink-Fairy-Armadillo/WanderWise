// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import TripCard from './TripCard.jsx';


function Dashboard() {
  // path="/:user"
  const trips = [
    {
      tripName: 'Spring Break',
      tripLocation: 'Miami, FL',
      startDate: '2024-03-12',
      endDate: '2024-03-21'
    },
    {
      tripName: 'Birthday Trip',
      tripLocation: 'Las Vegas, NV',
      startDate: '2024-08-12',
      endDate: '2024-08-20'
    },
    {
      tripName: 'Family Reunion',
      tripLocation: 'Chicago, IL',
      startDate: '2024-10-25',
      endDate: '2024-10-30'
    },
  ]

  // pass entire trip object to each card, pull info from the trip card in component
  const dashboardCards = trips.map((trip, i) => {
    return (
        <TripCard
          key={i}
          tripInfo={trip}
        />
    )
});

const toAddTripPage = () => {
  //open addTrip.html
  window.location.href = '/addTrip.html';
};

const toLogin = () => {
  //open login.html
  window.location.href = '/login.html';

}
//addTrip with sending actual html form
return (
  <div>
    <section class='dashHeader'>
      <h1>WanderWise Dashboard</h1>
    </section>
    <section class='dashBody'>
      <button id='addTrip' onClick={toAddTripPage}>+ Create a New Trip</button>
      <section class='tripCards'>
        {dashboardCards}
      </section>
      <button id='logout' onClick={toLogin}>Logout</button>
    </section>
    
  </div>
);
}

//using backend
// function Dashboard() {
//   // path="/:user"
//   const { user } = useParams();
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     fetch(`/api/getAllTrips/${user}`)
//       .then(response => response.json())
//       .then(data => setTrips(data))
//       .catch(error => console.error('Error fetching trips:', error));
//   }, [user]); //should this just be empty to render once?
//   // will rerender each time we navigate back to dashboard??
  
//   // pass entire trip object to each card, pull info from the trip card in component
//   const dashboardCards = trips.map((trip, i) => {
//     return (
//         <TripCard
//           key={i}
//           tripInfo={trip}
//         />
//     )
// });

// //addTrip with sending actual html form
// return (
//   <div>
//     <section class='header'>
//       <h1>Dashboard</h1>
//     </section>
//     <a href="/public/addTrip.html">
//     <button id='addTrip'>+ Add Trip</button>
//     </a>
//     <section class='tripCards'>
//       {dashboardCards}
//     </section>
//   </div>
// );

//   return (
//     <div>
//       <section class='header'>
//         <h1>Dashboard</h1>
//       </section>
//       <a href={`/addTrip/${user}`}>
//         <button id='addTrip'>+ Add Trip</button>
//       </a>
//       <section class='tripCards'>
//         {dashboardCards}
//       </section>
//     </div>
//   );
// }

export default Dashboard;