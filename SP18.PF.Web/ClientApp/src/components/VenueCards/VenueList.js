import React from 'react';
import PropTypes from 'prop-types';
import VenueCard from './VenueCard';

const getVenues = (venues) => {
    return (
        <div className="card-deck">
            {
                venues.map(venues => <VenueCard key={venues.id} venues={venues} />)
            }
        </div>
    );
};

const VenueList = (props) => (
    <div>
        {getVenues(props.venues)}
    </div>
);

VenueList.defaultProps = {
    venues: []
};

VenueList.propTypes = {
    venues: PropTypes.array
};

export default VenueList;