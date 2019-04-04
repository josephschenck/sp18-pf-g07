import React, { Component } from 'react';
import VenueList from './VenueList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Venues extends Component {
    displayName = Venues.name

    constructor(props) {
        super(props);
        this.state = { venues: [], loading: true};

        fetch('api/venues')
        .then(response => response.json())
        .then(data => {
         this.setState({ venues: data, loading: false });
       });
    }

    render() {
        return (
            <div class="grid-container-pages">
            <div class="grid-item-pages">
                <img src="https://image.ibb.co/h3xFrc/venuebanner1.jpg" width="1000"></img>
            </div>
            <div class="grid-item-pages">
                <div className="container-fluid" style={{marginLeft: '-15x'}}>
                    <div className="d-flex flex-row">                    
                        <div className="col-sm-12">
                            <VenueList venues={this.state.venues} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}