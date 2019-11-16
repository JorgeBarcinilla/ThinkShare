import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Thinks = props => {
  const { className} = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          subheader=""
          title="Edit Think"
        />
        <Divider />
        <CardContent>
        <TextField
          id="outlined-textarea"
          label="Update your thinks..."
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
          rows={6}
        />
        </CardContent>
        <Divider />
        <CardActions>
        <Button color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained">
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Thinks.propTypes = {
  className: PropTypes.string
};

export default Thinks;