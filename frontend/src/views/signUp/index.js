import React, { Component } from 'react';
import Page from './page';
import request from 'superagent';

class SignUp extends Component {

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
            .post('http://localhost:4000/api/user/createUser')
            .set('Content-Type', 'application/json')
            .send(data)
            .end(function(err, res){
                if (err) throw err
                const status = JSON.parse(res.text);
                if(status.status == 'failed'){
                    alert(status.message);
                    for (let index = 0; index < fields.length; index++) { 
                        const field = fields[index];
                        if(field.name == 'email'){
                            field.focus();
                            break;
                        }
                    }
                    
                }else{
                    alert(status.message);
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

export default SignUp;