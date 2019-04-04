import React, { Component } from 'react';
import TourList from './TourList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Tours extends Component {
    displayName = Tours.name

    constructor(props) {
        super(props);
        this.state = { tours: [], loading: true};

        fetch('api/tours')
        .then(response => response.json())
        .then(data => {
         this.setState({ tours: data, loading: false });
       });
    }

    render() {
        return (
            <div class="grid-container-pages">
            <div class="grid-item-pages">
            <img src="https://image.ibb.co/ex0qPx/tourbanner1.jpg" width="1000"></img>
            </div>
            <div class="grid-item-pages">
              <div className="container-fluid" style={{marginLeft: '-15px'}}>
                    <div className="d-flex flex-row">                    
                        <div className="col-sm-12">
                            <TourList tours={this.state.tours} />
                        </div>
                    </div>
                </div>
            </div>               
            </div>
        );
    }
}