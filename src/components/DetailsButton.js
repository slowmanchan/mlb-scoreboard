import React, {Component} from 'react';
import axios from 'axios';
import DetailsBox from './DetailsBox';

class DetailsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxscore: []
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.fetchBatterData = this.fetchBatterData.bind(this);
  }

  fetchBatterData() {
    let gameDayString = this.props.gameday.split('_');
    let year = gameDayString[0];
    let month = gameDayString[1];
    let day = gameDayString[2];
    let homeCode = gameDayString[3];
    let awayCode = gameDayString[4];

    gameDayString = "year_" + year + "/month_" + month + "/day_" + day + "/gid_" + this.props.gameday;

    axios.get(`http://gd2.mlb.com/components/game/mlb/${gameDayString}/boxscore.json`)
      .then((res) => {
        this.props.handleDetailsUpdate(res.data.data.boxscore)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  clickHandler(e) {
    //DetailsBox
    e.preventDefault();

    // Reset existing.
    this.props.handleDetailsUpdate(null)
    this.fetchBatterData()
  }

  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>details</button>
      {this.state.showComponent ? <DetailsBox linescore={this.props.linescore} home={this.props.home} away={this.props.away}/> : null}
      </div>
    )
  }
}

export default DetailsButton;
