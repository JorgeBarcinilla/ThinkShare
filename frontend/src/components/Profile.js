import React from 'react';
import AppBar from './appBar';
import Profile from './account';

export default class Prof extends React.Component{
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