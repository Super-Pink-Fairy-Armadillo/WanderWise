import React,{useState} from "react";
import EventList from "./EventList-component.jsx";
import CreatEvent from "./Create-Trip-component.jsx";

const HeadTrip = () => {
    const [events, setEvent] = useState([]);

    const addEvent = (newEvent)=>{
        setEvent([...events, newEvent])
    };

    return (
      <div className="container">
        <h1 className="heading"> Trip name </h1>
        <div className = "main-content">
          <CreatEvent addEvent ={addEvent}/>
          <EventList events = {events} />
        </div>
      </div>
    );
  };

  export default HeadTrip;