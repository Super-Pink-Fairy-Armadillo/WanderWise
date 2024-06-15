import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Trip from "./components/Trip";

// using routes instead of switch
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Dashboard />} />
        {/* endpoint / for dashboard */}
        <Route path="/trip/:tripId" element={<Trip />} />
        {/* passing in tripId when clicking on component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;