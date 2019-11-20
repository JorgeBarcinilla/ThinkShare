import React, { Component } from 'react';
import Page from './acc';
import AppBar from '../../components/appBar';

class Account extends Component {
    render() {
        return(
            <React.Fragment>
                <AppBar/>
                <Page/>
            </React.Fragment>
        );
    }
}

export default Account;