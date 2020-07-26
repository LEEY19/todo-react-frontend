import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch, 
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import Form from './form';
import ProductList from './list';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%"
  }
});

function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route path='/add' exact={true}>
            <Form />
          </Route>
          <Route path='/' exact={true}>
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Product;
