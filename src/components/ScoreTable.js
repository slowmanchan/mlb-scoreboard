import React, {Component} from 'react';
import ScoreHeadingsRow from './ScoreHeadingsRow';
import HomeRow from './HomeRow';
import AwayRow from './AwayRow';

const ScoreTable = ({ data }) => (
  <table id="scoreTable">
    <thead>
      <ScoreHeadingsRow linescore={data.linescore}/>
    </thead>
    <tbody>
      <HomeRow linescore={data.linescore}
               home_sname={data.home_sname}/>
      <AwayRow linescore={data.linescore}
               away_sname={data.away_sname}/>
    </tbody>
  </table>
);

export default ScoreTable;
