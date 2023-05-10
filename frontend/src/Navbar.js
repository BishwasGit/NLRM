import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    textDecoration: 'none',
    color : 'white',
    float : 'right'
  }
});

const Navbar = () => {
 const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Button color="inherit"><Link to="/Form" className={classes.list}>Show Form</Link></Button>
          <Button color="inherit"><Link to="/Table" className={classes.list}>Show List</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
