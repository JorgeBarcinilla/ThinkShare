import React from 'react';
import AppBar from './appBar';
import Profile from './accountEdit';

export default class ProfileEdit extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <AppBar/>
                <Profile/>
            </div>
        );
    }
}