import React, { Component, PropTypes } from 'react';
/*
 * this component render the rows for the away team
 * in the stats detail boxscore
 */
class AwayRow extends Component {
  render() {
    const rows = []
    const {
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

AwayRow.propTypes = {
  inning_line_score: PropTypes.object,
  away_team_runs: PropTypes.string,
  away_team_hits: PropTypes.string,
  away_team_errors: PropTypes.string,
};
export default AwayRow;
