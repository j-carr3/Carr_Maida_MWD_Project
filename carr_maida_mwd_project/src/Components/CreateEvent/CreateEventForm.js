import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { theme } from "../Style/MUITheme.js";
import { ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CustomButton = styled(Button)(({theme}) => ({
	color: theme.palette.primary.main
	
}));


/* STATELESS CHILD COMPONENT */
const EventForm = ({ event, onChange, onSubmit }) => {
  return (
    <div>
		<link href="../Styles/fonts.css" type="text/css" rel="stylesheet" />
		<Box m={2} pt={3}>
		<ThemeProvider theme={theme}>
    	<hr />
      	<h2 class="font">This is the form for creating a new event</h2>
      	<form onSubmit={onSubmit} autoComplete="off">
			<TextField 
				label= "Event Name"
				type="text"
				className="form-control"
				id="event-name-input"
				value={event.event_name}
				onChange={onChange}
				name="event_name"
				placeholder="event name"
				required
				margin="normal"
				//class="font"
			/>
			<br/>
			<br/>
			<TextField
				label= "When"
				type="datetime-local"
				className="form-control"
				id="event-datetime-input"
				value={event.event_date_time}
				onChange={onChange}
				name="event_date_time"
				required
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<br/>
			<br/>
			<TextField
				label="Where"
				type="text"
				className="form-control"
				id="event-location-input"
				value={event.event_location}
				onChange={onChange}
				name="event_location"
				placeholder="event location"
				required
			/>
			<br/>
			<br/>
			<div className="form-group">
				<CustomButton type="submit" variant="contained" style={{color: "white"}} className="btn btn-primary" onSubmit={onSubmit}>
					Submit
				</CustomButton>
			</div>
		</form>
		</ThemeProvider>
		</Box>
	</div>
	);
};

export default EventForm;



