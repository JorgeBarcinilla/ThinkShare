import React, { Component } from 'react';
import AppBar from '../../components/appBar';
import Page from './page';

class Notification extends Component {
    render(){
        return(
            <React.Fragment>
                <AppBar/>
                <Page/>
            </React.Fragment>
        );
    }
}

export default Notification;