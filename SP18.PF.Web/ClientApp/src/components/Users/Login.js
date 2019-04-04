import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Redirect } from 'react-router-dom';
import './users.css';  



class Login extends React.Component {

    displayName = Login.name

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }




    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault()
        const useremail = {
            email: this.state.email, password: this.state.password
        };

        console.log(useremail);
        //email: 'admin@envoc.com', password: 'password'
        axios.post('api/users/login', useremail )
            .then(res => {
                console.log(res);
                console.log(this.props);
                //debugger;
                this.props.setAppUserState(res.data);
            })
            .catch(error => (alert("Incorrect Login")))


    }

    render() {
        //console.log("render");
        //console.log(this.props.user);
        if (!this.props.user) {
            return (
        <div class="container">
                    <div class="row main">
                        <div class="panel-heading">
                           <div class="panel-title text-center">
                                   <h3 class="title">Login</h3>
                                   <hr />
                               </div>
                        </div> 
                        <div class="main-login main-center">
                            <form onSubmit={this.handleSubmit} class="form-horizontal" method="post">
                                <div class="form-group">
                                    <label for="email" class="cols-sm-2 control-label">Email</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="form-group">
                                    <label for="password" class="cols-sm-2 control-label">Password</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="form-group ">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block login-button">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div class="container" >
                        <br/>
                        <h1 align="center">You are currently logged in!</h1>
                        <br/>
                        <img src= "https://www.supersmartdeals.com/Content/images/success.png" class ="img"></img>
                    </div>
                </div>
            )
        }
    }
}

export default Login;
