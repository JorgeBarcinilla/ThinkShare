import React from 'react';
import AppBar from './appBar';
import Thinks from './thinksAdd';

export default class PostAdd extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <AppBar/>
                <Thinks/>
            </div>
        );
    }
}