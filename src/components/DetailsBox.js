import React, {Component} from 'react';


class DetailsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      teamIndex: 0
    }
    this.handleTeamToggle = this.handleTeamToggle.bind(this)
  }

  handleTeamToggle(team) {
    this.setState({
      teamIndex: team
    })
  }

  render() {
    console.log("++" + this.state.teamIndex)
    return (
      <div className="detailsBox">
        <h3>Details</h3>
        <ScoreTable data={this.props.details} linescore={this.props.linescore} />
        <TeamSelector handleTeamToggle={this.handleTeamToggle} details={this.props.details}/>
        <BatterTable teamIndex={this.state.teamIndex} details={this.props.details} />
      </div>
    )
  }
}

export default DetailsBox
