import React from 'react';
import { connect } from 'react-redux';
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
import * as ProductActions from '../store/actions/index';

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

const Header = (props) => {
  let history = useHistory();

  const handleClick = (route) => {
    props.addProduct();
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

const mapDispatchToProps = dispatch => {
  return {
    addProduct: () => dispatch(ProductActions.addProduct()),
  }
};

export default connect(null, mapDispatchToProps)(Header);