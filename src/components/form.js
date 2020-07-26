import React, { useState } from 'react';
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

const Form = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
    desc: "",
    price: "",
    summary: "",
    featured: false,
  });

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
          <TextField name="title" label="Title" required fullWidth margin="normal" />
          <TextField name="desc" label="Desc" fullWidth margin="normal" />
          <TextField name="price" label="Price" fullWidth margin="normal" />
          <TextField name="summary" label="Summary" fullWidth margin="normal" />
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
          // color="secondary"
          className={classes.button}
          startIcon={<SendTwoToneIcon />}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Form;