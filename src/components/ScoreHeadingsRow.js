import React, {Component} from 'react';

class ScoreHeadingsRow extends Component {
  render() {
    var cols = []
    let {inning_line_score} = this.props.linescore;

    inning_line_score.forEach((col) => {
      cols.push(<th>{col.inning}</th>)
    })

     return (
        <tr>
          <th></th>
          {cols}
          <th>R</th>
          <th>H</th>
          <th>E</th>
        </tr>
    )
  }
}

export default ScoreHeadingsRow;
