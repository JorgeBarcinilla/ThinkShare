import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

export default function Notification() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
                <Grid item>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item >
              <NotificationsActiveIcon></NotificationsActiveIcon>
            </Grid>
            <Grid item xs >
              <Typography noWrap>You received a like in your post.</Typography>
            </Grid>
            <Grid item  zeroMinWidth>
              <Typography noWrap>{new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      </Grid>
      </Grid>
      </Container>
    );
  }