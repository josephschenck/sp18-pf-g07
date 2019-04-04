import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap';
import { withRouter } from 'react-router';
import './event.css';  


export class Events extends Component {
  displayName = Events.name

  constructor(props) {
    super(props);
    this.state = {
        events: [], eventEvents: [], loading: true, filterText: '', display: false,
        buytickets: { eventId: "", tour: "", venue: "", start: "", end: "", price: "" }};

    this.handleChange = this.handleChange.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    fetch('api/events')
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data, loading: false });
      });
  }

  onSubmit = p => {
      alert("Congrats, your order was successful!");
      p.preventDefault()
      fetch(`api/tickets/purchase/${this.state.buytickets.eventId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin'
      })
          .then(response => response.json())
          .then(response => console.log('Response-->', response))
          .then(error => console.log('Error-->', error))
      this.setState({
          buytickets: {
              eventId: ""
          }
      })
      this.handleNew()
  }
  handleNew() {
      this.setState({ display: false });
  }

  renderEventTable(events) {
    return (

      <Table color = {'grey'} inverted inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Venue</Table.HeaderCell>
              <Table.HeaderCell>Tour</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>End Date</Table.HeaderCell>
              <Table.HeaderCell>Ticket Price</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Modal show={this.state.display}
                onHide={this.handleNew}
                container={this}
                aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>Ticket Id# {this.state.buytickets.eventId}</b>
                <br />
                <br />
                <b>Venue: </b>{this.state.buytickets.venue}<br />
                <b>Tour: </b>{this.state.buytickets.tour}<br />
                <b>Date & Time Start: </b>{this.state.buytickets.start}<br />
                <b>Date & Time End: </b>{this.state.buytickets.end}<br />
                <b>Price: </b>${this.state.buytickets.price}<br />
                <br />
                <hr />
                
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit"
                    className="btn btn-primary btn-block"
                    bsSize="small"
                    onClick={this.onSubmit}>Complete Ticket Purchase</Button>
            </Modal.Footer>
        </Modal>

        <Table.Body>
          {events.map(events =>
            <Table.Row key={events.id}>
              <Table.Cell>{events.venueName}</Table.Cell>
              <Table.Cell>{events.tourName}</Table.Cell>
              <Table.Cell>{new Intl.DateTimeFormat("en-US",
                  {
                      year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                            }).format(new Date(events.eventStart))}</Table.Cell>
              <Table.Cell>{new Intl.DateTimeFormat("en-US",
                  {
                      year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                  }).format(new Date(events.eventEnd))}</Table.Cell>
              <Table.Cell>{events.ticketPrice}</Table.Cell>
              <Table.Cell>
                  <Button 
                    
                    onClick={() => this.setState({
                          display: true,
                          buytickets: {
                              eventId: events.id,                              
                              venue: events.venueName,
                              tour: events.tourName,
                              start: events.eventStart,
                              end: events.eventEnd,
                              price: events.ticketPrice
                          }
                    })}>Purchase Ticket</Button>
               </Table.Cell>
              
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }

  handleChange(event) {
      this.setState({ filterText: event.target.value });
  }


  handleSubmit(event) {

      event.preventDefault();
      this.props.history.push('events/' + this.state.filterText);
     
  }

  searchbar(events) {
    return (
        <form class="form-wrapper" onSubmit= {this.handleSubmit}>
            <input
                class = "search"
                type="text"
                placeholder=" Search Events"
                value={this.state.filterText}
                onChange={this.handleChange}  
          />
            <input type="submit" value="Go" class="submit" />
        </form>
      )
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderEventTable(this.state.events);

    let searcher = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.searchbar(this.state.events);

    return (
      <div class="grid-container-pages">
      <div class="grid-item-pages">
        <img src="https://image.ibb.co/cmjOcH/eventbanner1.jpg" width="1000"></img>
      </div>
      <div class="grid-item-pages">
        {searcher}
      </div>
      <div class="grid-item-pages">
        {contents}
      </div>                  
    </div>
    );
  }
}
