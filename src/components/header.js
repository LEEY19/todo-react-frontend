import React from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid
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
            Products
          </Typography>
          <Button
            variant="contained"
            // color="secondary"
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