import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './profile.css';

export class Profile extends Component {

    displayName = Profile.name

    constructor(props){
      super(props);
        this.state = { address: null, 
        profilePicUrl:"http://www.qygjxz.com/data/out/190/5691490-profile-pictures.png"}//loading: true}

        this.setAddressState = this.setAddressState.bind(this);

    }

    componentDidMount() {

     
       axios.get('api/users/billing-info')
           .then(res => {
               this.setAddressState(res.data)
           })
           .catch(err => {
               console.log(err);
           })

    }

    setAddressState(userAddress) {
        this.setState({ address: userAddress });
        console.log(this.state.address);
    }
    render() {

        if (this.props.user) {

            return (
             <div class="container">
                    <h1 class="title">Profile</h1>
                    <hr />
                    <div class="card">
                        <img src={this.state.profilePicUrl} width= "80%" />
                    <h2>{this.props.user.email}</h2>
                    {this.state && this.state.address &&
                        <div>
                            <p>Address Line 1: {this.state.address.addressLine1}</p>
                            <p>Address Line 2: {this.state.address.addressLine2}</p>
                            <p>City: {this.state.address.city}</p>
                            <p>State: {this.state.address.state}</p>
                            <p>Zip Code: {this.state.address.zipCode}</p>
                            <button class="btn-block btn-lg btn profile-button "><Link to={'/editProfile'}>Edit</Link></button>
                        </div>
                            }   
                    </div>
                    
            </div>
            )
        }
        else {
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
