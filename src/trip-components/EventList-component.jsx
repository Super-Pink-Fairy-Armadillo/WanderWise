import React from "react";
//import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const EventList = ({events}) =>{
    console.log('inside of event list')
    return(
        <div className="event-list">
            <h2>Events</h2>
            <ul>
                {events.map((event, index)=>(
                <li key ={index}>
                    <strong> {event.eventName}</strong><br/>
                    Date: {event.date}<br/>
                    Start Time: {event.starTime}<br/>
                    End Time: {event.endTime}<br/>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default EventList;