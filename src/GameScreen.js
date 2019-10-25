import React, {Component} from "react";
import {GameCanvas} from "./GameCanvas";
import {GAME_STATE_BASIC, GameState} from "./GameState/GameState";

class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasDefaultState: new GameState(GAME_STATE_BASIC, 1, 1, [1])
    }
  }

  render() {
    return (
        <div className="MainScreen" style={{marginBottom: "20px", marginTop: "10px"}}>
          <GameCanvas gameState={this.state.canvasDefaultState}/>
        </div>
    );
  }
}

export default GameScreen;