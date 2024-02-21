// Seat.js

import React from 'react';
import PropTypes from 'prop-types';
import './MovieSeatSelection.css';

const MovieSeatSelection = ({ id, selected, booked, onClick }) => {
  let seatClass = 'seat';

  if (selected) {
    seatClass += ' selected';
  } else if (booked) {
    seatClass += ' booked';
  }

  return (
    <div className={seatClass} onClick={() => onClick(id)}>
      {id}
    </div>
  );
};

MovieSeatSelection.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  booked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieSeatSelection;
