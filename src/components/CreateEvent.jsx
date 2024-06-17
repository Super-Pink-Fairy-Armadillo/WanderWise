import React from "react";
//import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
// create a component create event
const CreatEvent = () => {
  const [data, setData] = useState({
    eventName: "",
    data: "",
    startTime: "",
    endTime: "",
  });

  // create a handler to be able to get the data from client
  // use method handleChange
  const handleChange = (event) => {
    event.preventDefault();
    // we are passing multiples elements
    // in this case need use a object
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  // this handler will take the information and send to data base
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/api/trip/:id/events', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     // reset, to be able to resgister another itinerary
  //     if (response.ok) {
  //       setData({
  //         eventName: "",
  //         date: "",
  //         startTime: "time",
  //         endTime: "time",
  //       });
  //     } else {
  //       console.error("Error addign treatment");
  //     }
  //   } catch (error) {
  //     console.error("Error addign treatment");
  //   }
  // };
  return (
     <form>
     <label>
		  		Itinerary event name:
		   		<input
		  		  type="text"
		   		  name= "eventName"
		  		  value={data.eventName}
		  		  onChange={handleChange}
		     />
			 </label>
       <div>
         <label>
		  		 Date:
		   		<input
		  		  type="date"
		   		  name= "date"
		  		  value={data.date}
		  		  onChange={handleChange}
		     />
			   </label>
       </div>
       <div>
       <label>
		  		 Start Time:
		   		<input
		  		  type="time"
		   		  name= "startTime"
		  		  value={data.startTime}
		  		  onChange={handleChange}
		     />
			   </label>
       </div>
       <div>
       <label>
		  		 End Time:
		   		<input
		  		  type="time"
		   		  name= "endTime"
		  		  value={data.endTime}
		  		  onChange={handleChange}
		     />
			   </label>
       </div>
       <button type="submit">Submit</button>
       </form>
  );
};

export default CreatEvent;