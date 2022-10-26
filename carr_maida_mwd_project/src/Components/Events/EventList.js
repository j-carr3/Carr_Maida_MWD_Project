import React, { useEffect, useState } from "react";
import getEvents from "/src/Services/EventService.js";

function EventsData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((result) => {
      setEvents(result);
    });
  }, []);

  return (
    <div>
      <h1>Events</h1>

      {events.length > 0 && (
        <ol>
          {events.map((event) => (
            <li key={event.objectId}>
              {event.get("name")} | email: {event.get("email")} | house:{" "}
              {event.get("house")} | major: {event.get("major")}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default EventsData;
