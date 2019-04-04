import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './users.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            addressLine1: '',
            addressLine2: '',
            zipCode: '',
            city: '',
            state: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {

        const billingAddress = {
            addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2, zipCode: this.state.zipCode, city: this.state.city, state: this.state.state
        }
        const useremail = {
            email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword, billingAddress
        };

        //email: 'admin@envoc.com', password: 'password'
        axios.post('api/users/register', useremail)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => (alert("Incorrect registration please try again")))

        alert("Thank you for registering")
    }

    render() {
        if (this.props.user == 0) {
            return (
                <div class="container">
                    <div class="row main">
                        <div class="panel-heading">
                           <div class="panel-title text-center">
                                   <h3 class="title">Register </h3>
                                   <hr />
                               </div>
                        </div> 
                        <div class="main-login main-center">
                            <form onSubmit={this.handleSubmit} class="form-horizontal">
        
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
        
                                <div class="form-group">
                                    <label for="confirmPassword" class="cols-sm-2 control-label">Confirm Password</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" class="form-control" name="confirmPassword" id="confirmPassword"  placeholder="Confirm your Password"onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="addressLine1" class="cols-sm-2 control-label">Address Line 1</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="addressLine1" id="addressLine1"  placeholder="Enter your Mailing Address" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="addressLine2" class="cols-sm-2 control-label">Address Line 2</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="addressLine2" id="addressLine2"  placeholder="e.g. APT # " onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="city" class="cols-sm-2 control-label">City</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="city" id="city"  placeholder="Enter your City" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="state" class="cols-sm-2 control-label">State</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="state" id="state"  placeholder="Enter your State" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="zipCode" class="cols-sm-2 control-label">Zip Code</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="zipCode" id="zipCode"  placeholder="Enter your Zip Code" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="form-group ">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block login-button">Register</button>
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
                    You are currently logged in!
                    <br />
                </div>

            )
        }
    }
}

export default Register;