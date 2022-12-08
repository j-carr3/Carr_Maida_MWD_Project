import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import {theme} from "../Style/MUITheme.js"
import { ThemeProvider } from '@mui/material/styles';


const NavLinkStyled = styled('div')({
  marginRight: '10px',
  display: 'flex',
});

const LinkStyled = styled(Link)({
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginRight: '10px',
    "&:hover": {
      color: 'yellow',
      borderBottom: "1px solid white",
    },
});


function NavBar () {

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{ bgcolor: theme.palette.primary.main}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Web Dev Event Planner
          </Typography>
          <NavLinkStyled>
            <LinkStyled to="/"> 
              Home
            </LinkStyled>
            <LinkStyled to="/Events">
              Events
            </LinkStyled>
          </NavLinkStyled>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default NavBar;
