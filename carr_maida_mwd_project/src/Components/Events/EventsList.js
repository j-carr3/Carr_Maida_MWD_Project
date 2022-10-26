import React, { useEffect, useState } from "react";
import getEvents from "../../Services/EventService";

/* TODO: Change the fields we are pulling from back4app */
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
              {event.get("event_name")} | host: {event.get("host_id")} | date: {event.get("event_date_time")} |
              place: {event.get("event_location")} 
			</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default EventsData;