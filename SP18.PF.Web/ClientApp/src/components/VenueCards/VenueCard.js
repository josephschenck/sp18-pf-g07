import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const VenueCard = (props) => (
  <Card>
    <Image src= {props.venues.pic} max width ="300"/>
    <Card.Content>
      <Card.Header >
        {props.venues.name}
      </Card.Header>
      <Card.Meta>
        <span className='address'>
          Location: {props.venues.physicalAddress.city},
          {props.venues.physicalAddress.state}
        </span>
      </Card.Meta>
      <Card.Description>
        Capacity: {props.venues.capacity}
      </Card.Description>
      <Card.Description>
        {props.venues.description}
      </Card.Description>
      <Card.Description extra>
        <button><Link to= {`venues/${props.venues.id}`} picture={props.venues.pic}>Show Events</Link></button>
      </Card.Description>

    </Card.Content>
  </Card>  
  
)

VenueCard.defaultProps = {
    venues: {}
};

VenueCard.propTypes = {
    venues: PropTypes.object
};

export default VenueCard