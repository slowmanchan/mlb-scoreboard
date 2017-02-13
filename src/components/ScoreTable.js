import React, {Component} from 'react';
import ScoreHeadingsRow from './ScoreHeadingsRow';
import HomeRow from './HomeRow';
import AwayRow from './AwayRow';

class ScoreTable extends Component {
  render() {
    return (
      <table id="scoreTable">
        <thead>
          <ScoreHeadingsRow linescore={this.props.data.linescore}/>
        </thead>
        <tbody>
          <HomeRow linescore={this.props.data.linescore}
                   home_sname={this.props.data.home_sname}/>
          <AwayRow linescore={this.props.data.linescore}
                   away_sname={this.props.data.away_sname}/>
        </tbody>
      </table>
    )
  }
}

export default ScoreTable;
