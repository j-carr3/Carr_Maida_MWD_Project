import React from "react";

/* STATELESS CHILD COMPONENT */
const EventForm = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      This is the form for creating a new event
      <form>
		<p><label for="event_name">Event Name: </label>
			<input type="text" name="event_name"/>
		</p>	
		<p><label for="event_date_time">When: </label>
			<input type="datetime-local" name="event_date_time"/>
		</p>
		<p><label for="event_location">Where: </label>
			<input type="text" name="event_location"/>
		</p>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
