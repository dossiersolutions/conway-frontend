import React, {Component} from "react";
import {Link} from "react-router-dom";
import {getGameIds} from "./Controllers/GameController";
import {createGame} from "./Controllers/GameController";

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.getAllGames = this.getAllGames.bind(this);

    this.state = {
      selectedGame: false,
      games: [],
    }
  }

  componentDidMount() {
    setInterval(this.getAllGames, 1000);
  }

  getAllGames() {
    getGameIds().then(res => {
      this.setState({
        games: res,
      })
    })
  }

  getGameListJsx() {
  }

  clickOnSelectGame() {

  }

  render() {
    return (
        <div className="MainScreenData">
          <div className="col-md-12" style={{textAlign: "center"}}>
            <h3 onClick={() => this.clickOnSelectGame("1")}>List of Games:</h3>
            {
              this.state.games.map((id) => {
                return <div><Link to={"/game/" + id}>{id}</Link></div>
              })
            }
          </div>
          <hr/>
          <div>
            <button
                onClick={() => {
                  createGame();
                }}
            >
              Start a new game
            </button>
          </div>
        </div>
    );
  }
}

export default MainScreen;