import React, { Component } from 'react';
/*
 * component for generating heading rows in
 * boxscore.  cols are returned for each
 * inning_line_score object
 */
class ScoreHeadingsRow extends Component {
  render() {
    const cols = [];
    let { inning_line_score } = this.props.linescore;

    inning_line_score.forEach((col, idx) => {
      cols.push(<th key={`scoreheading${idx}`}>{col.inning}</th>)
    });

    return (
      <tr>
        <th></th>
        {cols}
        <th>R</th>
        <th>H</th>
        <th>E</th>
      </tr>
    );
  }
}

export default ScoreHeadingsRow;
