import React, { Component } from 'react';
import axios from 'axios';
import Scores from './Scores';
import DetailsBox from './DetailsBox';
import DateSelector from './DateSelector';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    /*
     * games refers data.games.game from the mlb api
     * sample of the data structure found at this url:
     * http://gd2.mlb.com/components/game/mlb/year_2015/month_04/day_01/master_scoreboard.json
     *
     * date refers to the date used in the data selection component
     *
     * noGameData denotes the existance of game data
     *
     * details is data fetched from the boxscore.json portion of the mlb api
     * sample of the data structure found here:
     * http://gd2.mlb.com/components/game/mlb/year_2015/month_04/day_01/gid_2015_04_01_anamlb_oakmlb_1/boxscore.json
     */
    this.state = {
      games: [],
      date: [],
      noGameData: true,
      details: null,
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailsUpdate = this.handleDetailsUpdate.bind(this);
  }
  /*
   * this function updates the details state with data fetched from the mlb api boxscore.json
   * sample here:
   * http://gd2.mlb.com/components/game/mlb/year_2015/month_04/day_01/gid_2015_04_01_anamlb_oakmlb_1/boxscore.json
   */
  handleDetailsUpdate(details) {
    this.setState({
      details,
    });
  }

  /*
   * fetch data from MLB JSON API master_scoreboard.json
   * restructures data so that TOR is always at the front of the list
   * checks for existance of the data and initializes state to blank if no data found
   * sets games in state to the restructured data
   */
  fetchData(month, day, year) {
    axios.get(`http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`)
      .then((res) => {
        /*
         * Destructuring response from the api
         * Either one game object is returned or an array of objects
         * or undefined
         */
        const { game } = res.data.data.games;

        if (game) {
          let games;
          if (typeof game.length === 'undefined') {
            games = [game];
          } else {
            games = game;
          }

          /*
           * Map over the games array and create a copy of each game object in the array
           * to determine the existance of the linescore object
           * if none exists, set the copied game objects linescore to an object with empty values
           */
          games = games.map((game) => {
            let gameCopy = Object.assign({}, game);
            if (!gameCopy.hasOwnProperty('linescore')) {
              gameCopy.linescore = {
                r: {
                  home: '',
                  away: '',
                },
              };
            }
            return gameCopy;
          });
          /*
           * Here we reorder the array of games so that Toronto will always
           * be first in the array
           * we iterate over the games object and seperate games that have Tor
           * and games that do not.  Then we merge and return the gamesToronto array
           */
          let gamesToronto = [];
          const gamesNotToronto = [];
          games.forEach((game) => {
            if (game.away_code === 'tor' || game.home_code === 'tor') {
              gamesToronto.push(game);
            } else {
              gamesNotToronto.push(game);
            }
          });
          gamesToronto = gamesToronto.concat(gamesNotToronto);
          /*
           * finally set the state of games with the reordered array and set the
           * noGameData flag to false (because games exist)
           */
          this.setState({
            games: gamesToronto,
            noGameData: false,
          });
        /*
         * if data set has no games then set the no games data flag to true
         * and initialize the games array to an empty array literal
         */
        } else {
          this.setState({
            games: [],
            noGameData: true,
          });
        }
      })
      .catch(() => {
        this.setState({
          games: [],
          noGameData: true,
        });
      });
  }
  /*
   * Function that takes in a value from the date selector, breaks it down into
   * the right format and pass it the the fetchData function to get data from the appropriate
   * json file
   */
  handleChange(e) {
    this.handleDetailsUpdate(null);
    const dateString = e.target.value.split('-');
    const year = dateString[0];
    const month = dateString[1];
    const day = dateString[2];

    this.fetchData(month, day, year);
    this.setState({
      date: [month, day, year],
    });
  }

  render() {
    const checkGameData = () => {
      if (this.state.noGameData) {
        return (
          <div id="emptyGames">
            <h1>No games found</h1>
          </div>
        );
      }
    };

    /*
     * Build an array of game objects and pass down the associated
     * game object, the date, and a callback to handle updating the detials
     * component
     */
    const scores = [];
    this.state.games.forEach((game, index) => {
      scores.push(
        <Scores
          handleDetailsUpdate={this.handleDetailsUpdate}
          gameday={game.gameday}
          data={game} key={index}
          date={this.state.date}
        />,
      );
    });

    return (
      <div>
        <h1 id="mainHeading">Mlb Score Board</h1>
        <DateSelector handleChange={this.handleChange} />
        {checkGameData()}
        {scores}
        {this.state.details ? <DetailsBox details={this.state.details} /> : null}
      </div>
    );
  }
}

export default ScoreBoard;
