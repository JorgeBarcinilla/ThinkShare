import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import AccountProfile from './account';
import AccountDetails from './detail';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '20px',
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="main" maxWidth="xl">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   
      <Grid container justify="center" spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <AccountDetails />
        </Grid>
      </Grid>
    </Grid>
    </Grid>
    </Container>
  );
};

export default Account;