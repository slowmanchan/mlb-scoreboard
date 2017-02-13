import React, {Component} from 'react';

class TeamSelector extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e, x) {
    this.props.handleTeamToggle(x)
  }

  render() {
    return (
      <div id="teamSelector">
        <button onClick={() => {this.props.handleTeamToggle(0)}}>{this.props.details.home_sname}</button>

        <button onClick={() => {this.props.handleTeamToggle(1)}}>{this.props.details.away_sname}</button>
      </div>
    )
  }
}

export default TeamSelector;
