import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new event with Name
export const createEvent = (Name) => {
  console.log("Creating: ", Name);
  const Event = Parse.Object.extend("Event");
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
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  return query.get(id).then((result) => {
    // return Event object with objectId: id
    return result;
  });
};

// READ operation - get all events in Parse class Event
export const getAllEvents = () => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  return query.find().then((results) => {
    // returns array of Event objects
    return results;
  });
};

// DELETE operation - remove event by ID
export const removeEvent = (id) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  return query.get(id).then((event) => {
    event.destroy();
  });
};
