import React from "react";

const TripCard = ({ tripInfo }) => {
    const { _id, tripName, tripLocation, startDate, endDate } = tripInfo;
    const formattedStart = new Date(startDate).toLocaleDateString();
    const formattedEnd = new Date(endDate).toLocaleDateString();
    return (
        <div class='tripCard'>
        <h2 class='tripCardName'>{tripName}</h2>
        <p class='tripCardLocation'>{tripLocation}</p>
        <p class='tripCardDates'>{formattedStart} - {formattedEnd}</p>
        </div>
    );
};

export default TripCard;