import React from 'react';
import AppBar from './appBar';
import Edit from './thinksEdit';

export default class PostEdit extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <AppBar/>
                <Edit/>
            </div>
        );
    }
}