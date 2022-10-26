import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// we have create, read all, read by id, and delete, but for now only read and delete actually connect to our database
// in the future, submitting and event will send the event to the database

// CREATE operation - new event with Name
export const createEvent = (Name) => {
  console.log("Creating: ", Name);
  const Event = Parse.Object.extend("events");
  const event = new Event();
  // using setter to UPDATE the object
  event.set("name", Name);
  return event.save().then((result) => {
    // returns new Event object
    return result;
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


