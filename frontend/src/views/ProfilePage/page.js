import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// core components
//import Header from "../../components/Header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
//import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js"; 
import Parallax from "../../components/Parallax/Parallax.js";

import styles from '../../assets/jss/material-kit-react/views/profilePage.js';

const profile  =  require( "../../assets/img/faces/christian.jpg");

const studio1 = require("../../assets/img/examples/studio-1.jpg");
const studio2 = require("../../assets/img/examples/studio-2.jpg");
const studio3 = require("../../assets/img/examples/studio-3.jpg");
const studio4 = require("../../assets/img/examples/studio-4.jpg");
const studio5 = require("../../assets/img/examples/studio-5.jpg");
const work1 = require("../../assets/img/examples/olu-eletu.jpg");
const work2 = require("../../assets/img/examples/clem-onojeghuo.jpg");
const work3 = require("../../assets/img/examples/cynthia-del-rio.jpg");
const work4 = require("../../assets/img/examples/mariya-georgieva.jpg");
const work5 = require("../../assets/img/examples/clem-onojegaw.jpg");



const useStyles = makeStyles(styles);

export default function ProfilePage({data}) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
      <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{data.firstName} {data.lastName}</h3>
                    <h6>{data.email}</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
      </Grid>
      </Grid>
      </Container>
  );
}
