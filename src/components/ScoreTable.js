import React, { PropTypes } from 'react';
import ScoreHeadingsRow from './ScoreHeadingsRow';
import HomeRow from './HomeRow';
import AwayRow from './AwayRow';

/*
 * Component renders the innings, team name and scoring stats
 * It receives a data object as props from the parent container
 */
const ScoreTable = ({ data }) => (
  <table id="scoreTable">
    <thead>
      <ScoreHeadingsRow
        linescore={data.linescore}
      />
    </thead>
    <tbody>
      <HomeRow
        linescore={data.linescore}
        home_sname={data.home_sname}
      />
      <AwayRow
        linescore={data.linescore}
        away_sname={data.away_sname}
      />
    </tbody>
  </table>
);

ScoreTable.propTypes = {
  data: PropTypes.shape({
    home_sname: PropTypes.string,
    away_sname: PropTypes.string,
    linescore: PropTypes.object,
  }),
};

export default ScoreTable;
