import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const TourCard = (props) => (
  <Card>
    <Image src= {props.tours.pic} max width ="300"/>
    <Card.Content>
      <Card.Header >
        {props.tours.name}
      </Card.Header>
      <Card.Description>
        {props.tours.description}
      </Card.Description>
      <Card.Description extra>
        <button><Link to= {`tours/${props.tours.id}`}>Show Events</Link></button>
      </Card.Description>

    </Card.Content>
  </Card>
  
)

TourCard.defaultProps = {
    tours: {}
};

TourCard.propTypes = {
    tours: PropTypes.object
};

export default TourCard