import React from "react";
import {createGame} from "./Controllers/GameController";
import {useHistory} from "react-router-dom";

export function NewGameScreen({}) {

  let history = useHistory();

  return (
      <div className="NewGameScreen">
        <h3>Create new game</h3>
        <label>
          Game type
          <select
              className="new-game-select"
              onSelect={(value) => {
                console.log("value", value);
              }}
          >
            <option value="basic">Basic</option>
            <option value="something">Something else</option>
          </select>
        </label>
        <br/>
        <button
            className="new-game-go"
            onClick={() => {
              createGame().then((res) => {
                history.push("/game/" + res.id);
              })
            }}
        >
          Go!
        </button>
      </div>
  );
}