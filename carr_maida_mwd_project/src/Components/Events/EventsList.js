import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import {getAllEvents} from "../../Services/EventService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        NAME
                    </TableCell>
                    <TableCell align="right">
                        LOCATION
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {events.map((event) => (
                    <TableRow
                        key={event.id}
                        sx={{ '&:last-child td, &:last-child th':
                            { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {event.get("name")}
                        </TableCell>
                        <TableCell align="right">
                            {event.get("location")}
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
      )}
      {events.length > 0 && (
        <ol>
           {events.map((event) => {
             return <li key={event.id}>
               Name: <Link to={`/events/${event.id}`}>{event.get("event_name")}</Link> | Host: {event.get("host").id} | Location: {event.get("event_location")}
             </li>
           })}
         </ol>
      )}
    </div>
  );
}

//for now we are just displaying the host_id, but once we make this a foreign key that points to users, it will display the host's name rather than their id

export default EventsData;
