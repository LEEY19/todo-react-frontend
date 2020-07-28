import React, { useState, useEffect, useRef } from 'react';
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
  Switch
} from '@material-ui/core';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import * as ProductActions from '../store/actions/index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10
    // alignItems: 'center'
  },
  formContainer: {
    width: '80%',

  },
  button: {
    backgroundColor: "#21b6ae",
    marginTop: '10px'
  },
});

const Form = (props) => {
  let {editedProduct, editingProduct} = props.products;
  const classes = useStyles();
  let history = useHistory();
  
  const [state, setState] = useState(editedProduct);

  useEffect(() => {
    setState(editedProduct);
  }, [editingProduct]);

  const onSwitchClick = (event) => {
    setState({...state, featured: event.target.checked});
  };

  const onTypingField = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <form noValidate autoComplete="off">
          <TextField name="title" label="Title" required fullWidth margin="normal" value={state.title} onChange={onTypingField}/>
          <TextField name="desc" label="Desc" fullWidth margin="normal" value={state.desc} onChange={onTypingField}/>
          <TextField name="price" label="Price" fullWidth margin="normal" value={state.price} onChange={onTypingField}/>
          <TextField name="summary" label="Summary" fullWidth margin="normal" value={state.summary} onChange={onTypingField}/>
          <FormControlLabel
            className={classes.switch}
            control={
              <Switch
                color="primary"
                checked={state.featured}
                onChange={onSwitchClick}
              />
            }
            label="Featured"
          />

        </form>
        <Button
          variant="contained"
          onClick={() => {
            if (editingProduct) {
              props.submitEditProduct(state);
            } else {
              props.submitAddProduct(state);
            }
            history.push("/");
          }}
          className={classes.button}
          startIcon={<SendTwoToneIcon />}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitEditProduct: (product) => dispatch(ProductActions.submitEditProduct(product)),
    submitAddProduct: (product) => dispatch(ProductActions.submitAddProduct(product)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);