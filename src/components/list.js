import React, { useState, useEffect } from 'react';
import {
  useHistory
} from "react-router-dom";
import { connect } from 'react-redux';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@material-ui/core';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import API from '../lib/api';
import * as ProductActions from '../store/actions/index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  divider: {
    width: '100%',
  },
  gridList: {
    width: '100%',
  },
});

const ProductList = (props) => {
  const classes = useStyles();
  const [products, setState] = useState([]);
  let history = useHistory();
  const fetchProdList = () => {
    API.get("/products")
      .then((response) => {
        setState(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchProdList();
  }, []);

  const row = (product) => {
    return (
      <div className={classes.root}>
        <ListItem key={product.id} alignItems="flex-start">
          <ListItemText 
            primary={product.title}
            secondary={
              <React.Fragment>
                <Typography variant="body2" color="textPrimary">
                  {`Desc: ${product.desc}`}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {`Price: ${product.price}`}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {`Summary: ${product.summary}`}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {`Featured: ${product.featured}`}
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemIcon onClick={() => {
            props.deleteProduct(product.id);
            setTimeout(() => {
              fetchProdList();
            }, 1000);
          }}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemIcon onClick={() => {
            props.editProduct(product);
            history.push("/add");
          }}>
            <EditIcon />
          </ListItemIcon>
        </ListItem>
        <Divider className={classes.divider}/>
      </div>

    )
  }

  return (
    <List className={classes.root}>
      {products.map((val) => row(val))}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editProduct: (product) => dispatch(ProductActions.editProduct(product)),
    deleteProduct: (id) => dispatch(ProductActions.deleteProduct(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
