import React, { Component, PropTypes } from 'react';

class TeamSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleTeamToggle, details } = this.props;

    return (
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
  }
}

TeamSelector.propTypes = {
  details: PropTypes.shape({
    home_sname: PropTypes.string,
    away_sname: PropTypes.string,
  }),
};
export default TeamSelector;
