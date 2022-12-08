import Parse from "parse";
import { useNavigate } from "react-router-dom"; 
/* SERVICE FOR PARSE SERVER OPERATIONS */

// we have create, read all, read by id, and delete, but for now only read and delete actually connect to our database
// in the future, submitting and event will send the event to the database

// CREATE operation - new event with Name
export const createEvent = (newEvent) => {
	const Event = Parse.Object.extend("events");
	const event = new Event();
  console.log("Event Date Time", new Date(newEvent.event_date_time));
  
	event.set("host", Parse.User.current());
	event.set("event_name", newEvent.event_name);
	event.set("event_date_time", new Date(newEvent.event_date_time));
	event.set("event_location", newEvent.event_location);


  return event.save()
  .then((eventResult) => {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + eventResult.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  });
};




// READ operation - get event by ID
export const getById = (id) => {
  const Event = Parse.Object.extend("events");
  const query = new Parse.Query(Event);
  return query.get(id).then((result) => {
    // return Event object with objectId: id
    return result;
  });
};

// READ operation - get all events in Parse class Event
export const getAllEvents = () => {
  const Event = Parse.Object.extend("events");
  const query = new Parse.Query(Event);
  return query.find().then((result) => {
    // returns array of Event objects
    return result;
  });
};

// DELETE operation - remove event by ID
export const removeEvent = (id) => {
  const Event = Parse.Object.extend("events");
  const query = new Parse.Query(Event);
  return query.get(id).then((event) => {
    event.destroy();
  });
};


