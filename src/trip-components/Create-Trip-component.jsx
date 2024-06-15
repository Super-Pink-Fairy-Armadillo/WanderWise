import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const HeadTrip = () => {
  return (
    <Router>
      <h1 className="heading"> Trip name </h1>
    </Router>
  );
};

// create a component create event
const CreatEvent = () => {
  const [data, setData] = useState({
    itinerary: "",
    data: "",
    startTime: "time",
    endTime: "time",
  });

  // create a handler to be able to get the data from client
  // use method handleChange
  const handleChange = (event) => {
    event.preventDefaut();
    // we are passing multiples elements
    // in this case need use a object
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  // this handler will take the information and send to data base
  const handleSubmit = async (event) => {
    event.preventDefaut();
    try {
        const response = await fecth('http://localhost:8080',{
			   method: 'POST',
			   headers: {
				   'Content-Type': 'application/json'
			   },
			   body: JSON.stringify(data)
		   });
           // reset, to be able to resgister another itinerary
        if(response.ok){
            setData({
                itinerary: "",
                data: "",
                startTime: "time",
                endTime: "time",
            });
        }else{
            console.error('Error addign treatment');
        }
    } catch (error) {
        console.error('Error addign treatment');
    }

  };
    return(
        <form onSubmit={handleSubmit}></form>
  );
};

export default HeadTrip;
