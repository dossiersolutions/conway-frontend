import React from "react";
import {createGame} from "./Controllers/GameController";
import {useHistory} from "react-router-dom";
import {Button, FormSelect} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export function NewGameScreen({}) {

  let history = useHistory();

  return (
      <div className="NewGameScreen">
        <h3>Create new game</h3>
        <label>
          Game type
          <FormSelect>
            <option value="basic">Basic</option>
            <option value="something">Something</option>
          </FormSelect>
        </label>
        <br/>
        <Button
            onClick={() => {
              createGame().then((res) => {
                history.push("/game/" + res.id);
              })
            }}
        >
          Go!
        </Button>
      </div>
  );
}