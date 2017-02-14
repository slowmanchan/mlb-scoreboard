import React, { Component } from 'react';
/*
 * component that generates rows for the home side
 * Each col combined into a row and returned to
 * score table
 */
class HomeRow extends Component {
  render() {
    const cols = []
    let {
      home_team_runs,
      home_team_hits,
      home_team_errors,
      inning_line_score
    } = this.props.linescore;
    // generates a score column for each inning
    inning_line_score.forEach((inning, idx) => {
      cols.push(<td key={`inning${idx}`}>{inning.home}</td>)
    });

    return (
      <tr>
        <td>{this.props.home_sname}</td>
        {cols}
        <td>{home_team_runs}</td>
        <td>{home_team_hits}</td>
        <td>{home_team_errors}</td>
      </tr>
    );
  }
}

export default HomeRow;
