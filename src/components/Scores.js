import React, { Component } from 'react';
import DetailsButton from './DetailsButton';
/*
 * component displays scores for each team on a given date
 */
class Scores extends Component {

  render() {
    let {
      away_name_abbrev,
      home_name_abbrev,
      status,
      linescore,
      home_code,
      away_code,
    } = this.props.data;

    let homeWinning = false;
    let awayWinning = false;
    // compare scores to see which team to apply bold style
    if (status.status !== 'Preview') {
      homeWinning = linescore.r.home > linescore.r.away;
      awayWinning = linescore.r.away > linescore.r.home;
    }

    // display scores and bold the winning team
    return (
      <table className="scoreBox">
        <thead>
          <tr>
            <th colSpan={2}>{status.status}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={homeWinning ? 'bold' : null}>{home_name_abbrev}</td>
            <td>{linescore.r.home}</td>
          </tr>
          <tr>
            <td className={awayWinning ? 'bold' : null}>{away_name_abbrev}</td>
            <td>{linescore.r.away}</td>
          </tr>
          <tr>
            <td>
              <DetailsButton
                linescore={this.props.data.linescore}
                gameday={this.props.gameday}
                handleDetailsUpdate={this.props.handleDetailsUpdate}
                home={home_code}
                away={away_code}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Scores;
