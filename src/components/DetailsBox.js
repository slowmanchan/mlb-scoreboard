import React, { Component, PropTypes } from 'react';
import ScoreTable from './ScoreTable';
import TeamSelector from './TeamSelector';
import BatterTable from './BatterTable';

class DetailsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      teamIndex: 0,
    };
    this.handleTeamToggle = this.handleTeamToggle.bind(this);
  }
  /*
   * accepts and sets the state to an integer pass in from team selector
   * component
   */
  handleTeamToggle(team) {
    this.setState({
      teamIndex: team,
    });
  }

  render() {
    return (
      <div className="detailsBox">
        <h3>Details</h3>
        <ScoreTable data={this.props.details} />
        <TeamSelector
          handleTeamToggle={this.handleTeamToggle}
          details={this.props.details}
        />
        <BatterTable
          teamIndex={this.state.teamIndex}
          details={this.props.details}
        />
      </div>
    );
  }
}

DetailsBox.propTypes = {
  details: PropTypes.object,
};
export default DetailsBox;
