import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/events")
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Event Dashboard</h2>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.name} - {new Date(event.date).toDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
