import React, { useEffect, useState } from "react";
import { createEvent } from "../../Services/EventService";
import EventForm from "./CreateEventForm";
import { useNavigate } from "react-router-dom";

const EventCreation = () => {
	const navigate = useNavigate();

	const [newEvent, setNewEvent] = useState({
		event_name: "",
		event_date_time: "",
		event_location: ""
	});

	const [add, setAdd] = useState(false);

	useEffect(() => {
		if (newEvent && add) {
			createEvent(newEvent).then((eventCreated) => {
				if (eventCreated) {
					alert(
						`${eventCreated.get("event_name")} created!`
					);
					navigate("/");
				}
				setAdd(false);
			});
		}
	}, [navigate, newEvent, add]);

	const onChangeHandler = (e) => {
		e.preventDefault();
		console.log(e.target);
		const { name, value: newValue } = e.target;
		console.log(newValue);

		setNewEvent({
			...newEvent,
			[name]: newValue
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log("submitted: ", e.target);
		setAdd(true);
	};

	return (
		<div>
			<EventForm
				event={newEvent}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>
		</div>
	);
};

export default EventCreation;

