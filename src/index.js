//import { application } from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import HeadTrip from './src/trip-components/Create-Trip-component';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HeadTrip/>} />
    </Routes>
  </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;