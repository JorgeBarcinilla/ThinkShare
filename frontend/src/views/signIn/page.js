import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '../../components/input';
import  {Field} from 'redux-form';

const logo = require('../../assets/img/logo.png');

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({onSubmit, errorMessage}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          <Link className={classes.link} to="/" variant="body2">
            <img width={80} src={logo} alt="" />
          </Link>
        </Typography>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate method="post" onSubmit={onSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            type="text"
            variant="outlined"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autofocus
            component={Input}
          />
          </Grid>
          <Grid item xs={12}>
          <Field
            type="password"
            variant="outlined"
            id="password"
            label="password"
            name="password"
            autoComplete="current-password"
            autofocus
            component={Input}
          />
          </Grid>
          {errorMessage ? 
              <Grid item xs={12}>
                {errorMessage}
              </Grid> : null
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link className={classes.link} to="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}