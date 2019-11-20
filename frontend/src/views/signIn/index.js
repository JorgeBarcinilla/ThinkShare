import React, { Component } from 'react';
import Page from './page';
import request from 'superagent';

class SignIn extends Component {

    handleSubmit(e){
        e.preventDefault();
        var fields = e.target.getElementsByTagName('input');
        
        var data = {};
        for (let index = 0; index < fields.length; index++) { 
            const field = fields[index];
            data[field.name] = field.value;
        }
        //console.log(data);

        request
            .post('http://localhost:4000/api/user/loginUser')
            .set('Content-Type', 'application/json')
            .send(data)
            .end(function(err, res){
                if (err) {
                    alert(err);
                }else{
                    const status = JSON.parse(res.text);
                    window.location.href = '/profile';
                    console.log(status);
                }
                
            });
    }


    render() {
        return(
            <React.Fragment> 
                <Page
                    submit={this.handleSubmit}
                />
            </React.Fragment> 
        ); 
    }
}

export default SignIn;