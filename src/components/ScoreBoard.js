import React, {Component} from "react";
import axios from "axios";
import Scores from "./Scores";
import DetailsBox from "./DetailsBox";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      date: [],
      noGameData: true,
      details: null,

    }
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailsUpdate = this.handleDetailsUpdate.bind(this);
  }

  handleDetailsUpdate(details) {
    this.setState ({
      details: details
    })
  }

  // fetch data from MLB JSON API
  fetchData(month, day, year) {
    axios.get(`http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`)
      .then((res) => {
        // 1 or more games, obj or array.
        if (res.data.data.games.game) {

          let games;
          // Just one game: single object
          if (typeof res.data.data.games.game.length === "undefined") {
            games = [res.data.data.games.game]
          } else {
            games = res.data.data.games.game;
          }

          // map over games, create copy of games and if game is missing linescore, create
          // blank linescore

          games = games.map((game, idx) => {
            let gameCopy = Object.assign({}, game);

            if (!gameCopy.hasOwnProperty('linescore')) {
              gameCopy.linescore = {
                r: {
                  home: '',
                  away: '',
                }
              };
            }
            return gameCopy;
          })

          let gamesToronto = [];
          let gamesNotToronto = [];
          games.forEach((game) => {

            // Store toronto game.
            if (game.away_code === "tor" || game.home_code === "tor") {
              gamesToronto.push(game);
            } else {
              gamesNotToronto.push(game); //Not toronto game.
            }
          })

          gamesToronto = gamesToronto.concat(gamesNotToronto)


          this.setState({
            games: gamesToronto,
            noGameData: false,
          });
        } else {
          this.setState({
            games: [],
            noGameData: true,
          })
        }
      })

      .catch((error) => {
        this.setState({
          games: [],
          noGameData: true,
        })
      });
  }

  handleChange(e) {
    this.handleDetailsUpdate(null);
    const dateString = e.target.value.split('-');
    const year = dateString[0];
    const month = dateString[1];
    const day = dateString[2];

    this.fetchData(month, day, year)
    this.setState({
      date: [month, day, year]
    })
  }

  render() {
    const checkGameData = () => {
      if (this.state.noGameData) {
        return (
          <div>
            No games found
          </div>
        );
      }
    }

    var scores = [];

    this.state.games.forEach((game, index) => {
      scores.push(
        <Scores handleDetailsUpdate={this.handleDetailsUpdate}
                gameday={game.gameday}
                data={game} key={index}
                date={this.state.date} />);
    });

    return (
      <div>
        <DateSelector handleChange={this.handleChange} />
        {checkGameData()}
        {scores}
        {this.state.details ? <DetailsBox details={this.state.details}/> : null}
      </div>
    );
  }
}

class DateSelector extends Component {
  render() {
    return (
      <form>
        <input type="date" onChange={this.props.handleChange} />
      </form>
    )
  }
}


export default ScoreBoard;
