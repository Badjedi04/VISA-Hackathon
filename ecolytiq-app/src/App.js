import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CarbonFootprintTracker from './pages/CarbonFootprintTracker';
import ActivityLog from './pages/ActivityLog';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import About from './pages/About';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tracker">Carbon Footprint Tracker</Link></li>
              <li><Link to="/activity-log">Activity Log</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<CarbonFootprintTracker />} />
            <Route path="/activity-log" element={<ActivityLog />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
