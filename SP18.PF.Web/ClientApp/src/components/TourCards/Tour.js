import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export class Tour extends Component{

   displayName = Tour.name

  constructor(props) {
    super(props);
    this.state = { lists: [], eventEvents:[], loading: true, tourInfo : null};

    console.log(this.props);
    console.log(super.props);
    console.log(this.props.match.params.tourId);


    fetch('api/events?TourId=' + this.props.match.params.tourId)
      .then(response => response.json())
      .then(data => {
        this.setState({ lists: data, loading: false });
        console.log(data);
        //console.log(this.state.events);
          });

      fetch('api/tours/' + this.props.match.params.tourId)
          .then(res => res.json())
          .then(data2 => {
              this.setState({ tourInfo: data2, loading: false });
              console.log(data2);
          });

    }

   

   static renderTourEventsTable(lists) {
   return (
     <Table color = {'grey'} inverted inverted>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Venue</Table.HeaderCell>
           <Table.HeaderCell>Start Date</Table.HeaderCell>
           <Table.HeaderCell>End Date</Table.HeaderCell>
           <Table.HeaderCell>Ticket Price</Table.HeaderCell>
         </Table.Row>
       </Table.Header>

       <Table.Body>
         {lists.map(lists =>
           <Table.Row key={lists.id}>
             <Table.Cell>{lists.venueName}</Table.Cell>
             <Table.Cell>{new Intl.DateTimeFormat("en-US",
                 {
                     year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                 }).format(new Date(lists.eventStart))}</Table.Cell>
             <Table.Cell>{new Intl.DateTimeFormat("en-US",
                 {
                     year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"
                 }).format(new Date(lists.eventEnd))}</Table.Cell>
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
     : Tour.renderTourEventsTable(this.state.lists);

   return (
    <div class="grid-container-pages">
      <div class="grid-item-pages">
               <img src="https://image.ibb.co/ex0qPx/tourbanner1.jpg" width="1000"></img>
               
               {this.state && this.state.tourInfo &&
                   <div>
                    <br/>
                   <img src={this.state.tourInfo.pic} width="400" height="250"></img>
                   <h1>{this.state.tourInfo.name}</h1>
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
