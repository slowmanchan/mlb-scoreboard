import React, {Component} from 'react';

class AwayRow extends Component {
  render() {
    var rows = []
    let {
      inning_line_score,
      away_team_runs,
      away_team_hits,
      away_team_errors
    } = this.props.linescore;

    inning_line_score.forEach((inning, idx) => {
      rows.push(<td key={`inningaway${idx}`}>{inning.away}</td>)
    })

    return (
      <tr>
        <td>{this.props.away_sname}</td>
        {rows}
        <td>{away_team_runs}</td>
        <td>{away_team_hits}</td>
        <td>{away_team_errors}</td>
      </tr>
    )
  }
}

export default AwayRow;
