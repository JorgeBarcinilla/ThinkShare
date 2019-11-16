import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BannerLayout from './bannerLayout';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const backgroundImage = require('../../assets/img/banner.png');
const logo = require('../../assets/img/logo.png');

const styles = theme => ({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#d9d9d9', 
      backgroundPosition: 'center',
    },
    button: {
        marginLeft: theme.spacing(10),
        minWidth: 200,
        backgroundColor: '#f1a5d6',
        color: '#ffffff'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    containButtons:{
        marginTop: '20%',
        alignItems: 'center'
    },
    container:{
        alignItems: 'center',
    },
    containLogo:{
        marginTop: '15%',
        alignItems: 'center',
    },
    logo:{
        marginLeft: theme.spacing(10)
    }
});

function Page(props) {
    const { classes } = props;

    return (
        <BannerLayout backgroundClassName={classes.background}>
            <Container className={classes.container} component="main" maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                    <Box className={classes.containLogo}>
                        <img className={classes.logo} width={130} src={logo} alt="" />
                    </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Box className={classes.containButtons}>
                        <Link className={classes.link} to="/signIn" variant="body2">
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                component="a"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link className={classes.link} to="/signUp" variant="body2">
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                component="a"
                            >
                                Sign Up
                            </Button>
                        </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            
            </Container>            
    </BannerLayout>
    );
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Page);