import React, { useEffect, useState } from "react";
import {getAllEvents} from "../../Services/EventService";

function EventsData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((result) => {
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
              {event.get("event_name")} | host: {event.get("host_id")} |
              place: {event.get("event_location")} 
			</li>
          ))}
        </ol>
      )}
    </div>
  );
}

//for now we are just displaying the host_id, but once we make this a foreign key that points to users, it will display the host's name rather than their id

export default EventsData;
