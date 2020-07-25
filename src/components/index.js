import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';

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
    </div>
  )
}
export default Product;
