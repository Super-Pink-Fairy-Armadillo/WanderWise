import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Trip from "./components/Trip.jsx";

// using routes instead of switch
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/:user" element={<Dashboard />} />
        {/* endpoint / for dashboard, user is userId */}
        {/* on login/signin submit, navitage to endpoint with userid like this ^ */}
        <Route path="/trip/:tripId" element={<Trip />} />
        {/* passing in tripId when clicking on component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;