import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './ticket.css';  


export class Ticket extends Component {
  displayName = Ticket.name

    constructor(props) {
        super(props);
        this.state = { tickets: [], loading: true };

        fetch('/api/tickets', {credentials: 'same-origin'})
            .then(response => response.json())
            .catch(error => window.location.href = '/login/')
        .then(data => {this.setState({ tickets: data, loading: false });
        });
    }

  static renderTicketTable(tickets) {
    return (

      <Table color = {'grey'} inverted inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Venue</Table.HeaderCell>
            <Table.HeaderCell>Tour</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Ticket Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tickets.map(tickets =>
            <Table.Row key={tickets.id}>
              <Table.Cell>{tickets.event.venueName}</Table.Cell>
              <Table.Cell>{tickets.event.tourName}</Table.Cell>
              <Table.Cell>{new Intl.DateTimeFormat("en-US",
                  {
                      year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                  }).format(new Date(tickets.event.eventStart))}</Table.Cell>
              <Table.Cell>{new Intl.DateTimeFormat("en-US",
                  {
                      year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                  }).format(new Date(tickets.event.eventEnd))}</Table.Cell>

              <Table.Cell>{tickets.event.ticketPrice}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }

  render() {
      let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Ticket.renderTicketTable(this.state.tickets);

      return (
          <div class="grid-container-pages">
              <div class="grid-item-pages">
                  <img src="https://image.ibb.co/kVeZjx/ticketbanner1.jpg" width="1000"></img>    
              </div>
              <div class="grid-item-pages">
                  {contents}
              </div>
          </div>     
    );
  }
}
