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
        <TableContainer sx={{ margin: 'auto' }} component={Paper}>
        <Table sx={{ margin: 'auto' }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        NAME
                    </TableCell>
                    <TableCell>
                        LOCATION
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {events.map((event) => (
                    <TableRow
                        key={event.id}
                        sx={{ '&:last-child td, &:last-child th':
                            { margin: 'auto' } }}
                    >
                        <TableCell component="th" scope="row">
                        <Link to={`/events/${event.id}`}>{event.get("event_name")}</Link>
                        </TableCell>
                        <TableCell>
                            {event.get("event_location")}
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
      )}
    </div>
  );
}

//for now we are just displaying the host_id, but once we make this a foreign key that points to users, it will display the host's name rather than their id

export default EventsData;
