import React from "react";
import { useNavigate } from 'react-router-dom';

const TripCard = ({ tripInfo }) => {
    const {tripName, tripLocation, startDate, endDate } = tripInfo;
    const formattedStart = new Date(startDate).toLocaleDateString();
    const formattedEnd = new Date(endDate).toLocaleDateString();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/trip`)
    }
    
    return (
        <div class='tripCard' onClick={handleClick}>
        <h2 class='tripCardName'>{tripName}</h2>
        <p class='tripCardLocation'>{tripLocation}</p>
        <p class='tripCardDates'>{formattedStart} - {formattedEnd}</p>
        </div>
    );
};

// const TripCard = ({ tripInfo }) => {
//     const { _id, tripName, tripLocation, startDate, endDate } = tripInfo;
//     const formattedStart = new Date(startDate).toLocaleDateString();
//     const formattedEnd = new Date(endDate).toLocaleDateString();

//     const handleClick = () => {
//         useNavigate(`/trip/${_id}`)
//     }
    
//     return (
//         <div class='tripCard' onClick={handleClick}>
//         <h2 class='tripCardName'>{tripName}</h2>
//         <p class='tripCardLocation'>{tripLocation}</p>
//         <p class='tripCardDates'>{formattedStart} - {formattedEnd}</p>
//         </div>
//     );
// };

export default TripCard;