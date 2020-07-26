import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import Form from './form';

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
      <Header />
      <Form />
    </div>
  )
}
export default Product;
