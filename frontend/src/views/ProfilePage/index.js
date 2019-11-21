import React, { Component } from 'react';
import AppBar from '../../components/appBar';
import Page from './page';
import { connect } from "react-redux";
import * as actions from '../../actions';

class Profile extends Component {

    async componentDidMount(){
        this.props.getProfile();
        
    }

    render(){
        
        return(
            <React.Fragment>
                <AppBar/>
                <Page
                    data = {this.props.data}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        data: state.profile.data
    }
}

export default connect(mapStateToProps,actions)(Profile);