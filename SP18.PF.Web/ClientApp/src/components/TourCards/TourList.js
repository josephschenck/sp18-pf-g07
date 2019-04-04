import React from 'react';
import PropTypes from 'prop-types';
import TourCard from './TourCard';

const getTours = (tours) => {
    return (
        <div className="card-deck">
            {
                tours.map(tours => <TourCard key={tours.id} tours={tours} />)
            }
        </div>
    );
};

const TourList = (props) => (
    <div>
        {getTours(props.tours)}
    </div>
);

TourList.defaultProps = {
    tours: []
};

TourList.propTypes = {
    tours: PropTypes.array
};

export default TourList;