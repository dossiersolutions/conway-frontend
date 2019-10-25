import React, {Component} from "react";
import GameScreen from "./GameScreen";

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGame: false
    }
  }

  clickOnSelectGame(){
    const{
      selectedGame
    } = this.state;

    this.setState({selectedGame : !selectedGame})
  }

  openSingleGame() {
    const{
      selectedGame
    } = this.state;

    if(selectedGame){
      return (
          <GameScreen/>
    );
    }
    else{
      return (
          <div>All GAMES</div>
      );
    }
  }

  render() {
    return (
        <div className="MainScreenData">
          <div className="col-md-12" style={{textAlign: "center"}}>
            <h3 onClick={() => this.clickOnSelectGame()}>List of Games:</h3>
          </div>
          <hr/>
          <div>
            <h3>Start a new game</h3>
          </div>

          {this.openSingleGame()}
        </div>
    );
  }
}

export default MainScreen;