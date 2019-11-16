import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import {Card,CardHeader,CardContent,CardActions,Divider,Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px',
    marginBottom: '20px',
    maxWidth: '700px'
  },
  textField:{
    width: '100%'
  }
}));

const Thinks = props => {
  const { className} = props;

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
          <Card className={clsx(classes.root, className)}>
            <form autoComplete="off" noValidate>
              <CardHeader
                subheader=""
                title="Add Think"
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
                  Add
                </Button>
              </CardActions>
            </form>
          </Card>
    </Container>
  );
};

Thinks.propTypes = {
  className: PropTypes.string
};

export default Thinks;