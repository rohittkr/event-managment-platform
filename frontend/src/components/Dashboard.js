import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>📅 Event Dashboard</h2>
      <p>View and manage upcoming events.</p>
      <div className="event-list">
        <div className="event-item">🎊 Diwali Celebration - Nov 12</div>
        <div className="event-item">🎄 Christmas Party - Dec 25</div>
        <div className="event-item">🎭 Holi Festival - March 8</div>
      </div>
      <Link to="/create-event" className="btn">Create New Event</Link>
    </div>
  );
};

export default Dashboard;
