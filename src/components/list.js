import React, { useState } from 'react';
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

const ProductList = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    products: [{title: "aa", desc: "bb", price: "cc"}, {title: "aa", desc: "bb", price: "cc"}],
  });

  const row = (product) => {
    return (
      <div className={classes.root}>
        <ListItem alignItems="flex-start">
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
              </React.Fragment>
            }
          />
          <ListItemIcon onClick={() => console.log("gg")}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemIcon onClick={() => console.log("gg")}>
            <EditIcon />
          </ListItemIcon>
        </ListItem>
        <Divider className={classes.divider}/>
      </div>

    )
  }

  return (
      <List className={classes.root}>
        {state.products.map((val) => row(val))}
      </List>
  )
}

export default ProductList;