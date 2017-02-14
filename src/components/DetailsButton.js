import React, { Component } from 'react';
import axios from 'axios';
import DetailsBox from './DetailsBox';

class DetailsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxscore: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.fetchBatterData = this.fetchBatterData.bind(this);
  }
  /*
   * This function format the gameday string passed from
   * the parent container plug it into
   * the url string so that we make the correct all to the api
   * Then we fetch the data with the chose date and game info
   */
  fetchBatterData() {
    let gameDayString = this.props.gameday.split('_');
    const year = gameDayString[0];
    const month = gameDayString[1];
    const day = gameDayString[2];

    gameDayString = `year_${year}/month_${month}/day_${day}/gid_${this.props.gameday}`;

    axios.get(`http://gd2.mlb.com/components/game/mlb/${gameDayString}/boxscore.json`)
      .then((res) => {
        this.props.handleDetailsUpdate(res.data.data.boxscore)
      })
      .catch(() => {
        window.alert('No boxscore data found')
      });
  }
  /*
   * This function will re render the details box
   * and fetch new boxscore data from the api
   */
  clickHandler(e) {
    e.preventDefault();
    this.props.handleDetailsUpdate(null)
    this.fetchBatterData();
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>details</button>
        {
         this.state.showComponent ?
           <DetailsBox
             linescore={this.props.linescore}
             home={this.props.home}
             away={this.props.away}
           /> : null
        }
      </div>
    );
  }
}

export default DetailsButton;
