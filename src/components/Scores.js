import React, {Component} from 'react';

class Scores extends Component {

  render() {
    let {
      away_name_abbrev,
      home_name_abbrev,
      status,
      linescore,
      home_code,
      away_code,
      home_sport_code,
      away_sport_code
    } = this.props.data;


    let homeWinning = false;
    let awayWinning = false;
    // check to see which is the winning scores
    if (status.status !== 'Preview') {
      homeWinning = linescore.r.home > linescore.r.away;
      awayWinning = linescore.r.away > linescore.r.home;
    }

    // display scores and bolding the winning team
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
              <td>{status.status == 'Final' || status.status == "Completed Early" ? <DetailsButton linescore={this.props.data.linescore} gameday={this.props.gameday} handleDetailsUpdate={this.props.handleDetailsUpdate} home_sport_code={home_sport_code} home={home_code} away={away_code} away_sport_code={away_sport_code} date={this.props.date}/> : <div>&nbsp;</div>}</td>
            </tr>
          </tbody>
      </table>
    );
  }
}

export default Scores
