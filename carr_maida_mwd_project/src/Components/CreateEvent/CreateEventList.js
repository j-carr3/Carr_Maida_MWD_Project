import React, { useEffect, useState } from "react";
import {
  createEvent,
  getAllEvents,
  removeEvent
} from "../../Services/EventService";
import CreateEventForm from "./CreateEventForm";

/* STATEFUL PARENT COMPONENT */
const EventList = () => {
  // Variables in the state to hold data
  const [events, setEvents] = useState([]);
  const [name, setName] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllEvents().then((events) => {
      console.log(events);
      setEvents(events);
    });

    // getById("OXsgE8Mhjc").then((event) => {
    //   console.log(event);
    //   setEvent(event);
    // });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (name && add) {
      createEvent(name).then((newEvent) => {
        setAdd(false);
        // Add the newly created event to the events array
        // to render the new list of events (thru spread/concatination)
        setEvents([...events, newEvent]);

        //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
        //events = events.push(event)
        //setEvents(events)
      });
    }

    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old events list to take out selected event
      const newEvents = events.filter((event) => event.id !== remove);
      setEvents(newEvents);

      removeEvent(remove).then(() => {
        console.log("Removed event with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [name, events, add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create event and
    // re-render list with new event
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setName(e.target.value);
  };

  return (
    <div>
      <hr />
      This is the main list parent component.
      <div>
        {events.length > 0 && (
          <ul>
            {events.map((event) => (
              <div>
                <span>
                  {/* Using getter for event Object to display name */}
                  <li key={event.id}>{event.get("name")}</li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of event for remove state variable*/}
                  <button
                    onClick={(e) => {
                      // Set remove variable and trigger re-render
                      setRemove(event.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      {/* Stateless Child component passing up events from form */}
      <CreateEventForm onClick={onClickHandler} onChange={onChangeHandler} />
    </div>
  );
};

export default EventList;
