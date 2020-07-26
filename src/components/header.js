import React from 'react';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Link
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    height: 80,
  },
  heading: {

  },
  button: {
    // margin: theme.spacing(1),
    backgroundColor: "#21b6ae",
    color: "white"
  }
});

const Header = () => {
  let history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        > 
          <Typography variant="h6" className={classes.heading}>
            <Link underline="none" onClick={() => handleClick("/")} color="white">
              Products
            </Link>
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleClick("/add")}
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Grid>  
      </Toolbar>
    </AppBar>
  )
}

export default Header;