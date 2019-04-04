import React, { Component } from 'react';
import { Table, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import VenueCard from './VenueCard';
import PropTypes from 'prop-types';


export class Venue extends Component {

  displayName = Venue.name

  constructor(props) {
    super(props);
    this.state = { lists: [], loading: true, venueInfo: null };

    console.log(this.props);
    console.log(this.props.match.params.venueId);

    fetch('api/events?VenueId=' + this.props.match.params.venueId)
      .then(response => response.json())
      .then(data => {
        this.setState({ lists: data, loading: false});
        console.log(data);
          });

      fetch('api/venues/' + this.props.match.params.venueId)
          .then(res => res.json())
          .then(data2 => {
              this.setState({ venueInfo: data2, loading: false });
              console.log(data2);
          });
  }

  static renderVenueEventTable(lists) {
    return (
      
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Tour</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Ticket Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lists.map(lists =>
            <Table.Row key={lists.id}>
              <Table.Cell>{lists.tourName}</Table.Cell>
              <Table.Cell>
                  {new Intl.DateTimeFormat("en-US",
                  {year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                      }).format(new Date(lists.eventStart))}
             </Table.Cell>
              <Table.Cell>
                  {new Intl.DateTimeFormat("en-US",
                                {year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                                }).format(new Date(lists.eventEnd))}     
             </Table.Cell>
              <Table.Cell>{lists.ticketPrice}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Venue.renderVenueEventTable(this.state.lists);

    return (
      <div class="grid-container-pages">
      <div class="grid-item-pages">
                <img src="https://image.ibb.co/h3xFrc/venuebanner1.jpg" width="1000"></img>
                {this.state && this.state.venueInfo &&
                    <div>
                        <br />
                    <img src={this.state.venueInfo.pic} width="400" height="250"></img>
                    <h1>{this.state.venueInfo.name}</h1>
                    </div>
                }     
      </div>
      <div class="grid-item-pages">
        {contents}
      </div>               
      </div>
    );
  }
}
