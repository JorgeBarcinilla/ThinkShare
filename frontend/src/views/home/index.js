import React, { Component } from 'react';
import AppBar from '../../components/appBar';
import Page from './page';

class Home extends Component{
    /*constructor(){
        super()
    }*/
    render(){
        return(
            <React.Fragment>
                <AppBar/>
                <Page/>
            </React.Fragment>
        );
    }
}

export default Home;