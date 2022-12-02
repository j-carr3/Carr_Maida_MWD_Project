import React from "react";

/* STATELESS CHILD COMPONENT */
const EventForm = ({ event, onChange, onSubmit }) => {
  return (
    <div>
    	<hr />
      	This is the form for creating a new event
      	<form onSubmit={onSubmit} autoComplete="off">
			<div className="form-group">
				<label>Event Name: </label>
				<br />
				<input
					type="text"
					className="form-control"
					id="event-name-input"
					value={event.event_name}
					onChange={onChange}
					name="event_name"
					placeholder="event name"
					required
				/>
			</div>
			<div className="form-group">
				<label>When: </label>
				<br />
				<input
					type="datetime-local"
					className="form-control"
					id="event-datetime-input"
					value={event.event_date_time}
					onChange={onChange}
					name="event_date_time"
					placeholder="event date and time"
					required
				/>
			</div>
			<div className="form-group">
				<label>Where: </label>
				<br />
				<input 
					type="text"
					className="form-control"
					id="event-location-input"
					value={event.event_location}
					onChange={onChange}
					name="event_location"
					placeholder="event location"
					required
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
					Submit
				</button>
			</div>
		</form>
	</div>
	);
};

export default EventForm;



