import React from "react";

/* STATELESS CHILD COMPONENT */
const EventForm = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      This is the form for creating a new event
      <form>
        <input text="event" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
