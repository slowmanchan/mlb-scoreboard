import React, {Component} from 'react';

class HomeRow extends Component {
  render() {
    var cols = []
    let {
      home_team_runs,
      home_team_hits,
      home_team_errors,
      inning_line_score
    } = this.props.linescore;

    inning_line_score.forEach((inning, idx) => {
      cols.push(<td key={`inning${idx}`}>{inning.home}</td>)
    })

    return (
      <tr>
        <td>{this.props.home_sname}</td>
        {cols}
        <td>{home_team_runs}</td>
        <td>{home_team_hits}</td>
        <td>{home_team_errors}</td>
      </tr>
    )
  }
}

export default HomeRow;
