import React,{useState} from "react";
import EventList from "./EventList.jsx";
import CreatEvent from "./CreateEvent.jsx";

const Trip = () => {
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

  export default Trip;







// const Trip = () => {
//     return (
//         <div>
//         <h1>Selected Trip</h1>
//         </div>
//     );
// }

// export default Trip;