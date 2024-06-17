import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard.jsx';
//import App.jsx and delete the app function above later
//import styles to app.jsx when moved
import './sass/application.scss'

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
