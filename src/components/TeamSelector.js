import React, { PropTypes } from 'react';
/*
 * This component is for selecting a teams batters
 * both buttons will set the team state depending
 * on which is pressed.
 */
const TeamSelector = ({ handleTeamToggle, details }) => (
  <div id="teamSelector">
    <button
      onClick={() => { handleTeamToggle(0); }}
    >
      {details.home_sname}
    </button>

    <button
      onClick={() => { handleTeamToggle(1); }}
    >
      {details.away_sname}
    </button>
  </div>
);

TeamSelector.propTypes = {
  details: PropTypes.shape({
    home_sname: PropTypes.string,
    away_sname: PropTypes.string,
  }),
  handleTeamToggle: PropTypes.func.isRequired,
};

export default TeamSelector;
