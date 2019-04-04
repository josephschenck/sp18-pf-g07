import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './profile.css';


export class EditProfile extends Component {

    displayName = EditProfile.name

    constructor(props) {
        super(props);
        this.state = {

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

        event.preventDefault();

        const address = {
            addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
            zipCode: this.state.zipCode, city: this.state.city, state: this.state.state
        };

        console.log(address);
        //email: 'admin@envoc.com', password: 'password'
        axios.put('api/users/billing-info', address)
            .then(res => {
                console.log(res);
                console.log(this.props);
                alert("Update was successful")
                
            })
            .catch(error => (alert("Please enter valid states and zip codes")))
    }
    render() {

        if (this.props.user) {

            return (

                <div class="container">
                    <div class="row main">
                        <div class="panel-heading">
                            <div class="panel-title text-center">
                                <h3 class="title">Edit Profile</h3>
                                <hr />
                            </div>
                        </div>

                        <div class="main-login main-center">
                            <form class="form-horizontal" onSubmit={this.handleSubmit} method="put">
                                <fieldset>
                                    <div class="pure-control-group">
                                        <label>AddressLine1:
                                <input type="text" class="form-control submissionfield" name="addressLine1" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div class="pure-control-group">
                                        <label>AddressLine2:
                                <input type="text" class="form-control" name="addressLine2" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div class="pure-control-group">
                                        <label>Zip Code:
                                <input type="text" class="form-control" name="zipCode" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div class="pure-control-group">
                                        <label>City:
                                <input type="text" class="form-control" name="city" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div class="pure-control-group">
                                        <label>State:
                                <input type="text" class="form-control" name="state" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div class="pure-control-group">
                                        <button type="submit" class="btn btn-primary btn-lg btn-block"> Save Changes </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }else {
                return (

                    <div>
                        <div class="container" >
                            <br />
                            <h1 align="center">You are not logged in!</h1>
                            <br />
                            <img src="http://icon-park.com/imagefiles/wrongway.png" class="img"></img>
                        </div>
                    </div>


                )
          }
    }
 }



