import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: 20,
  },
  uploadButton: {
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const AccountProfile = props => {
  const { className} = props;

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    username: 'shen123',
    country: 'USA',
    email: 'shen@mail.com',
    avatar: '/images/avatar.png'
  };

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {user.name}
            </Typography>

            <Typography className={classes.locationText} color="textSecondary" variant="body1">
              {user.username}
            </Typography>

            <Typography className={classes.dateText} color="textSecondary" variant="body1">
                {user.email}
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={user.avatar}/>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
      <Link to='/editProfile' className={classes.link}>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >Edit profile
        </Button>
      </Link>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;