import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import './userForm.css';
import UserData from '../userData/userData';


class UserForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
          name : '',
          list : [],
          result : false,
          
        }
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();
        var username = this.state.name;
        var _this = this;
        
        axios.get('https://api.github.com/users/' + username)
        .then(function (response) {
            
            _this.setState({
            list : response.data,
            result : true
        })
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    onInputChange = (evt) => {
        this.setState({name : evt.target.value})
    }



    render(){
        return(
            <div class="formCss">
            
            
            <Form onSubmit={this.onFormSubmit}>
              
                <label><h1>Enter the GITHUB Username </h1></label>
                <input name='name' onChange={this.onInputChange} value={this.state.name} placeholder="Github User Name" />
              

              <Button positive type="submit">
                Submit
              </Button>
            </Form>
          
        {this.state.result && <UserData userData={this.state.list}/> }
          </div>
          
        )
    }
}


export default UserForm;